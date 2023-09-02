import React from "react";
import { useModal } from "@/context/modalContext";

interface ModalProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
}

export const ModalComponent: React.FC<ModalProps> = ({ title, children }) => {
  const { open, closeModal } = useModal();

  if (!open) return null;

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={closeModal} />
      <div className="modal__content">
        <div className="modal__header">
          <h2>{title}</h2>
          <button className="close-button" onClick={closeModal}>
            Close
          </button>
        </div>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
};

export default ModalComponent;
