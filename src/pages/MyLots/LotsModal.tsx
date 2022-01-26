import React, { FC } from 'react';
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
import { sortArrayAscend } from '../../shared/utils/sortArrayAscend';

interface LotsModalProps extends ModalPropsWithoutLots {
  lot: LotInterface;
}

interface ModalPropsWithoutLots {
  onSubmit: (data: LotInterface) => void;
  handleClose: () => void;
  setAutocompleteData: (a: number) => void;
  isOpen: boolean;
}

type ModalPropsLots = ModalPropsWithoutLots & LotsModalProps;

export const LotsModal: FC<ModalPropsLots> = ({
  onSubmit,
  lot = {} as LotInterface,
  handleClose,
  isOpen,
  setAutocompleteData,
}) => {
  const { parts } = useTypedSelector((state) => state.parts);
  const partsArray = Object.values(parts).sort((a, b) => sortArrayAscend(a.category, b.category));
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

  // const [autocompleteData, setAutocompleteData] = useState(null);
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
            id="parts-search"
            options={partsArray}
            autoHighlight
            groupBy={(option: PartsInterface) => option.category}
            getOptionLabel={(option: PartsInterface) =>
              `${option.id}. ${option.name}. Models: ${option.models.join(', ')}`
            }
            renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
              <TextField
                {...params}
                label={lot?.name || 'Choose part'}
                value={lot?.id}
                variant="outlined"
                inputProps={{
                  ...params.inputProps,
                }}
              />
            )}
            onChange={(_event, newItem) => {
              if (newItem?.id) setAutocompleteData(newItem.id);
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
