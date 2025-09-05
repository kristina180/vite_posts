import { createContext } from "react";

interface ModalContextProps {
  onOpenModal: () => void;
}

export const ModalContext = createContext<ModalContextProps | undefined>(
  undefined
);
