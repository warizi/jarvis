import HomeIcon from "@shared/components/icon/ui/HomeIcon";
import TaskIcon from "@shared/components/icon/ui/TaskIcon";
import { ROUTE_URL } from "@shared/constants/route/ROUTE_URL";
import {
  // MonitorIcon,
  NoteIcon,
} from "@shared/components/icon";

export interface NavLinkType {
  title: string;
  url: string;
  icon: React.ReactNode;
}

export const useNavItems = () => {
  return [
    {
      title: "Home",
      url: ROUTE_URL.HOME,
      icon: <HomeIcon size={20} />,
    },
    {
      title: "Task",
      url: ROUTE_URL.TODO_TODAY,
      icon: <TaskIcon size={20} />,
    },
    {
      title: "Note",
      url: ROUTE_URL.NOTE,
      icon: <NoteIcon size={20} />,
    },
    // {
    //   title: "Test",
    //   url: ROUTE_URL.TEST,
    //   icon: <MonitorIcon size={20} />,
    // },
  ];
};
