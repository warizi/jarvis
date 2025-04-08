import {
  NoteCateType,
  useUpdateNoteCateMutation,
} from "@entities/note";
import { useContextMenuStore } from "@shared/components/contextMenu";
import { Id } from "@shared/config/type/commonType";
import { useNoteCateDelete } from "./useNoteCateDelete";
import { useState } from "react";
import { useModalStore } from "@shared/components/modal";

export const useNoteCateItem = (
  data: NoteCateType & Id
) => {
  const { id } = data;
  const { open, close } = useContextMenuStore();
  const { onDelete } = useNoteCateDelete(id);
  const { mutate: updateNoteCateMutate } =
    useUpdateNoteCateMutation();
  const { open: modalOpen, close: modalClose } =
    useModalStore();
  const [isEdit, setIsEdit] = useState(false);
  const [values, setValues] = useState<NoteCateType & Id>(
    data
  );

  const handleValue = (
    key: keyof (NoteCateType & Id),
    value: string
  ) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  const register = (key: keyof (NoteCateType & Id)) => ({
    value: values[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      handleValue(key, e.target.value);
    },
  });

  const onSubmit = async () => {
    if (!values.name && !values.name.trim()) return;
    values.name = values.name.trim();
    await updateNoteCateMutate(values);
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
          <p>하위 Note는 모두 삭제됩니다.</p>
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
    event: React.MouseEvent<HTMLLIElement>
  ) => {
    event.preventDefault();
    const { clientX, clientY } = event;
    open(clientX, clientY, [
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
    isEdit,
    values,
    register,
    onSubmit,
    openContextMenu,
  };
};
