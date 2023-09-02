import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the modal context type
interface ModalContextType {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
}

// Create the modal context
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Define a modal provider component
interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [open, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ open, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook to access the modal context
// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
