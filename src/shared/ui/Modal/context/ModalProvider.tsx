import { ModalContext } from "./ModalContext";

export const ModalProvider = ({
  children,
  onOpenModal,
}: {
  children: React.ReactNode;
  onOpenModal: () => void;
}) => (
  <ModalContext.Provider value={{ onOpenModal }}>
    {children}
  </ModalContext.Provider>
);
