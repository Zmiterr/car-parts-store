import React, { FC, useEffect, useState } from 'react';
import { Placemark, YMaps, Map, ZoomControl } from 'react-yandex-maps';
import { PrimaryButton } from '../../../shared/styled/Elements/PrimaryButton';
import { config } from '../../../config/config';
import { MapWrapper } from '../Styles';

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

  const handleClickSaveLocation = () => {
    console.log(place.join('-'));
    // TODO dispatch?
  };
  return (
    <MapWrapper>
      <YMaps query={{ load: 'package.full', apikey: config.YANDEX_API_KEY }} className="ww">
        <Map
          width="60vw"
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
        </Map>
      </YMaps>
      <div className="button-wrapper">
        <PrimaryButton onClick={handleClickSaveLocation}>Where place me?</PrimaryButton>
      </div>
    </MapWrapper>
  );
};

export default StoreLocation;
