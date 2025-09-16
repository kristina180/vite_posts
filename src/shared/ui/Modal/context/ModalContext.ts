import { createContext } from "react";

interface ModalContextProps {
  onOpenModal: () => void;
  onCloseModal: () => void;
  isOpen: boolean;
}

export const ModalContext = createContext<ModalContextProps | undefined>(
  undefined
);
