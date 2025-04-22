import {
  useGetAllByIsTodayQuery,
  useGetAllTodayByStartDateAndEndDateQuery,
} from "@features/todo";

export const useTodayCountCard = () => {
  const { data } = useGetAllByIsTodayQuery();
  const { data: periodToday } =
    useGetAllTodayByStartDateAndEndDateQuery();

  const allTodayData = [
    ...(data || []),
    ...(periodToday || []),
  ];
  const todayCount = allTodayData.filter(
    (todo) => !todo?.isDone
  ).length;
  const todayIsDoneCount = allTodayData.filter(
    (todo) => todo?.isDone
  ).length;
  return {
    todayCount,
    todayIsDoneCount,
    allTodayData,
  };
};
