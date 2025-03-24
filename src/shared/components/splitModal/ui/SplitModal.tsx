/** @jsxImportSource @emotion/react */

import { createPortal } from "react-dom";
import Backdrop from "./Backdrop";
import SplitModalLayer from "./SplitModalLayer";
import useSplitModalStore from "../model/splitModalStore";

function SplitModal() {
  const { isOpen, content } = useSplitModalStore();
  return (
    <>
      {createPortal(
        <>
          {isOpen && (
            <>
              <Backdrop />
              <SplitModalLayer>{content}</SplitModalLayer>
            </>
          )}
        </>,
        document.body
      )}
    </>
  );
}

export default SplitModal;
