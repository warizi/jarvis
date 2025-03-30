import { type NoteCateType } from "./model/type";
import { noteCateQueryKey } from "./model/constants";
import {
  useGetNoteCateByIdQuery,
  useGetAllNoteCateQuery,
  useCreateNoteCateMutation,
  useUpdateNoteCateMutation,
  useDeleteNoteCateMutation,
} from "./model/noteCateFetchHooks";
import {
  useCreateNoteLabelMutation,
  useUpdateNoteLabelMutation,
  useDeleteNoteLabelMutation,
  useGetAllNoteLabelQuery,
  useGetNoteLabelQuery,
} from "./model/noteLabelFetchHooks";

import {
  useCreateNoteMutation,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
  useGetAllNoteQuery,
  useGetNoteQuery,
  useGetAllNoteByCateIdQuery,
} from "./model/noteFetchHooks";

import NoteCate from "./ui/NoteCate";

export {
  NoteCate,
  NoteCateType,
  noteCateQueryKey,
  useGetNoteCateByIdQuery,
  useGetAllNoteCateQuery,
  useCreateNoteCateMutation,
  useUpdateNoteCateMutation,
  useDeleteNoteCateMutation,
  useCreateNoteLabelMutation,
  useUpdateNoteLabelMutation,
  useDeleteNoteLabelMutation,
  useGetAllNoteLabelQuery,
  useGetNoteLabelQuery,
  useCreateNoteMutation,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
  useGetAllNoteQuery,
  useGetNoteQuery,
  useGetAllNoteByCateIdQuery,
};
