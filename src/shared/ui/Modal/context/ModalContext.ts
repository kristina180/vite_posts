import { createContext } from "react";

interface ModalContextProps {
  onOpenModal?: () => void;
  onClose?: () => void;
}

export const ModalContext = createContext<ModalContextProps | undefined>(
  undefined
);
