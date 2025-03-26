import { Id } from "@shared/config/type/commonType";

export type TodoCate = {
  name: string;
  order: number;
};

export type Todo = {
  title: string;
  isDone: boolean;
  sub?: string;
  order: number;
  isImportant: number;
  isToday?: string;
  cateId?: number;
  memo?: string;
  doneDate?: string | null;
  startDate?: string;
  endDate?: string;
  repeatType?: string;
  repeatDate?: string;
  label?: (TodoLabel & Id) | null;
};

export type TodoSub = {
  text: string;
  isDone: boolean;
};

export type TodoLabel = {
  name: string;
  order: number;
  color: string;
};
