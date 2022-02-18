import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Box, Modal } from '@mui/material';
import { PrimaryButton } from '../../shared/styled/Elements/PrimaryButton';
import { RouteNames } from '../../router';
import { H2 } from '../../shared/styled/headers/H2';

interface ConfirmSuccessModalProps {
  open: boolean;
  handleClose: () => void;
}
const style = {
  position: 'absolute',
  display: 'flex',
  flexDirection: `column`,
  textAlign: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ConfirmSuccessModal: FC<ConfirmSuccessModalProps> = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={handleClose}
    >
      <Box sx={style}>
        <H2>Success!!!</H2>
        <p>You have finished internship</p>
        <br />
        <Link to={RouteNames.PARTS} onClick={handleClose}>
          <PrimaryButton>Go to shopping</PrimaryButton>
        </Link>
      </Box>
    </Modal>
  );
};

export default ConfirmSuccessModal;
