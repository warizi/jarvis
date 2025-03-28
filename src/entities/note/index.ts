import { type NoteCate } from "./model/type";
import { noteCateQueryKey } from "./model/constants";
import {
  useGetNoteCateByIdQuery,
  useGetAllNoteCateQuery,
  useCreateNoteCateMutation,
  useUpdateNoteCateMutation,
  useDeleteNoteCateMutation,
} from "./model/noteCateFetchHooks";

export {
  NoteCate,
  noteCateQueryKey,
  useGetNoteCateByIdQuery,
  useGetAllNoteCateQuery,
  useCreateNoteCateMutation,
  useUpdateNoteCateMutation,
  useDeleteNoteCateMutation,
};
