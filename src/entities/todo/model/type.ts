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
  labelId?: number; // 라벨 아이디
};

export type TodoSub = {
  text: string;
  isDone: boolean;
};
