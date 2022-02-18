import React, { FC, useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { PrimaryButton } from '../../shared/styled/Elements/PrimaryButton';
import { Container } from '../../shared/styled/containers/Container';
import { PageHeader } from '../../shared/styled/headers/PageHeader';
import { H2 } from '../../shared/styled/headers/H2';
import UserInfoForm from './UserInfoForm/UserInfoForm';
import CardForm from './CardForm/CardForm';

enum PayWay {
  CARD = 'card',
  CASH = 'cash',
}

const OrderConfirm: FC = () => {
  const [payWay, setPayWay] = useState<string>(PayWay.CARD);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPayWay(event.target.value);
  };

  return (
    <Container>
      <PageHeader>
        <H2>Order confirm</H2>
      </PageHeader>
      <UserInfoForm />
      <ToggleButtonGroup color="primary" value={payWay} exclusive onChange={handleChange}>
        <ToggleButton value={PayWay.CARD}>{PayWay.CARD}</ToggleButton>
        <ToggleButton value={PayWay.CASH}>{PayWay.CASH}</ToggleButton>
      </ToggleButtonGroup>
      {payWay === PayWay.CARD && <CardForm />}
      <PrimaryButton>Order</PrimaryButton>
    </Container>
  );
};

export default OrderConfirm;
