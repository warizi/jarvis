import { Id } from "@shared/config/type/commonType";

export type NoteCateType = {
  name: string;
  order: number;
};

export type NoteLabel = {
  name: string;
  order: number;
  color: string;
};

export type Note = {
  title: string;
  content: string;
  order: number;
  cateId: number;
  label?: NoteLabel & Id;
  isImportant: number;
  createdAt?: string;
  updatedAt?: string;
};
