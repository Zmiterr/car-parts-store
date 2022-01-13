import React, { FC } from 'react';
import { Modal } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { H2 } from '../../../shared/styled/headers/H2';
import { StyledCard } from '../../../shared/styled/containers/Card';
import EditIcon from '../../../assets/icons/edit.svg';
import DeleteIcon from '../../../assets/icons/delete.svg';
import { Icon, IconWrapper, LotContent, LotDescription, LotName } from './Styles';
import { ModalBox } from '../../../shared/styled/containers/ModalBox';
import { LotsInterface } from '../MyLots';
import img from '../../../assets/images/ats_classic_1_large.png';
import { PartImage, PartOrderInfo, PartPrise } from '../../Parts/Components/Part/Styles';
import { removeLot } from '../../../store/lots/lotsActions';

const Lot: FC = ({ lot }: LotsInterface) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const onRemovedLot = () => {
    dispatch(removeLot(lot.id));
  };

  const onEditLot = () => {
    setOpen(true);
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
            <p id="modal-modal-description">Modal content</p>
          </ModalBox>
        </Modal>
        <PartImage src={img} alt="text" />
        <LotName>{lot.name}</LotName>
        <LotName>{lot.condition}</LotName>
        <LotName>{[lot.models].join(',')}</LotName>
        <LotDescription>{lot.Description}</LotDescription>
      </LotContent>
      <PartOrderInfo>
        <PartPrise>
          <span>5000$</span>
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
            onRemovedLot(lot.id);
          }}
        />
      </IconWrapper>
    </StyledCard>
  );
};

export default Lot;
