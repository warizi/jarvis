export type NoteBack = {
  id: number;
  title: string; // 제목
  order: number; // 순서
  isImportant?: number; // 중요 여부
  content: string; // 노트 내용
  labelId?: number; // 라벨 아이디
  cateId: number; // 카테고리 아이디
  createdAt?: string; // 생성일
  updatedAt?: string; // 수정일
};

export type NoteCreateBack = {
  title: string; // 제목
  order: number; // 순서
  isImportant?: number; // 중요 여부
  content: string; // 노트 내용
  labelId?: number; // 라벨 아이디
  cateId: number; // 카테고리 아이디
  createdAt?: string; // 생성일
  updatedAt?: string; // 수정일
};
