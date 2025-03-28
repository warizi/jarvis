/** @jsxImportSource @emotion/react */

import { useNoteCateInfo } from "../model/useNoteCateInfo";
import NoteHeader from "./NoteHeader";

function NoteCatePage() {
  const { data } = useNoteCateInfo();
  return (
    <div>
      <NoteHeader title={data?.name || ""} />
    </div>
  );
}

export default NoteCatePage;
