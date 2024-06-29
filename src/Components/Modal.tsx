import React, { ReactNode } from "react";
import "../styles/Modal.css";
import { Button } from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <Button onClick={onClose} text="x" className="modal-close-button" />
        {children}
      </div>
    </div>
  );
};

export default Modal;
