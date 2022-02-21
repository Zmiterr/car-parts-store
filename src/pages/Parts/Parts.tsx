import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from '../../shared/styled/containers/Container';
import Part from './Components/Part/Part';
import Search from './Components/Search/Search';
import { getLots } from '../../store/lots/lotsActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { LotInterface } from '../../store/lots/types';
import { CompareButtonArea } from './styles';
import { RouteNames } from '../../router';
import { AuthSuggestModal } from './Components/AuthSuggestModal';

const Parts: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLots());
  }, [dispatch]);
  const { lots } = useTypedSelector((state) => state.lots);
  const lotsToCompare = useTypedSelector((state) => state.lots.lotsToCompare);
  const [filteredLots, setFilteredLots] = useState(lots);

  useEffect(() => {
    setFilteredLots(lots);
  }, [lots]);

  const [isOpenAuthSuggestModal, setIsOpenAuthSuggestModal] = useState<boolean>(false);

  return (
    <Container>
      <Search setFilteredLots={setFilteredLots} lots={lots} />
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
