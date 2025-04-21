/** @jsxImportSource @emotion/react */

import { TodayCountCard } from "@widgets/todo-dashboard";
import TodoSection from "./TodoSection";

function HomePage() {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100vh",
        fontSize: "30px",
        padding: "16px",
      }}
    >
      <TodoSection>
        <TodayCountCard />
      </TodoSection>
    </div>
  );
}

export default HomePage;
