/** @jsxImportSource @emotion/react */

import { Theme } from "@emotion/react";
import useSidebarToggleStore from "../model/useSidebarToggle";
import { ArrowRightIcon } from "@shared/components/icon";

type SidebarWrapperProps = {
  children: React.ReactNode;
};

const sidebarWrapperContainerStyles =
  (isOpen: boolean) => (theme: Theme) =>
    ({
      position: "relative",
      height: "100%",
      zIndex: 1300,
      backgroundColor: theme.colors.background.deep,
      "& .sidebar-close-btn": {
        position: "absolute",
        top: 0,
        right: isOpen ? "0" : "-24px",
        width: "24px",
        height: "24px",
        transition: "0.3s",
        color: theme.colors.text.primary,
        // backgroundColor: theme.colors.background.gray,
        border: "none",
        cursor: "pointer",
        transform: isOpen ? "rotate(180deg)" : "rotate(0)",
        zIndex: 1400,
      },
      "& .sidebar-close-btn:hover": {
        backgroundColor: theme.colors.background.hover,
      },
      paddingTop: "10px",
    } as const);

const sidebarWrapperStyles = (isOpen: boolean) => () =>
  ({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: isOpen ? "280px" : "0px",
    // boxShadow: theme.shadow.small,
    // padding: isOpen ? "10px" : "0",
    overflow: "hidden",
    transition: "0.3s",
    zIndex: 99,
  } as const);

function SidebarWrapper({ children }: SidebarWrapperProps) {
  const { isOpen, toggleSidebar } = useSidebarToggleStore();

  return (
    <div css={sidebarWrapperContainerStyles(isOpen)}>
      <div
        className="sidebar-close-btn"
        onClick={toggleSidebar}
      >
        <ArrowRightIcon color="currentColor" />
      </div>
      <div css={sidebarWrapperStyles(isOpen)}>
        {children}
      </div>
    </div>
  );
}

export default SidebarWrapper;
