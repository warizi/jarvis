/** @jsxImportSource @emotion/react */

import { keyframes, useTheme } from "@emotion/react";
import { ArrowRightIcon } from "@shared/components/icon";
import { useTaskSplitModalStore } from "../model/useTaskSplitModalStore";
import { useState } from "react";

const sideIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;
const sideOut = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);  
  }
`;
function TaskCurrentTask({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(true);
  const { closeCurrentTask } = useTaskSplitModalStore();

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      closeCurrentTask();
    }, 190);
  };
  return (
    <div
      css={{
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        borderRadius: theme.radius.medium,
        boxShadow: theme.shadow.medium,
        backgroundColor: theme.colors.background.deep,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowY: "auto",
        zIndex: 15000,
        animation: `${
          isOpen ? sideIn : sideOut
        } 0.2s ease-in-out forwards`,
      }}
    >
      <div
        css={{
          position: "sticky",
          top: "0px",
          left: "0px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          height: "30px",
          backgroundColor: theme.colors.background.deep,
          zIndex: 15000,
        }}
      >
        <button
          css={{
            width: "35px",
            height: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: theme.radius.medium,
            cursor: "pointer",
            border: "none",
            color: theme.colors.text.secondary,
            backgroundColor: theme.colors.background.deep,
            transform: "rotate(180deg)",
            "&:hover": {
              backgroundColor:
                theme.colors.background.hover,
              color: theme.colors.text.primary,
            },
          }}
          onClick={() => handleClose()}
        >
          <ArrowRightIcon size={30} />
        </button>
      </div>
      {children}
    </div>
  );
}

export default TaskCurrentTask;
