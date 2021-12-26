import React, { FC } from 'react';
import { Modal } from '@material-ui/core';
import { H2 } from '../../../shared/styled/headers/H2';
import { StyledCard } from '../../../shared/styled/containers/Card';
import EditIcon from '../../../assets/icons/edit.svg';
import DeleteIcon from '../../../assets/icons/delete.svg';
import { Icon, IconWrapper, LotContent, LotDescription, LotName } from './Styles';
import { ModalBox } from '../../../shared/styled/containers/ModalBox';

const Lot: FC = ({ lot }: any) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const onRemovedIssue = () => {
    // dispatch removeIssue
  };

  const onEditIssue = () => {
    setOpen(true);
  };
  return (
    <StyledCard>
      <LotContent>
        {
          // TODO fix modal style
        }
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
        <LotName>{lot.name}</LotName>
        <LotName>{[lot.fitCars].join(',')}</LotName>
        <LotDescription>{lot.description}</LotDescription>
      </LotContent>
      <IconWrapper>
        <Icon
          src={(EditIcon || '').replace(/^\.\//, '/')}
          beforeInjection={(svg: SVGSVGElement) => {
            svg.setAttribute('style', 'width: 24px');
            svg.setAttribute('style', 'height: 24px');
          }}
          onClick={() => {
            onEditIssue();
          }}
        />
        <Icon
          src={(DeleteIcon || '').replace(/^\.\//, '/')}
          beforeInjection={(svg: SVGSVGElement) => {
            svg.setAttribute('style', 'width: 24px');
            svg.setAttribute('style', 'height: 24px');
          }}
          onClick={() => {
            onRemovedIssue();
          }}
        />
      </IconWrapper>
    </StyledCard>
  );
};

export default Lot;
