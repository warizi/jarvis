export type TodoCate = {
  name: string;
  order: number;
};

export type Todo = {
  title: string;
  isDone: boolean;
  sub?: TodoSub[];
  order: number;
  isImportant: number;
  startDate?: string;
  endDate?: string;
  isToday?: string;
  repeatType?: string;
  repeatDate?: string;
  memo?: string;
  cateId?: number;
  labelId?: number; // 라벨 아이디
  doneDate?: string | null;
};

export type TodoSub = {
  text: string;
  isDone: boolean;
};
