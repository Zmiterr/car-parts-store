import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { H2 } from '../../shared/styled/headers/H2';
import { Container } from '../../shared/styled/containers/Container';
import { PageHeader } from '../../shared/styled/headers/PageHeader';
import Lot from './Lot/Lot';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { createLot, getLots } from '../../store/lots/lotsActions';
import { getParts } from '../../store/parts/partsActions';
import { PrimaryButton } from '../../shared/styled/Elements/PrimaryButton';
import { LotsModal } from './LotsModal';
import { LotInterface } from '../../store/lots/types';

export type SubmitBodyInterface = Omit<LotInterface, 'id'>;
const MyLots: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLots());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getParts());
  }, [dispatch]);

  const { lots } = useTypedSelector((state) => state.lots);
  const [isOpen, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const onSubmit = (data: SubmitBodyInterface) => {
    dispatch(createLot(data));
    setOpen(false);
  };
  return (
    <Container>
      <PageHeader>
        <H2>My lots</H2>
      </PageHeader>
      <PrimaryButton onClick={() => setOpen(true)}>Add new lot</PrimaryButton>
      {lots.map((lot) => (
        <Lot key={lot.id} lot={lot} />
      ))}
      <LotsModal handleClose={handleClose} isOpen={isOpen} onSubmit={onSubmit} />
    </Container>
  );
};

export default MyLots;
