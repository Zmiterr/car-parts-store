import React, { FC } from 'react';
import { Modal } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { H2 } from '../../../shared/styled/headers/H2';
import { SmallDescribe } from '../../../shared/styled/headers/SmallDescribe';
import { StyledCard } from '../../../shared/styled/containers/Card';
import EditIcon from '../../../assets/icons/edit.svg';
import DeleteIcon from '../../../assets/icons/delete.svg';
import { Icon, IconWrapper, LotContent, LotDescription, LotName } from './Styles';
import { ModalBox } from '../../../shared/styled/containers/ModalBox';
import { LotsInterface } from '../MyLots';
import img from '../../../assets/images/ats_classic_1_large.png';
import { PartImage, PartOrderInfo, PartPrise } from '../../Parts/Components/Part/Styles';
import { removeLot, updateLot } from '../../../store/lots/lotsActions';
import { Input, Submit } from '../../Login/Styles';
import { FieldErrorNotification } from '../../../shared/styled/headers/FieldErrorNotification';

const Lot: FC = ({ lot }: LotsInterface) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const onRemovedLot = () => {
    dispatch(removeLot(lot.id));
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onEditLot = () => {
    setOpen(true);
  };

  const onSubmit = () => {
    dispatch(updateLot(lot.id));
  };

  return (
    <StyledCard>
      <LotContent>
        <Modal
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          onClose={handleClose}
        >
          <ModalBox>
            <H2 id="modal-modal-title">Modal name</H2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* //TODO make search field */}
              <p>search filed</p>
              <div>
                <input type="radio" value="new" name="condition" /> new
                <input type="radio" value="used" name="condition" /> used
              </div>
              <Input {...register('description')} placeholder="description" />{' '}
              {/* register an input */}
              <Input type="number" {...register('price', { required: true })} placeholder="price" />
              {errors.price && <FieldErrorNotification>price is required.</FieldErrorNotification>}
              <Submit />
            </form>
          </ModalBox>
        </Modal>
        <PartImage src={img} alt="text" />
        <LotName>{lot.name}</LotName>
        <LotName>{lot.condition}</LotName>
        <LotName>{[lot.models].join(',')}</LotName>
        <SmallDescribe>{[lot.description].join(',')}</SmallDescribe>
        <LotDescription>{lot.Description}</LotDescription>
      </LotContent>
      <PartOrderInfo>
        <PartPrise>
          <span>{lot.price}$</span>
        </PartPrise>
      </PartOrderInfo>
      <IconWrapper>
        <Icon
          src={(EditIcon || '').replace(/^\.\//, '/')}
          beforeInjection={(svg: SVGSVGElement) => {
            svg.setAttribute('style', 'width: 24px');
            svg.setAttribute('style', 'height: 24px');
          }}
          onClick={() => {
            onEditLot();
          }}
        />
        <Icon
          src={(DeleteIcon || '').replace(/^\.\//, '/')}
          beforeInjection={(svg: SVGSVGElement) => {
            svg.setAttribute('style', 'width: 24px');
            svg.setAttribute('style', 'height: 24px');
          }}
          onClick={() => {
            onRemovedLot();
          }}
        />
      </IconWrapper>
    </StyledCard>
  );
};

export default Lot;
