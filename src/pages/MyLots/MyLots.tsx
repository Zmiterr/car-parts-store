import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../shared/styled/containers/Container';
import { PageHeader } from '../../shared/styled/headers/PageHeader';
import Lot from './Lot/Lot';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getLots } from '../../store/lots/lotsActions';

export interface LotsInterface {
  objectId: string;
  Category: string;
  Name: string;
  Description: string;
  Models: string[];
  Price: number;
  PhotoUrl: string;
}

const MyLots: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLots());
  }, []);

  const { lots } = useTypedSelector((state) => state.lots);

  return (
    <Container>
      <PageHeader>
        <h2>My lots</h2>
      </PageHeader>
      {lots.map((lot: LotsInterface) => (
        <Lot key={lot.objectId} lot={lot} />
      ))}
    </Container>
  );
};

export default MyLots;
