import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { H2 } from '../../shared/styled/headers/H2';
import { Container } from '../../shared/styled/containers/Container';
import { PageHeader } from '../../shared/styled/headers/PageHeader';
import Lot from './Lot/Lot';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getLots } from '../../store/lots/lotsActions';
import { getParts } from '../../store/parts/partsActions';
import { PrimaryButton } from '../../shared/styled/Elements/PrimaryButton';

export interface LotInterface {
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
        <H2>My lots</H2>
      </PageHeader>
      <PrimaryButton>Add new lot</PrimaryButton>
      {lots.map((lot: LotInterface) => (
        <Lot key={lot.id} lot={lot} />
      ))}
    </Container>
  );
};

export default MyLots;
