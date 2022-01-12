import React, { FC } from 'react';
import { Modal } from '@material-ui/core';
import { H2 } from '../../../shared/styled/headers/H2';
import { StyledCard } from '../../../shared/styled/containers/Card';
import EditIcon from '../../../assets/icons/edit.svg';
import DeleteIcon from '../../../assets/icons/delete.svg';
import { Icon, IconWrapper, LotContent, LotDescription, LotName } from './Styles';
import { ModalBox } from '../../../shared/styled/containers/ModalBox';
import { LotsInterface } from '../MyLots';

const Lot: FC = ({ lot }: LotsInterface) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const onRemovedLot = () => {
    // dispatch removeLot
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
        <LotName>{lot.Name}</LotName>
        <LotName>{[lot.Models].join(',')}</LotName>
        <LotDescription>{lot.Description}</LotDescription>
      </LotContent>
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
