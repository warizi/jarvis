import { type NoteCate } from "./model/type";
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

export {
  NoteCate,
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
};
