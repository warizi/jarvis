/** @jsxImportSource @emotion/react */
import { ROUTE_URL } from "@shared/constants/route/ROUTE_URL";
import { useTodoMenuCurrent } from "../../note/model/useTodoMenuCurrent";
import {
  FolderIcon,
  StarIcon,
  SunIcon,
} from "@shared/components/icon";
import {
  useGetCountAllByImportantQuery,
  useGetCountAllByIsTodayQuery,
  useGetCountAllTodoQuery,
} from "@features/todo";
import {
  SidebarItemWrapper,
  SidebarListWrapper,
} from "@shared/components/sidebar";

function TodoSidebarMenu() {
  const isCurrent = useTodoMenuCurrent();
  const { data: allCount } = useGetCountAllTodoQuery();
  const { data: todayCount } =
    useGetCountAllByIsTodayQuery();
  const { data: importantCount } =
    useGetCountAllByImportantQuery();

  return (
    <SidebarListWrapper listTitle="모아보기">
      <SidebarItemWrapper
        count={todayCount}
        icon={<SunIcon size={18} />}
        isCurrentLink={isCurrent(ROUTE_URL.TODO_TODAY)}
        linkTo={ROUTE_URL.TODO_TODAY}
      >
        <span>오늘</span>
      </SidebarItemWrapper>
      <SidebarItemWrapper
        count={importantCount}
        icon={<StarIcon size={18} />}
        isCurrentLink={isCurrent(ROUTE_URL.TODO_IMPORTANT)}
        linkTo={ROUTE_URL.TODO_IMPORTANT}
      >
        <span>중요</span>
      </SidebarItemWrapper>
      <SidebarItemWrapper
        count={allCount}
        icon={<FolderIcon size={18} />}
        isCurrentLink={isCurrent(ROUTE_URL.TODO_ALL)}
        linkTo={ROUTE_URL.TODO_ALL}
      >
        <span>전체</span>
      </SidebarItemWrapper>
    </SidebarListWrapper>
  );
}

export default TodoSidebarMenu;
