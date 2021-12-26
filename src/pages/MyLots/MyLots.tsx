import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../shared/styled/containers/Container';
import { PageHeader } from '../../shared/styled/headers/PageHeader';
import Lot from './Lot/Lot';
import { getLots } from '../../store/reducers/lots/lotsActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const lotsMockArr = [
  {
    id: 1,
    name: 'Detail 1',
    description: 'Low Priority',
    fitCars: ['Spider'],
  },
  {
    id: 2,
    name: 'Detail 2',
    description: 'High Priority',
    fitCars: ['Stelvio', 'Giulia'],
  },
  {
    id: 3,
    name: 'Detail 3',
    description: 'High Priority',
    fitCars: ['Stelvio', 'Spider'],
  },
];

const MyLots: FC = () => {
  const dispatch = useDispatch();
  dispatch(getLots);
  const { issues } = useTypedSelector((state) => state.lots);

  return (
    <Container>
      <PageHeader>
        <h2>My lots</h2>
      </PageHeader>
      {lotsMockArr.map((lot: any) => {
        return <Lot key={lot.id} lot={lot} />;
      })}
    </Container>
  );
};

export default MyLots;
