/** @jsxImportSource @emotion/react */

import { FloatingMenu } from "@tiptap/react";
import { useState, useEffect, useRef } from "react";
import { buttonArray } from "../model/ContextButtons";
import { Editor } from "@tiptap/react";
import { EditorView } from "prosemirror-view";
import { Theme, useTheme } from "@emotion/react";

const Style = {
  container: (theme: Theme) =>
    ({
      width: "150px",
      minHeight: "40px",
      maxHeight: "200px",
      border: "1px solid #ccc",
      borderRadius: theme.radius.small,
      backgroundColor: "white",
      overflowY: "scroll",
      overflowX: "hidden",
      scrollbarWidth: "none", // Firefox
      msOverflowStyle: "none", // IE, Edge
      "::-webkit-scrollbar": {
        // Chrome, Safari
        display: "none",
      },
      boxShadow: theme.shadow.small,
      zIndex: 9999,
    } as const),
  item: (theme: Theme) =>
    ({
      width: "100%",
      height: "40px",
      cursor: "pointer",
      border: "none",
      borderBottom: "1px solid #ccc",
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: theme.colors.primary.light,
        color: "white",
      },
      textAlign: "left",
      padding: "0 10px",
      zIndex: 9999,
    } as const),
  itemActive: (theme: Theme) =>
    ({
      width: "100%",
      height: "40px",
      cursor: "pointer",
      backgroundColor: theme.colors.primary.light,
      color: "white",
      border: "none",
      textAlign: "left",
      padding: "0 10px",
    } as const),
  icon: (theme: Theme) =>
    ({
      display: "inline-block",
      width: "20px",
      color: theme.colors.text.primary,
      fontWeight: "bold",
      marginRight: "5px",
    } as const),
};

function ContextEditorMenu({
  editor,
}: {
  editor: Editor | null;
}) {
  const [buttonArrayState, setButtonArrayState] =
    useState(buttonArray);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const theme = useTheme();

  const handleSearch = (searchText: string) => {
    const newButtonArray = buttonArray.filter((button) => {
      return button.searchText.includes(searchText);
    });
    setButtonArrayState(newButtonArray);
    if (newButtonArray.length === 0) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(0);
    }
  };

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (isMenuVisible) {
        if (["ArrowUp", "ArrowDown"].includes(event.key)) {
          event.preventDefault(); // 방향키 기본 동작 방지
          if (event.key === "ArrowUp") {
            setActiveIndex((prev) =>
              prev > 0
                ? prev - 1
                : buttonArrayState.length - 1
            );
          } else if (event.key === "ArrowDown") {
            setActiveIndex((prev) =>
              prev < buttonArrayState.length - 1
                ? prev + 1
                : 0
            );
          }
        } else if (event.key === "Enter" && editor) {
          event.preventDefault(); // Enter 키 기본 동작 방지
          event.stopPropagation(); // 이벤트 전파 차단
          buttonArrayState[activeIndex]?.action(editor); // 활성 버튼의 액션 실행
          setMenuVisible(false); // 메뉴 닫기
        } else if (event.key === "Escape") {
          event.preventDefault(); // Escape 키 기본 동작 방지
          event.stopPropagation(); // 이벤트 전파 차단
          setMenuVisible(false); // 메뉴 닫기
        }
      }
    };

    // ProseMirror의 handleKeyDown을 덮어쓰기
    const previousHandleKeyDown =
      editor?.view.props.handleKeyDown;
    editor?.view.setProps({
      handleKeyDown(
        view: EditorView,
        event: KeyboardEvent
      ) {
        handleKeydown(event); // 우리의 키 처리 로직 추가
        if (
          isMenuVisible &&
          (event.key === "Enter" || event.key === "Escape")
        ) {
          return true; // ProseMirror 기본 동작 방지
        }
        return (
          previousHandleKeyDown?.(view, event) || false
        ); // 기존 로직도 유지
      },
    });

    return () => {
      if (editor?.view) {
        editor.view.setProps({
          handleKeyDown: previousHandleKeyDown || undefined,
        });
      }
    };
  }, [
    isMenuVisible,
    activeIndex,
    buttonArrayState,
    editor,
  ]);

  useEffect(() => {
    const activeEl = itemRefs.current[activeIndex];
    if (activeEl) {
      activeEl.scrollIntoView({
        block: "nearest", // or "center"
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <>
      {editor && (
        <FloatingMenu
          editor={editor}
          shouldShow={({ state }) => {
            const { $from } = state.selection; // 커서 위치
            const textBefore = $from.parent.textBetween(
              0,
              $from.parentOffset,
              undefined,
              ""
            ); // 커서 앞의 텍스트
            if (/^\/[^\s]*$/.test(textBefore)) {
              const pureText = textBefore.slice(1);
              handleSearch(pureText);
            }
            setActiveIndex(0);
            setMenuVisible(/^\/[^\s]*$/.test(textBefore)); // 메뉴 표시 상태 설정
            return /^\/[^\s]*$/.test(textBefore);
          }}
          tippyOptions={{
            duration: 100,
            placement: "bottom",
            offset: [100, 5],
            zIndex: 9999,
          }}
        >
          <div css={{ ...Style.container(theme) }}>
            {buttonArrayState.map((button, index) => (
              <button
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                css={
                  activeIndex === index
                    ? Style.itemActive(theme)
                    : Style.item(theme)
                }
                onClick={() => {
                  button.action(editor);
                  setActiveIndex(index);
                  setMenuVisible(false); // 메뉴 닫기
                }}
              >
                <span css={Style.icon}>{button?.icon}</span>
                {button.label}
              </button>
            ))}
          </div>
        </FloatingMenu>
      )}
    </>
  );
}

export default ContextEditorMenu;
