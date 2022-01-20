import React, { ChangeEvent, FC, useState } from 'react';
import { FormControlLabel, Modal, Radio, RadioGroup } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { ModalBox } from '../../shared/styled/containers/ModalBox';
import { H2 } from '../../shared/styled/headers/H2';
import { Input, Submit } from '../Login/Styles';
import { FieldErrorNotification } from '../../shared/styled/headers/FieldErrorNotification';
import { LotInterface } from '../../store/lots/types';

type SubmitBodyInterface = Omit<LotInterface, 'id'>;

interface LotsModalProps {
  onSubmit: (data: SubmitBodyInterface) => void;
  handleClose: () => void;
  isOpen: boolean;
  // TODO fix TS error
  lot?: LotInterface | undefined;
}

export const LotsModal: FC<LotsModalProps> = ({ onSubmit, lot, handleClose, isOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      description: lot?.description,
      price: lot?.price,
      condition: lot?.condition,
    },
  });

  const [searchString, setSearchString] = useState('');
  const sortPartsArray = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  return (
    <Modal
      open={isOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={handleClose}
    >
      <ModalBox>
        <H2 id="modal-modal-title">Modal name</H2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            value={searchString}
            placeholder="Search"
            onChange={(e) => {
              sortPartsArray(e);
            }}
          />
          <RadioGroup defaultValue={String(lot?.condition)} name="radio-buttons-group" row>
            <FormControlLabel value="new" control={<Radio />} label="new" />
            <FormControlLabel value="used" control={<Radio />} label="used" />
          </RadioGroup>
          <Input {...register('description')} placeholder="description" />
          <Input type="number" {...register('price', { required: true })} placeholder="price" />
          {errors.price && <FieldErrorNotification>price is required.</FieldErrorNotification>}
          <Submit />
        </form>
      </ModalBox>
    </Modal>
  );
};
