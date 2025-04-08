/** @jsxImportSource @emotion/react */

import { createPortal } from "react-dom";
import useModalStore from "../model/useModalStore";
import CommonModalLayer from "./CommonModalLayer";
import Backdrop from "./Backdrop";

function Modal() {
  const {
    isOpen,
    content,
    close,
    title,
    onCancel,
    onConfirm,
  } = useModalStore();

  return (
    <>
      {createPortal(
        <>
          {isOpen && (
            <>
              <Backdrop onClick={close} />
              <CommonModalLayer
                title={title}
                onCancel={onCancel}
                onConfirm={onConfirm}
              >
                {content}
              </CommonModalLayer>
            </>
          )}
        </>,
        document.body
      )}
    </>
  );
}

export default Modal;
