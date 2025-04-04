/** @jsxImportSource @emotion/react */

import {
  useCreateNoteLabelMutation,
  useDeleteNoteLabelMutation,
  useGetAllNoteLabelQuery,
} from "@entities/note";
import { LabelSelector } from "@shared/components/form";

function NoteLabelSelector({
  value,
  onChange,
}: {
  value?: {
    id: number;
    name: string;
    color: string;
  } | null;
  onChange: (
    label: {
      id: number;
      name: string;
      color: string;
    } | null
  ) => void;
}) {
  const { data: labels } = useGetAllNoteLabelQuery();
  const { mutate: deleteNoteLabelMutate } =
    useDeleteNoteLabelMutation();
  const { mutate } = useCreateNoteLabelMutation();
  return (
    <LabelSelector
      labels={labels || []}
      onAddLabel={(label) => {
        mutate({
          name: label.name,
          color: label.color,
          order: 0,
        });
      }}
      onSelectLabel={(label) => {
        onChange(label);
      }}
      onDeleteLabel={(id) => {
        deleteNoteLabelMutate(id);
      }}
      onCancelLabel={() => {
        onChange(null);
      }}
      selectedLabel={value || undefined}
    />
  );
}

export default NoteLabelSelector;
