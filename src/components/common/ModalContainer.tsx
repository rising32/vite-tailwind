import React from 'react';
import Modal from 'react-modal';

export interface ModalProps extends React.InputHTMLAttributes<Modal> {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
function ModalContainer({ children, isOpen, closeModal }: ModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {children}
    </Modal>
  );
}

export default ModalContainer;
