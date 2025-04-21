/** @jsxImportSource @emotion/react */

import { useGetAllTodoQuery } from "@entities/todo";
import {
  TASK_FINDER_TAB,
  useTaskSplitModalStore,
} from "../model/useTaskSplitModalStore";
import { isToday } from "@shared/lib/isToday";
import { TodoCreateBtn, TodoItem } from "@features/todo";
import { useSplitModalStore } from "@shared/components/splitModal";
import { SplitModalType } from "@shared/components/splitModal/model/splitModalStore";
import { useTheme } from "@emotion/react";

function TaskFinderTodo() {
  const {
    finderTab: { sideTab },
  } = useTaskSplitModalStore();
  const { data: allTodo } = useGetAllTodoQuery();
  const { setCurrentTodo } = useTaskSplitModalStore();
  const { type, itemId } = useSplitModalStore();
  const theme = useTheme();

  const todoList = allTodo?.filter((todo) => {
    if (sideTab === TASK_FINDER_TAB.All) {
      return true;
    }

    if (sideTab === TASK_FINDER_TAB.Important) {
      return todo.isImportant;
    }

    if (sideTab === TASK_FINDER_TAB.TODAY) {
      const start = todo?.startDate;
      const end = todo?.endDate;
      console.log("start", start);

      if (start && end) {
        const startDate = new Date(start)
          .toISOString()
          .split("T")[0];
        const endDate = new Date(end)
          .toISOString()
          .split("T")[0];
        const today = new Date()
          .toISOString()
          .split("T")[0];

        return startDate <= today && endDate >= today;
      }

      if (start) {
        const startDate = new Date(start)
          .toISOString()
          .split("T")[0];
        const today = new Date()
          .toISOString()
          .split("T")[0];

        return startDate <= today;
      }

      return isToday(todo.isToday);
    }

    if (typeof sideTab === "number") {
      return todo.cateId === sideTab;
    }

    return false;
  });

  const isSameSplitItem = (id: number) => {
    if (type === SplitModalType.TODO) {
      return itemId === id;
    }
    return false;
  };

  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        width: "calc(100% - 240px)",
        height: "100%",
        overflowY: "auto",
        backgroundColor: theme.colors.background.gray,
        borderRadius: theme.radius.medium,
      }}
    >
      {sideTab !== TASK_FINDER_TAB.All && (
        <div>
          <TodoCreateBtn
            cateId={
              typeof sideTab === "number" ? sideTab : 0
            }
            isImportant={
              sideTab === TASK_FINDER_TAB.Important
            }
            isToday={sideTab === TASK_FINDER_TAB.TODAY}
          />
        </div>
      )}
      <div
        css={{
          overflow: "auto",
          padding: "10px",
        }}
      >
        <div
          css={{
            borderRadius: theme.radius.medium,
            overflowY: "auto",
          }}
        >
          {todoList?.map((todo) => (
            <div
              css={{
                opacity: isSameSplitItem(todo.id) ? 0.3 : 1,
              }}
            >
              <TodoItem
                key={todo.id}
                data={todo}
                onClick={() =>
                  isSameSplitItem(todo.id)
                    ? null
                    : setCurrentTodo(todo)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskFinderTodo;
