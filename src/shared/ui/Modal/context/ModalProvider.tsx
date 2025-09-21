import React, { useState } from "react";
import { ModalContext } from "./ModalContext";

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenModal = () => setIsOpen(true);
  const onCloseModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, onOpenModal, onCloseModal }}>
      {children}
    </ModalContext.Provider>
  );
};
