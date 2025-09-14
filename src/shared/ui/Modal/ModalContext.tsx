import { createContext } from "react";

interface ModalContextType {
  onClose: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);
