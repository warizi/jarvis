/** @jsxImportSource @emotion/react */

import { DashboardCard } from "@shared/components/container";
import { useTodayCountCard } from "../model/useTodayCountCard";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import { ROUTE_URL } from "@shared/constants/route/ROUTE_URL";

function TodayCountCard() {
  const { todayIsDoneCount, allTodayData } =
    useTodayCountCard();
  const navigate = useNavigate();

  return (
    <DashboardCard
      title="오늘 할일"
      onClick={() => navigate(ROUTE_URL.TODO_TODAY)}
      linked
    >
      <div
        css={{
          width: "100px",
          display: "flex",
          justifyContent: "end",
          alignItems: "end",
          padding: "0px",
        }}
      >
        <span
          css={{
            fontSize: "20px",
            fontWeight: 600,
          }}
        >
          <span
            css={{
              fontSize: "30px",
              fontWeight: 600,
            }}
          >
            <CountUp
              start={0}
              end={todayIsDoneCount}
              duration={2}
            />
          </span>
          {` `}/{` `}
          <CountUp
            start={0}
            end={allTodayData.length}
            duration={1}
          />
        </span>
      </div>
    </DashboardCard>
  );
}

export default TodayCountCard;
