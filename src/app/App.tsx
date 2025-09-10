import "./App.css";

import { Modal } from "../shared/ui/Modal/ui/Modal";
import { ModalProvider } from "../shared/ui/Modal/context/ModalProvider";
import { ThemeProvider } from "../shared/lib/theme/ThemeProvider";
import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router/Router";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleClick(value: boolean) {
    setIsModalOpen(value);
  }

  return (
    <ThemeProvider>
      <ModalProvider onOpenModal={() => handleClick(true)}>
        <RouterProvider router={router} />
        <Modal isOpen={isModalOpen} onClose={() => handleClick(false)}>
          <Modal.Header>О проекте</Modal.Header>
          <Modal.Body>Это веб-сервис с постами</Modal.Body>
          <Modal.Footer>
            <button onClick={() => handleClick(false)}>Закрыть</button>
          </Modal.Footer>
        </Modal>
      </ModalProvider>
    </ThemeProvider>
  );
};

export default App;
