import { useTheme } from "@emotion/react";
import HomeIcon from "@shared/components/icon/ui/HomeIcon";
import MonitorIcon from "@shared/components/icon/ui/MonitorIcon";
import TaskIcon from "@shared/components/icon/ui/TaskIcon";
import { ROUTE_URL } from "@shared/constants/route/ROUTE_URL";
import useIsCurrentLink from "./useIsCurrentLink";

export interface NavLinkType {
  title: string;
  url: string;
  icon: React.ReactNode;
}

export const useNavItems = () => {
  const isCurrentLink = useIsCurrentLink();
  const theme = useTheme();

  return [
    {
      title: "Home",
      url: ROUTE_URL.HOME,
      icon: (
        <HomeIcon
          size={20}
          color={
            isCurrentLink(ROUTE_URL.HOME)
              ? theme.colors.background.deep
              : theme.colors.text.secondary
          }
        />
      ),
    },
    {
      title: "Task",
      url: ROUTE_URL.TODO_TODAY,
      icon: (
        <TaskIcon
          size={20}
          color={
            isCurrentLink(ROUTE_URL.TODO)
              ? theme.colors.background.deep
              : theme.colors.text.secondary
          }
        />
      ),
    },
    {
      title: "Test",
      url: ROUTE_URL.TEST,
      icon: (
        <MonitorIcon
          size={20}
          color={
            isCurrentLink(ROUTE_URL.TEST)
              ? theme.colors.background.deep
              : theme.colors.text.secondary
          }
        />
      ),
    },
  ];
};
