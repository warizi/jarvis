import { Editor } from "@tiptap/react";

export const buttonArray = [
  {
    searchText: "heading1, 제목1, heading 1",
    label: "Heading 1",
    icon: "H1",
    action: (editor: Editor) => {
      deleteSlashCommand(editor);
      editor
        .chain()
        .focus()
        .toggleHeading({ level: 1 })
        .run();
    },
    isActive: (editor: Editor) =>
      editor.isActive("heading", { level: 1 }),
    canExecute: (editor: Editor) =>
      editor
        ?.can()
        .chain()
        .focus()
        .toggleHeading({ level: 1 })
        .run(),
  },
  {
    searchText: "heading2, 제목2, heading 2",
    label: "Heading 2",
    icon: "H2",
    action: (editor: Editor) => {
      deleteSlashCommand(editor);
      editor
        .chain()
        .focus()
        .toggleHeading({ level: 2 })
        .run();
    },
    isActive: (editor: Editor) =>
      editor.isActive("heading", { level: 2 }),
    canExecute: (editor: Editor) =>
      editor
        ?.can()
        .chain()
        .focus()
        .toggleHeading({ level: 2 })
        .run(),
  },
  {
    searchText: "heading3, 제목3, heading 3",
    label: "Heading 3",
    icon: "H3",
    action: (editor: Editor) => {
      deleteSlashCommand(editor);
      editor
        .chain()
        .focus()
        .toggleHeading({ level: 3 })
        .run();
    },
    isActive: (editor: Editor) =>
      editor.isActive("heading", { level: 3 }),
    canExecute: (editor: Editor) =>
      editor
        ?.can()
        .chain()
        .focus()
        .toggleHeading({ level: 3 })
        .run(),
  },
  {
    searchText: "heading4, 제목4, heading 4",
    label: "Heading 4",
    icon: "H4",
    action: (editor: Editor) => {
      deleteSlashCommand(editor);
      editor
        .chain()
        .focus()
        .toggleHeading({ level: 4 })
        .run();
    },
    isActive: (editor: Editor) =>
      editor.isActive("heading", { level: 4 }),
    canExecute: (editor: Editor) =>
      editor
        ?.can()
        .chain()
        .focus()
        .toggleHeading({ level: 4 })
        .run(),
  },
  {
    searchText: "heading5, 제목5, heading 5",
    label: "Heading 5",
    icon: "H5",
    action: (editor: Editor) => {
      deleteSlashCommand(editor);
      editor
        .chain()
        .focus()
        .toggleHeading({ level: 5 })
        .run();
    },
    isActive: (editor: Editor) =>
      editor.isActive("heading", { level: 5 }),
    canExecute: (editor: Editor) =>
      editor
        ?.can()
        .chain()
        .focus()
        .toggleHeading({ level: 5 })
        .run(),
  },
  {
    searchText: "heading6, 제목6, heading 6",
    label: "Heading 6",
    icon: "H6",
    action: (editor: Editor) => {
      deleteSlashCommand(editor);
      editor
        .chain()
        .focus()
        .toggleHeading({ level: 6 })
        .run();
    },
    isActive: (editor: Editor) =>
      editor.isActive("heading", { level: 6 }),
    canExecute: (editor: Editor) =>
      editor
        ?.can()
        .chain()
        .focus()
        .toggleHeading({ level: 6 })
        .run(),
  },
  {
    searchText: "bulletlist, bullet, list, 리스트",
    label: "Bullet List",
    icon: "•",
    action: (editor: Editor) => {
      deleteSlashCommand(editor);
      editor.chain().focus().toggleBulletList().run();
    },
    isActive: (editor: Editor) =>
      editor.isActive("bulletList"),
    canExecute: (editor: Editor) =>
      editor
        ?.can()
        .chain()
        .focus()
        .toggleBulletList()
        .run(),
  },
  {
    searchText:
      "orderedlist, ordered, list, 리스트, 숫자, 순서",
    label: "Ordered List",
    icon: "1.",
    action: (editor: Editor) => {
      deleteSlashCommand(editor);
      editor.chain().focus().toggleOrderedList().run();
    },
    isActive: (editor: Editor) =>
      editor.isActive("orderedList"),
    canExecute: (editor: Editor) =>
      editor
        ?.can()
        .chain()
        .focus()
        .toggleOrderedList()
        .run(),
  },
  {
    searchText:
      "codeblock, code, 코드, 코드블럭, 코드 블럭",
    label: "Code Block",
    icon: "</>",
    action: (editor: Editor) => {
      deleteSlashCommand(editor);
      editor.chain().focus().toggleCodeBlock().run();
    },
    isActive: (editor: Editor) =>
      editor.isActive("codeBlock"),
    canExecute: (editor: Editor) =>
      editor?.can().chain().focus().toggleCodeBlock().run(),
  },
  {
    searchText: "blockquote, block, quote, 인용문",
    label: "Blockquote",
    icon: "❝",
    action: (editor: Editor) => {
      deleteSlashCommand(editor);
      editor.chain().focus().toggleBlockquote().run();
    },
    isActive: (editor: Editor) =>
      editor.isActive("blockquote"),
    canExecute: (editor: Editor) =>
      editor
        ?.can()
        .chain()
        .focus()
        .toggleBlockquote()
        .run(),
  },
  {
    searchText:
      "horizontalrule, horizontal, rule, 경계선, 수평선, 구분선",
    label: "Horizontal Rule",
    icon: "---",
    action: (editor: Editor) => {
      deleteSlashCommand(editor);
      editor.chain().focus().setHorizontalRule().run();
    },
    isActive: () => false, // Always inactive
    canExecute: (editor: Editor) =>
      editor
        ?.can()
        .chain()
        .focus()
        .setHorizontalRule()
        .run(),
  },
];

function deleteSlashCommand(editor: Editor) {
  const { $from } = editor.state.selection; // 현재 커서 위치 정보
  const lineStart = $from.start(); // 현재 줄의 시작 위치
  const lineEnd = $from.end(); // 현재 줄의 끝 위치

  // 줄 전체 삭제
  editor.commands.deleteRange({
    from: lineStart, // 현재 줄의 시작 위치
    to: lineEnd, // 현재 줄의 끝 위치
  });
}
