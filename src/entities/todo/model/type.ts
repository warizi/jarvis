export type TodoCate = {
  name: string;
  order: number;
};

export type Todo = {
  title: string;
  isDone: boolean;
  sub?: TodoSub[];
  order: number;
  isImportant: boolean;
  startDate?: string;
  endDate?: string;
  isToday?: boolean;
  repeatType?: string;
  repeatDate?: string;
  memo?: string;
  cateId?: number;
  labelId?: number; // 라벨 아이디
};

export type TodoSub = {
  text: string;
  isDone: boolean;
};
