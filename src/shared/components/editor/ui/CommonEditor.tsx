/** @jsxImportSource @emotion/react */
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import ContextEditorMenu from "./ContextEditorMenu";
import Placeholder from "@tiptap/extension-placeholder";
import TextFormattingBubbleMenu from "./TextFormattingBubbleMenu";
import { useTheme } from "@emotion/react";
const Style = {
  ".ProseMirror": {
    // minHeight: "calc(100vh - 150px)", // 최소 높이 설정 유지
  } as const,
  ".tiptap p.is-editor-empty:first-child::before": {
    color: "#adb5bd", // placeholder 텍스트 색상
    content: "attr(data-placeholder)", // data-placeholder 속성 사용
    float: "left", // 왼쪽 정렬
    height: 0, // 높이 설정
    pointerEvents: "none", // 사용자 상호작용 방지
  },
  ".tiptap p.is-empty::before": {
    color: "#adb5bd",
    content: "attr(data-placeholder)",
    float: "left",
    height: 0,
    pointerEvents: "none",
  },
  ".tiptap": {
    outline: "none",
    ul: {
      padding: "0 1rem", // 리스트 내부 여백 유지
      margin: "0.3rem 0", // 리스트 상하 간격 조정 (가독성 개선)
      li: {
        marginBottom: "0rem", // 리스트 항목 간 여백 추가
        p: {
          marginBottom: "0em",
        },
      },
    },
    ol: {
      padding: "0 1.5rem",
      margin: "0.3rem 0", // 리스트 상하 간격 조정
      li: {
        marginBottom: "0rem", // 리스트 항목 간 여백 추가
        p: {
          marginTop: "0em",
          marginBottom: "0em",
        },
      },
    },
    h1: {
      lineHeight: 1.3, // 헤더 간 간격 조정
      marginTop: "0.5rem", // 상단 여백 조정
      marginBottom: "0.5rem", // 하단 여백 조정
      fontSize: "1.8rem", // 글자 크기 약간 감소
    },
    h2: {
      lineHeight: 1.3,
      marginTop: "0.5rem", // 상단 여백 조정
      marginBottom: "0.5rem", // 하단 여백 조정
      fontSize: "1.6rem", // 글자 크기 약간 감소
    },
    h3: {
      lineHeight: 1.3,
      marginTop: "0.5rem", // 상단 여백 조정
      marginBottom: "0.5rem", // 하단 여백 조정
      fontSize: "1.4rem", // 글자 크기 감소
    },
    h4: {
      lineHeight: 1.3,
      marginTop: "0.5rem", // 상단 여백 조정
      marginBottom: "0.5rem", // 하단 여백 조정
      fontSize: "1.2rem",
    },
    h5: {
      lineHeight: 1.3,
      marginTop: "0.5rem", // 상단 여백 조정
      marginBottom: "0.5rem", // 하단 여백 조정
      fontSize: "1.1rem",
    },
    h6: {
      lineHeight: 1.3,
      marginTop: "0.5rem", // 상단 여백 조정
      marginBottom: "0.5rem", // 하단 여백 조정
      fontSize: "1rem",
    },
    p: {
      fontSize: "0.9rem", // 일반 텍스트 크기 조정
      lineHeight: "1.5", // 텍스트 간 간격 추가
      marginTop: "0rem", // 상단 여백 조정
      marginBottom: "0rem", // 하단 여백 조정
    },
    code: {
      backgroundColor: "#c3c2c2",
      borderRadius: "0.4rem",
      fontSize: "0.75rem", // 코드 글자 크기 감소
      padding: "0.2em 0.25em", // 패딩 축소
      color: "#000",
    },
    pre: {
      backgroundColor: "#c3c2c2",
      borderRadius: "0.4rem",
      fontFamily: "'JetBrainsMono', monospace",
      margin: "0.8rem 0", // 상하 여백 축소
      padding: "0.6rem 0.8rem", // 패딩 축소
      code: {
        background: "none",
        fontSize: "0.7rem", // 코드 블록 글자 크기 감소
        padding: 0,
      },
    },
    blockquote: {
      borderLeft: "2px solid #ddd", // 테두리 두께 축소
      margin: "1rem 0", // 상하 여백 축소
      paddingLeft: "0.8rem", // 내부 여백 축소
      lineHeight: "1.5", // 텍스트 간 간격 조정
    },
    hr: {
      border: "none",
      borderTop: "1px solid #ddd",
      margin: "1rem 0", // 상하 여백 축소
    },
  } as const,
} as const;

