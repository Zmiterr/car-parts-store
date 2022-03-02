import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import haversine from 'haversine';
import { Container } from '../../shared/styled/containers/Container';
import Part from './Components/Part/Part';
import Search from './Components/Search/Search';
import { getLots } from '../../store/lots/lotsActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { LotInterface } from '../../store/lots/types';
import { CompareButtonArea } from './styles';
import { RouteNames } from '../../router';
import { AuthSuggestModal } from './Components/AuthSuggestModal';
import { sortArrayDescend } from '../../shared/utils/sortArrayAscend';
import { getLocation } from '../../shared/utils/location';

const Parts: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLots());
  }, [dispatch]);
  const { lots } = useTypedSelector((state) => state.lots);
  const lotsToCompare = useTypedSelector((state) => state.lots.lotsToCompare);
  const [filteredLots, setFilteredLots] = useState(lots);
  const [currentPosition, setCurrentPosition] = useState<string>('');

  useEffect(() => {
    setFilteredLots(lots);
  }, [lots]);

  useEffect(() => {
    const getCurrentPosition = async () => {
      const result = await getLocation();
      setCurrentPosition(result);
    };
    getCurrentPosition();
  });

  const [isOpenAuthSuggestModal, setIsOpenAuthSuggestModal] = useState<boolean>(false);

  const stringCoordinatesToObject = (stringCoordinates: string) => {
    const positionArr = stringCoordinates.split('-');
    return {
      latitude: Number(positionArr[0]),
      longitude: Number(positionArr[0]),
    };
  };

  const start = stringCoordinatesToObject(currentPosition);

  const handleNearMeClick = async () => {
    const nearMeLots = Object.values(lots).sort((a, b) =>
      sortArrayDescend(
        haversine(stringCoordinatesToObject(a.location), start),
        haversine(stringCoordinatesToObject(b.location), start),
      ),
    );
    setFilteredLots(nearMeLots);
  };
  return (
    <Container>
      <Search setFilteredLots={setFilteredLots} lots={lots} handleNearMeClick={handleNearMeClick} />
      {filteredLots.map((lot: LotInterface) => (
        <Part key={lot.id} lot={lot} setIsOpenAuthSuggestModal={setIsOpenAuthSuggestModal} />
      ))}
      {lotsToCompare.length > 1 && (
        <CompareButtonArea>
          <Link to={RouteNames.COMPARE}>
            <div className="compare-button"> Compare</div>
          </Link>
        </CompareButtonArea>
      )}
      <AuthSuggestModal
        isOpenAuthSuggestModal={isOpenAuthSuggestModal}
        setIsOpenAuthSuggestModal={setIsOpenAuthSuggestModal}
      />
    </Container>
  );
};

export default Parts;
