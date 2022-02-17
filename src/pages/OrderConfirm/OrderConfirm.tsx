import React, { FC, useState } from 'react';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
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
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={payWay}
        row
        onChange={handleChange}
      >
        <FormControlLabel value={PayWay.CARD} control={<Radio />} label={PayWay.CARD} />
        <FormControlLabel value={PayWay.CASH} control={<Radio />} label={PayWay.CASH} />
      </RadioGroup>
      {payWay === PayWay.CARD && <CardForm />}
      <PrimaryButton>Order</PrimaryButton>
    </Container>
  );
};

export default OrderConfirm;
