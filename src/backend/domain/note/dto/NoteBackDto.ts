import { NoteLabelBack } from "../entities/NoteLabelBack";

export type NoteBackDto = {
  id: number;
  title: string;
  order: number;
  isImportant?: number;
  content: string;
  label?: NoteLabelBack;
  cateId: number;
  createdAt?: string;
  updatedAt?: string;
};

export type NoteCreateBackDto = {
  title: string;
  order: number;
  isImportant?: number;
  content: string;
  label?: NoteLabelBack;
  cateId: number;
  createdAt?: string;
  updatedAt?: string;
};
