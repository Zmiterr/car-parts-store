import { useState } from 'react';

interface ErrorInterface extends PositionErrorCallback {
  code: number;
  message: string;
}

export const useCurrentLocation = () => {
  const [currentPosition, setCurrentPosition] = useState<string>('');
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  const success = (pos: any) => {
    const crd = pos.coords;
    setCurrentPosition(`${crd.latitude}-${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  };

  const errors = (err: ErrorInterface) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.permissions.query({ name: 'geolocation' }).then((result) => {
        if (result.state === 'granted') {
          navigator.geolocation.getCurrentPosition(success);
          return currentPosition;
        }
        if (result.state === 'prompt') {
          navigator.geolocation.getCurrentPosition(success, errors, options);
          return currentPosition;
        }
        if (result.state === 'denied') {
          alert('Ну и пожалуйста. Ну и не нужно!');
        }
        return null;
      });
    } else {
      alert('Sorry Not available!');
    }
  };
  return { getLocation, currentPosition };
};
