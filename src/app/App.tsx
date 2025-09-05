import "./App.css";

import { Modal } from "../shared/ui/Modal/ui/Modal";
import { ModalProvider } from "../shared/ui/Modal/context/ModalProvider";
import { ThemeProvider } from "../shared/lib/theme/ThemeProvider";
import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router/Router";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <ModalProvider onOpenModal={() => setIsModalOpen(true)}>
        <RouterProvider router={router} />
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <Modal.Header>О проекте</Modal.Header>
          <Modal.Body>Это веб-сервис с постами</Modal.Body>
          <Modal.Footer>
            <button onClick={() => setIsModalOpen(false)}>Закрыть</button>
          </Modal.Footer>
        </Modal>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
