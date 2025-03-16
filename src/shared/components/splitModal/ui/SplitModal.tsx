/** @jsxImportSource @emotion/react */

import { createPortal } from "react-dom";
import Backdrop from "./Backdrop";
import SplitModalLayer from "./SplitModalLayer";
import useSplitModalStore from "../model/splitModalStore";

function SplitModal() {
  const isOpen = useSplitModalStore(
    (state) => state.isOpen
  );
  return (
    <>
      {createPortal(
        <>
          {isOpen && (
            <>
              <Backdrop />
              <SplitModalLayer />
            </>
          )}
        </>,
        document.body
      )}
    </>
  );
}

export default SplitModal;
