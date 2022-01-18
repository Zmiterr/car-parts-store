import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../shared/styled/containers/Container';
import Part from './Components/Part/Part';
import Search from './Components/Search/Search';
import { getLots } from '../../store/lots/lotsActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { LotInterface } from '../MyLots/MyLots';

const Parts: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLots());
  }, []);

  const { lots } = useTypedSelector((state) => state.lots);
  return (
    <Container>
      <Search />
      {lots.map((lot: LotInterface) => (
        <Part key={lot.id} lot={lot} />
      ))}
    </Container>
  );
};

export default Parts;
