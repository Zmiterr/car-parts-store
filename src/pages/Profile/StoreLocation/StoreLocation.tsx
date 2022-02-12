import React, { FC, useEffect, useState } from 'react';
import { Placemark, YMaps, Map } from 'react-yandex-maps';

const StoreLocation: FC = () => {
  const [place, setPlace] = useState([55.684758, 37.738521]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setPlace([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

  const clickOnMap = (e: { get: (arg0: string) => React.SetStateAction<number[]> }) => {
    setPlace(e.get('coords'));
  };
  return (
    <YMaps>
      <Map
        width="90vh"
        height="60vh"
        defaultState={{
          center: place,
          zoom: 13,
        }}
        instanceRef={(inst) => inst?.events?.add('click', clickOnMap)}
      >
        <Placemark geometry={place} properties={{ iconCaption: 'your store' }} />
      </Map>
    </YMaps>
  );
};

export default StoreLocation;
