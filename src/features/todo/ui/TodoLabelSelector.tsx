/** @jsxImportSource @emotion/react */

import {
  useCreateTodoLabelMutation,
  useDeleteTodoLabelMutation,
  useGetAllTodoLabelQuery,
} from "@entities/todo";
import { LabelSelector } from "@shared/components/form";

function TodoLabelSelector({
  value,
  onChange,
}: {
  value?: {
    id: number;
    name: string;
    color: string;
    order: number;
  } | null;
  onChange: (
    label: {
      id: number;
      name: string;
      color: string;
      order?: number;
    } | null
  ) => void;
}) {
  const { data: labels } = useGetAllTodoLabelQuery();
  const { mutate: deleteTodoLabelMutate } =
    useDeleteTodoLabelMutation();
  const { mutate } = useCreateTodoLabelMutation();
  return (
    <LabelSelector
      labels={labels || []}
      selectedLabel={value || undefined}
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
        deleteTodoLabelMutate(id);
      }}
      onCancelLabel={() => {
        onChange(null);
      }}
    />
  );
}

export default TodoLabelSelector;
