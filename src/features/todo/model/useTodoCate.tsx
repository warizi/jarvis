import { Id } from "@shared/config/type/commonType";
import { TodoCateType } from "../../../entities/todo/model/type";
import { useContextMenuStore } from "@shared/components/contextMenu";
import { useUpdateTodoCateMutation } from "../../../entities/todo/model/todoCateFetchHooks";
import { useState } from "react";
import { useTodoCateDelete } from "./useTodoCateDelete";
import { useModalStore } from "@shared/components/modal";

export const useTodoCate = (data: TodoCateType & Id) => {
  const { id } = data;
  const { open, close } = useContextMenuStore();
  const { onDelete } = useTodoCateDelete(id);
  const { mutate: updateTodoCateMutate } =
    useUpdateTodoCateMutation();
  const [isEdit, setIsEdit] = useState(false);
  const { open: modalOpen, close: modalClose } =
    useModalStore();
  const [values, setValues] = useState<TodoCateType & Id>(
    data
  );
  const handleValue = (
    key: keyof (TodoCateType & Id),
    value: string
  ) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  const register = (key: keyof (TodoCateType & Id)) => ({
    value: values[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      handleValue(key, e.target.value);
    },
  });

  const onSubmit = async () => {
    if (!values.name && !values.name.trim()) return;
    values.name = values.name.trim();
    await updateTodoCateMutate(values);
    setIsEdit(false);
  };

  const handleEdit = () => {
    setIsEdit(true);
    close();
  };

  const handleDelete = async () => {
    modalOpen({
      title: "삭제",
      content: (
        <>
          <p>정말 삭제하시겠습니까?</p>
          <p>하위 Todo는 모두 삭제됩니다.</p>
          <p>삭제된 데이터는 복구할 수 없습니다.</p>
        </>
      ),
      onCancel: () => {
        modalClose();
      },
      onConfirm: async () => {
        await onDelete();
        modalClose();
      },
    });
    setIsEdit(false);
    close();
  };

  const openContextMenu = (
    evnet: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    evnet.preventDefault();
    const { clientX: x, clientY: y } = evnet;

    open(x, y, [
      {
        label: "수정",
        onClick: handleEdit,
      },
      {
        label: "삭제",
        onClick: handleDelete,
      },
    ]);
  };

  return {
    openContextMenu,
    isEdit,
    register,
    onSubmit,
  };
};
