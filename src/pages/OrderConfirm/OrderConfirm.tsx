import React, { FC, useState } from 'react';
import { Checkbox, FormControlLabel, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useDispatch } from 'react-redux';
import { PrimaryButton } from '../../shared/styled/Elements/PrimaryButton';
import { Container } from '../../shared/styled/containers/Container';
import { PageHeader } from '../../shared/styled/headers/PageHeader';
import { H2 } from '../../shared/styled/headers/H2';
import UserInfoForm from './UserInfoForm/UserInfoForm';
import CardForm from './CardForm/CardForm';
import ConfirmSuccessModal from './ConfirmSuccessModal';
import { createOrder } from '../../store/orders/ordersActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

enum PayWay {
  CARD = 'card',
  CASH = 'cash',
}

export interface SubmitOrdersBodyInterface {
  lotsId: string;
  customerId: number;
}

const OrderConfirm: FC = () => {
  const dispatch = useDispatch();
  const customerId = useTypedSelector((state) => state.user.user![0].id);
  const orders = useTypedSelector((state) => state.lots.lotsInCart).join('-');
  const [payWay, setPayWay] = useState<string>(PayWay.CARD);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPayWay(event.target.value);
  };
  const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClickOrderButton = () => {
    dispatch(createOrder({ lotsId: orders, customerId }));
    setOpen(true);
  };
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
      <PrimaryButton onClick={handleClickOrderButton}>Order</PrimaryButton>
      <ConfirmSuccessModal open={open} handleClose={handleClose} />
    </Container>
  );
};

export default OrderConfirm;
