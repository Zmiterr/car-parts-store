import haversine from 'haversine';

import { sortArrayDescend } from './sortArrayAscend';
import { LotInterface } from '../../store/lots/types';

const stringCoordinatesToObject = (stringCoordinates: string) => {
  const positionArr = stringCoordinates.split('-');
  return {
    latitude: Number(positionArr[0]),
    longitude: Number(positionArr[0]),
  };
};

export const nearByFilter = (filterValue: string, lots: LotInterface) => {
  const start = stringCoordinatesToObject(filterValue);
  return Object.values(lots).sort((a, b) =>
    sortArrayDescend(
      haversine(stringCoordinatesToObject(a.location), start),
      haversine(stringCoordinatesToObject(b.location), start),
    ),
  );
};

export const LotsFilters = [nearByFilter];
