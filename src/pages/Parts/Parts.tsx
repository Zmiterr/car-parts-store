import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../shared/styled/containers/Container';
import Part from './Components/Part/Part';
import Search from './Components/Search/Search';
import { getLots } from '../../store/lots/lotsActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { LotInterface } from '../../store/lots/types';

const Parts: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLots());
  }, [dispatch]);
  const { lots } = useTypedSelector((state) => state.lots);
  const [filteredLots, setFilteredLots] = useState(lots);

  useEffect(() => {
    setFilteredLots(lots);
  }, [lots]);

  // console.log(filteredLots);

  return (
    <Container>
      <Search setFilteredLots={setFilteredLots} lots={lots} />
      {filteredLots.map((lot: LotInterface) => (
        <Part key={lot.id} lot={lot} />
      ))}
    </Container>
  );
};

export default Parts;
