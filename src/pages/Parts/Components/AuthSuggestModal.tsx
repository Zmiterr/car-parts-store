import React, { FC } from 'react';
import { Modal } from '@material-ui/core';
import { ModalBox } from '../../../shared/styled/containers/ModalBox';
import Login from '../../Login/Login';

interface AuthSuggestModalProps {
  isOpenAuthSuggestModal: boolean;
  setIsOpenAuthSuggestModal: (b: boolean) => void;
}

export const AuthSuggestModal: FC<AuthSuggestModalProps> = ({
  isOpenAuthSuggestModal,
  setIsOpenAuthSuggestModal,
}) => {
  return (
    <Modal
      open={isOpenAuthSuggestModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={() => setIsOpenAuthSuggestModal(false)}
    >
      <ModalBox transparent>
        <Login />
      </ModalBox>
    </Modal>
  );
};
