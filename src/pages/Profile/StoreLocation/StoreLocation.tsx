import React, { FC, useEffect, useState } from 'react';
import {
  Placemark,
  YMaps,
  Map,
  ZoomControl,
  FullscreenControl,
  GeolocationControl,
  SearchControl,
} from 'react-yandex-maps';
import { config } from '../../../config/config';

const StoreLocation: FC = () => {
  const [place, setPlace] = useState([53.94544564913215, 27.774963676929314]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPlace([position.coords.latitude, position.coords.longitude]);
    });
  }, []);
  const [ymaps, setYmaps] = useState();
  const [address, setAddress] = useState('store');

  const clickOnMap = async (e: { get: (arg0: string) => React.SetStateAction<number[]> }) => {
    setPlace(e.get('coords'));
    const res = await ymaps?.geocode?.(e.get('coords'));
    const firstGeoObject = res?.geoObjects?.get(0);
    if (!firstGeoObject) return;
    const newAddress = [
      firstGeoObject.getLocalities().length
        ? firstGeoObject.getLocalities()
        : firstGeoObject.getAdministrativeAreas(),
      firstGeoObject.getThoroughfare() || firstGeoObject.getPremise(),
      firstGeoObject.getPremiseNumber(),
    ]
      .filter(Boolean)
      .join(', ');
    setAddress(newAddress);
  };

  return (
    <YMaps query={{ load: 'package.full', apikey: config.YANDEX_API_KEY }}>
      <Map
        width="90vh"
        height="60vh"
        defaultState={{
          center: place,
          zoom: 13,
        }}
        instanceRef={(inst) => inst?.events?.add('click', clickOnMap)}
        onLoad={(maps) => setYmaps(maps)}
      >
        <Placemark geometry={place} properties={{ iconCaption: address }} />
        <ZoomControl />
        <FullscreenControl />
        <SearchControl />
        <GeolocationControl />
      </Map>
    </YMaps>
  );
};

export default StoreLocation;
