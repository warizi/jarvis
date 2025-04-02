/** @jsxImportSource @emotion/react */

import { useTheme } from "@emotion/react";
import { ArrowRightIcon } from "@shared/components/icon";
import { useTaskSplitModalStore } from "../model/useTaskSplitModalStore";

function TaskCurrentTask({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const { closeCurrentTask } = useTaskSplitModalStore();
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
            width: "30px",
            height: "30px",
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
          onClick={() => closeCurrentTask()}
        >
          <ArrowRightIcon />
        </button>
      </div>
      {children}
    </div>
  );
}

export default TaskCurrentTask;
