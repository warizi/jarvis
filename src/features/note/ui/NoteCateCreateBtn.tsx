/** @jsxImportSource @emotion/react */

import { OneLineTextForm } from "@shared/components/form";
import { useCreateNoteCate } from "../model/useCreateNoteCate";

function NoteCateCreateBtn() {
  const { register, onSubmit } = useCreateNoteCate();

  return (
    <OneLineTextForm
      label="note-cate"
      size="sm"
      placeholder="새 목록"
      onSubmit={onSubmit}
      {...register("name")}
    />
  );
}

export default NoteCateCreateBtn;
