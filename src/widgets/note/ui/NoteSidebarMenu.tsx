/** @jsxImportSource @emotion/react */

import { StarIcon } from "@shared/components/icon";
import {
  SidebarItemWrapper,
  SidebarListWrapper,
} from "@shared/components/sidebar";
import { ROUTE_URL } from "@shared/constants/route/ROUTE_URL";
import { useNoteMenuCurrent } from "../model/useNoteMenuCurrent";

function NoteSidebarMenu() {
  const isCurrent = useNoteMenuCurrent();
  return (
    <SidebarListWrapper listTitle="모아보기">
      <SidebarItemWrapper
        count={0}
        icon={<StarIcon size={18} />}
        isCurrentLink={isCurrent(ROUTE_URL.NOTE_IMPORTANT)}
        linkTo={ROUTE_URL.NOTE_IMPORTANT}
      >
        <span>중요</span>
      </SidebarItemWrapper>
      <SidebarItemWrapper
        count={0}
        icon={<StarIcon size={18} />}
        isCurrentLink={isCurrent(ROUTE_URL.NOTE_RECENT)}
        linkTo={ROUTE_URL.NOTE_RECENT}
      >
        <span>최근</span>
      </SidebarItemWrapper>
    </SidebarListWrapper>
  );
}

export default NoteSidebarMenu;
