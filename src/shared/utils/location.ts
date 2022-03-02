interface ErrorInterface extends PositionErrorCallback {
  code: number;
  message: string;
}

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

export const getLocation = () => {
  return new Promise((resolve, reject) => {
    const success = (pos: any) => {
      const crd = pos.coords;
      console.log(`More or less ${crd.accuracy} meters.`);
      resolve(`${crd.latitude}-${crd.longitude}`);
    };

    const errors = (err: ErrorInterface) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };
    if (navigator.geolocation) {
      navigator.permissions.query({ name: 'geolocation' }).then((result) => {
        if (result.state === 'granted') {
          navigator.geolocation.getCurrentPosition(success);
        }
        if (result.state === 'prompt') {
          navigator.geolocation.getCurrentPosition(success, errors, options);
        }
        if (result.state === 'denied') {
          alert('Ну и пожалуйста. Ну и не нужно!');
        }
        return null;
      });
    } else {
      alert('Sorry Not available!');
      reject();
    }
  });
};
