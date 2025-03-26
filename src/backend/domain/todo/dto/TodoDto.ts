import { TodoLabelBack } from "../entities/TodoLabelBack";

export type TodoBackDto = {
  id: number;
  title: string; // 제목
  isDone: boolean; // 완료 여부
  sub?: string; // 서브 할 일
  order: number; // 정렬 순서
  isImportant: number; // 중요 여부
  startDate?: string; // 시작일
  endDate?: string; // 종료일
  isToday?: string; // 오늘 할 일
  repeatType?: string; // 반복 타입
  repeatDate?: string; // 반복 날짜
  memo?: string; // 메모
  cateId?: number; // 카테고리 아이디
  label?: TodoLabelBack; // 라벨 아이디
  doneDate?: string | null; // 완료 날짜
};

export type TodoCreateBackDto = {
  title: string; // 제목
  isDone: boolean; // 완료 여부
  sub?: string; // 서브 할 일
  order: number; // 정렬 순서
  isImportant: number; // 중요 여부
  startDate?: string; // 시작일
  endDate?: string; // 종료일
  isToday?: string; // 오늘 할 일
  repeatType?: string; // 반복 타입
  repeatDate?: string; // 반복 날짜
  memo?: string; // 메모
  cateId?: number; // 카테고리 아이디
  label?: TodoLabelBack; // 라벨 아이디
  doneDate?: string | null; // 완료 날짜
};