const UltraMiniStyle = {
  ".ProseMirror": {
    // minHeight: "calc(100vh - 50px)", // 더 작은 전체 높이
  } as const,
  ".tiptap p.is-editor-empty:first-child::before": {
    color: "#adb5bd",
    content: "attr(data-placeholder)",
    float: "left",
    height: 0,
    pointerEvents: "none",
  },
  ".tiptap p.is-empty::before": {
    color: "#adb5bd",
    content: "attr(data-placeholder)",
    float: "left",
    height: 0,
    pointerEvents: "none",
  },
  ".tiptap": {
    outline: "none",
    fontSize: "0.3rem", // 일반 텍스트 크기
    lineHeight: "1.6", // 텍스트 간 간격 추가
    ul: {
      padding: "0 0.5rem", // 리스트 내부 여백 추가
      margin: "0.5rem 0", // 리스트 외부 여백 추가
      listStylePosition: "outside", // 리스트 아이콘이 텍스트 바깥으로 정렬
      li: {
        marginBottom: "0.3rem", // 리스트 아이템 간 간격
        lineHeight: "1.6", // 리스트 내부 텍스트 간 간격
      },
    },
    ol: {
      padding: "0 0.5rem", // 리스트 내부 여백 추가
      margin: "0.5rem 0", // 리스트 외부 여백 추가
      listStylePosition: "outside",
      li: {
        marginBottom: "0.3rem",
        lineHeight: "1.6",
      },
    },
    p: {
      fontSize: "0.3rem", // 일반 텍스트 크기
      marginTop: "0.3rem", // 상단 여백 추가
      marginBottom: "0.3rem", // 하단 여백 추가
      lineHeight: "1.6", // 일반 텍스트 간 간격
    },
    h1: {
      lineHeight: 1.2,
      marginTop: "0.4rem", // 상단 여백 최소화
      marginBottom: "0.25rem",
      fontSize: "0.35rem", // 글자 크기 최소화
    },
    h2: {
      lineHeight: 1.2,
      marginTop: "0.25rem",
      marginBottom: "0.2rem",
      fontSize: "0.3rem",
    },
    h3: {
      lineHeight: 1.2,
      marginTop: "0.2rem",
      fontSize: "0.275rem",
    },
    h4: {
      lineHeight: 1.2,
      marginTop: "0.2rem",
      fontSize: "0.25rem",
    },
    h5: {
      lineHeight: 1.2,
      marginTop: "0.2rem",
      fontSize: "0.25rem",
    },
    h6: {
      lineHeight: 1.2,
      marginTop: "0.2rem",
      fontSize: "0.25rem",
    },
    code: {
      backgroundColor: "#c3c2c2",
      borderRadius: "0.1rem", // border-radius 최소화
      fontSize: "0.2rem", // 글자 크기 최소화
      padding: "0.05em 0.075em", // padding 더 축소
      color: "#000",
    },
    pre: {
      backgroundColor: "#c3c2c2",
      borderRadius: "0.1rem", // 둥근 모서리 최소화
      fontFamily: "'JetBrainsMono', monospace",
      margin: "0.125rem 0", // margin 더 축소
      padding: "0.125rem 0.2rem", // padding 더 축소
      code: {
        background: "none",
        fontSize: "0.2rem",
        padding: 0,
      },
    },
    blockquote: {
      borderLeft: "0.5px solid #ddd", // border 최소화
      margin: "0.25rem 0", // margin 더 축소
      paddingLeft: "0.2rem", // padding 더 축소
      fontSize: "0.3rem", // blockquote 내부 텍스트 크기
    },
    hr: {
      border: "none",
      borderTop: "0.5px solid #ddd",
      margin: "0.375rem 0", // margin 더 축소
    },
  } as const,
} as const;

const innerStyle = {
  position: "relative",
  padding: "8px",
  // backgroundColor: "gray",
  borderRadius: "5px",
  // border: "1px solid #ddd",
} as const;
const readOnlyStyle = {
  ...innerStyle,
  backgroundColor: "inherit",
  border: "none",
};

function CommonEditor({
  value,
  setValue,
  readOnly = false,
  minHeight = "",
}: {
  value: string;
  setValue: (value: string) => void;
  readOnly?: boolean;
  minHeight?: string;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "' / ' 를 입력하여 옵션 열기", // Placeholder 텍스트
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      setValue(editor.getHTML());
    },
    editable: !readOnly,
  });

  const theme = useTheme();

  useEffect(() => {
    if (editor && editor.getHTML() !== value) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  return (
    <div
      css={{
        ...(readOnly
          ? UltraMiniStyle
          : {
              ...Style,
              ...(minHeight
                ? {
                    ".ProseMirror": {
                      ...Style[".ProseMirror"],
                      minHeight,
                      color: theme.colors.text.primary,
                    },
                  }
                : {}),
            }),
      }}
    >
      <div
        css={{
          ...innerStyle,
          ...(readOnly ? readOnlyStyle : {}),
        }}
      >
        <EditorContent editor={editor} />
        {readOnly ? null : (
          <ContextEditorMenu editor={editor} />
        )}
        {readOnly ? null : (
          <TextFormattingBubbleMenu editor={editor} />
        )}
      </div>
    </div>
  );
}

export default CommonEditor;
