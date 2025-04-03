/** @jsxImportSource @emotion/react */

import { createPortal } from "react-dom";
import Backdrop from "./Backdrop";
import SplitModalRightLayer from "./SplitModalRightLayer";
import useSplitModalStore from "../model/splitModalStore";
import SplitModalLeftLayer from "./SplitModalLeftLayer";
import { useTheme } from "@emotion/react";
import { useSplitModalResize } from "../model/useSplitModalResize";
import { useSplitShortcuts } from "../model/useSplitShortcuts";

function SplitModal({ task }: { task?: React.ReactNode }) {
  const { isOpen, content, close } = useSplitModalStore();
  const theme = useTheme();
  useSplitShortcuts();

  const { containerRef, leftWidth, handleMouseDown } =
    useSplitModalResize();

  return (
    <>
      {createPortal(
        <>
          {isOpen && (
            <>
              <Backdrop onClick={close} />
              <div
                ref={containerRef}
                css={{
                  position: "fixed",
                  top: 0,
                  right: 0,
                  zIndex: 3000,
                  width: "100vw",
                  height: "100vh",
                  display: "grid",
                  gridTemplateColumns: `${leftWidth}% 10px calc(${
                    100 - leftWidth
                  }% - 10px)`,
                  gridTemplateRows: "1fr",
                  placeItems: "center",
                }}
              >
                <div
                  css={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <SplitModalLeftLayer>
                    {task}
                  </SplitModalLeftLayer>
                </div>
                <div
                  css={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "10px",
                    height: "100%",
                    ":hover": {
                      backgroundColor:
                        theme.colors.background.hover,
                      "& .split-modal-resize-handle": {
                        opacity: 0.8,
                      },
                      cursor: "ew-resize",
                    },
                  }}
                  onMouseDown={handleMouseDown}
                >
                  <div
                    className="split-modal-resize-handle"
                    css={{
                      opacity: 0,
                      width: "3px",
                      borderRadius: "3px",
                      height: "calc(100% - 20px)",
                      backgroundColor:
                        theme.colors.primary.light,
                    }}
                  />
                </div>
                <div
                  css={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <SplitModalRightLayer>
                    {content}
                  </SplitModalRightLayer>
                </div>
              </div>
            </>
          )}
        </>,
        document.body
      )}
    </>
  );
}

export default SplitModal;
