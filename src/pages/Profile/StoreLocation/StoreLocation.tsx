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

const StoreLocation: FC = () => {
  const [place, setPlace] = useState([55.684758, 37.738521]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPlace([position.coords.latitude, position.coords.longitude]);
    });
  }, []);
  const [ymaps, setYmaps] = useState();

  const clickOnMap = (e: { get: (arg0: string) => React.SetStateAction<number[]> }) => {
    setPlace(e.get('coords'));
    console.log(ymaps);
    const geoObjects = ymaps && ymaps.geocode(e.get('coords'));
  };
  return (
    <YMaps query={{ load: 'package.full' }}>
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
        <Placemark geometry={place} properties={{ iconCaption: 'your store' }} />
        <ZoomControl />
        <FullscreenControl />
        <SearchControl />
        <GeolocationControl />
      </Map>
    </YMaps>
  );
};

export default StoreLocation;
