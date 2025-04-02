import { useDeleteNoteMutation } from "@entities/note";
import { Note } from "@entities/note/model/type";
import { useSplitModalStore } from "@shared/components/splitModal";
import { Id } from "@shared/config/type/commonType";
import NoteForm from "../ui/NoteForm";
import { SplitModalType } from "@shared/components/splitModal/model/splitModalStore";

export const useNoteSplitModal = () => {
  const open = useSplitModalStore((state) => state.open);

  const { mutate } = useDeleteNoteMutation();

  const handleDelete = (id: number) => async () => {
    await mutate(id);
  };

  const openNoteSplitModal = (data: Note & Id) => () => {
    const { title } = data;
    open({
      title: `NOTE > ${title}`,

      itemId: data.id,
      type: SplitModalType.NOTE,
      content: <NoteForm data={data} />,
      onDelete: handleDelete(data.id),
    });
  };

  return { openNoteSplitModal };
};
