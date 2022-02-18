import React, { FC, useState } from 'react';
import { Checkbox, FormControlLabel, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { PrimaryButton } from '../../shared/styled/Elements/PrimaryButton';
import { Container } from '../../shared/styled/containers/Container';
import { PageHeader } from '../../shared/styled/headers/PageHeader';
import { H2 } from '../../shared/styled/headers/H2';
import UserInfoForm from './UserInfoForm/UserInfoForm';
import CardForm from './CardForm/CardForm';
import ConfirmSuccessModal from './ConfirmSuccessModal';

enum PayWay {
  CARD = 'card',
  CASH = 'cash',
}

const OrderConfirm: FC = () => {
  const [payWay, setPayWay] = useState<string>(PayWay.CARD);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPayWay(event.target.value);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isSaveUSerData, setIsSaveUSerData] = useState(true);

  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSaveUSerData(event.target.checked);
  };

  return (
    <Container>
      <PageHeader>
        <H2>Order confirm</H2>
      </PageHeader>
      <UserInfoForm />
      <FormControlLabel
        control={
          <Checkbox defaultChecked checked={isSaveUSerData} onChange={handleChangeCheckBox} />
        }
        label="Save data for next orders"
      />
      <ToggleButtonGroup color="primary" value={payWay} exclusive onChange={handleChange}>
        <ToggleButton value={PayWay.CARD}>{PayWay.CARD}</ToggleButton>
        <ToggleButton value={PayWay.CASH}>{PayWay.CASH}</ToggleButton>
      </ToggleButtonGroup>
      {payWay === PayWay.CARD && <CardForm />}
      <PrimaryButton onClick={handleOpen}>Order</PrimaryButton>
      <ConfirmSuccessModal open={open} handleClose={handleClose} />
    </Container>
  );
};

export default OrderConfirm;
