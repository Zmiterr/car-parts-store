import React, { ChangeEvent, FC, useState } from 'react';
import { Modal, Radio, RadioGroup } from '@material-ui/core';
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
}

export const LotsModal: FC<LotsModalProps> = ({ onSubmit, handleClose, isOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
          <RadioGroup defaultValue="new" name="radio-buttons-group" row>
            <label htmlFor="new">
              new
              <Radio
                id="new"
                {...register('condition', { required: true })}
                value="new"
                color="default"
              />
            </label>
            <label htmlFor="used">
              used
              <Radio
                id="used"
                {...register('condition', { required: true })}
                value="used"
                color="default"
              />
            </label>
          </RadioGroup>
          <Input {...register('description')} placeholder="description" /> {/* register an input */}
          <Input type="number" {...register('price', { required: true })} placeholder="price" />
          {errors.price && <FieldErrorNotification>price is required.</FieldErrorNotification>}
          <Submit />
        </form>
      </ModalBox>
    </Modal>
  );
};
