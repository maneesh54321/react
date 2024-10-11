import { forwardRef, ReactElement, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

export interface DialogHandle {
  open: () => void;
  close: () => void;
}

interface ModalProps {
  title: string;
  children: ReactElement;
  onClose?: () => void;
}

const Modal = forwardRef<DialogHandle, ModalProps>(
  ({ title, children, onClose = () => {} }: ModalProps, ref) => {
    const dialog = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => {
      return {
        close: () => dialog.current?.close(),
        open: () => dialog.current?.showModal(),
      };
    });

    function handleClose() {
      dialog.current?.close();
      onClose();
    }

    const containerEle = document.getElementById("modal");

    if (!containerEle) {
      return <></>;
    }

    return createPortal(
      <dialog ref={dialog} onClose={handleClose}>
        <div className={classes.modalContainer}>
          <header className={classes.header}>
            <span className={classes.modalTitle}>{title}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={classes.closeBtn}
              onClick={handleClose}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </header>
          {children}
        </div>
      </dialog>,
      containerEle
    );
  }
);

export default Modal;
