import React, { FC, useState } from 'react';
import {
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  TextFieldProps,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import Autocomplete from '@mui/material/Autocomplete';
import { ModalBox } from '../../shared/styled/containers/ModalBox';
import { H2 } from '../../shared/styled/headers/H2';
import { Input, Submit } from '../Login/Styles';
import { FieldErrorNotification } from '../../shared/styled/headers/FieldErrorNotification';
import { LotInterface } from '../../store/lots/types';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { PartsInterface } from '../../models/PartsInterface';

type SubmitBodyInterface = Omit<LotInterface, 'id'>;

interface LotsModalProps extends ModalPropsWithoutLots {
  lot: LotInterface;
}

interface ModalPropsWithoutLots {
  onSubmit: (data: SubmitBodyInterface) => void;
  handleClose: () => void;
  isOpen: boolean;
}

type ModalPropsLots = ModalPropsWithoutLots | LotsModalProps;

export const LotsModal: FC<ModalPropsLots> = ({ onSubmit, lot, handleClose, isOpen }) => {
  const { parts } = useTypedSelector((state) => state.parts);
  const partsArray = Object.values(parts);
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

  const [value, setValue] = useState(null);
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
          <Autocomplete
            value={value}
            id="parts-search"
            options={partsArray}
            autoHighlight
            groupBy={(option: PartsInterface) => option.category}
            getOptionLabel={(option: PartsInterface) =>
              `${option.name}. Models: ${option.models.join(', ')}`
            }
            renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
              <TextField
                {...params}
                label={lot?.name || 'Choose part'}
                value={lot?.name}
                variant="outlined"
                inputProps={{
                  ...params.inputProps,
                }}
              />
            )}
            onChange={(event, newItem) => {
              setValue(newItem);
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
