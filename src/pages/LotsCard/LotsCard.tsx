import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container } from '../../shared/styled/containers/Container';
import { PageHeader } from '../../shared/styled/headers/PageHeader';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import LotCardItem from './components/LotCardItem';
import { getLots } from '../../store/lots/lotsActions';

interface ParamsProps {
  id: string;
}

const LotsCard: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLots);
  }, [dispatch]);
  // TODO fix page crash after reload
  const { id } = useParams<ParamsProps>();
  const lots = useTypedSelector((state) => state.lots.lots);
  const lot = lots.find((lotItem) => lotItem.id === Number(id));
  const sameParts = lots.filter(
    (lotItem) => lotItem.partId === lot.partId && lotItem.id !== lot.id,
  );
  return (
    <Container>
      <PageHeader>
        <h2>Lot detail</h2>
      </PageHeader>
      <p>Selected lot</p>
      <LotCardItem lot={lot} />
      <p>Other offers</p>
      {sameParts.length > 0 ? (
        sameParts.map((lot2) => {
          return <LotCardItem key={lot.id} lot={lot2} />;
        })
      ) : (
        <p>-</p>
      )}
    </Container>
  );
};

export default LotsCard;
