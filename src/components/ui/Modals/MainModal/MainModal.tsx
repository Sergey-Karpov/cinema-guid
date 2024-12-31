import { toggleBodyScroll } from "@/utils/toggleBodyScroll";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import CloseButton from "@/components/ui/buttons/CloseButton/CloseButton";
import { useModal } from "../ModalContext";
import "./MainModal.scss";

const MainModal: React.FC = () => {
  const { isOpen, modalContent, closeModal } = useModal();

  useEffect(() => {
    if (isOpen) {
      toggleBodyScroll("add");
    } else {
      toggleBodyScroll("remove");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__inner">{modalContent}</div>
        <CloseButton onClick={closeModal} />
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default MainModal;
