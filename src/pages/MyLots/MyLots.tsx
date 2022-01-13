import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../shared/styled/containers/Container';
import { PageHeader } from '../../shared/styled/headers/PageHeader';
import Lot from './Lot/Lot';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getLots } from '../../store/lots/lotsActions';
import { getParts } from '../../store/parts/partsActions';

export interface LotsInterface {
  id: string;
  category: string;
  name: string;
  description: string;
  models: string[];
  condition: string;
  price: number;
  photoUrl: string;
}

const MyLots: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLots());
  }, []);
  useEffect(() => {
    dispatch(getParts());
  }, []);

  const { lots } = useTypedSelector((state) => state.lots);

  return (
    <Container>
      <PageHeader>
        <h2>My lots</h2>
      </PageHeader>
      {lots.map((lot: LotsInterface) => (
        <Lot key={lot.id} lot={lot} />
      ))}
    </Container>
  );
};

export default MyLots;
