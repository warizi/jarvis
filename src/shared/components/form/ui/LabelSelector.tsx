/** @jsxImportSource @emotion/react */

import {
  BookMarkIcon,
  CloseIcon,
  PlusIcon,
  TrashIcon,
} from "@shared/components/icon";
import { labelSelectorStyles } from "./LabelSelector.style";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@emotion/react";
import CustomColorPicker from "./CustomColorPicker";

function LabelSelector({
  labels,
  selectedLabel,
  onAddLabel,
  onDeleteLabel,
  onSelectLabel,
  onCancelLabel,
}: {
  labels: { id: number; name: string; color: string }[];
  selectedLabel?: {
    id: number;
    name: string;
    color: string;
  };
  onAddLabel?: (label: {
    name: string;
    color: string;
  }) => void;
  onDeleteLabel?: (id: number) => void;
  onSelectLabel?: (label: {
    id: number;
    name: string;
    color: string;
  }) => void;
  onCancelLabel?: () => void;
}) {
  const theme = useTheme();
  const [selectedColor, setSelectedColor] =
    useState<string>("#E52B27");
  const { container, input, dropdown } =
    labelSelectorStyles;
  const [isDropdownOpen, setIsDropdownOpen] =
    useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedLabelInner, setSelectedLabelInner] =
    useState<
      | {
          id: number;
          name: string;
          color: string;
        }
      | null
      | undefined
    >(selectedLabel);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredLabels = labels.filter((label) =>
    label.name
      .toLowerCase()
      .includes(inputValue.toLowerCase().trim())
  );

  const handleAddLabel = () => {
    if (!inputValue) {
      return;
    }

    const newLabel = {
      name: inputValue,
      color: selectedColor,
    };

    if (onAddLabel) {
      onAddLabel(newLabel);
    }
    setInputValue("");
    setSelectedColor("#E52B27");
    setIsDropdownOpen(false);
  };

  const handleLabelClick = (label: {
    id: number;
    name: string;
    color: string;
  }) => {
    setSelectedLabelInner(label);
    if (onSelectLabel) {
      onSelectLabel(label);
    }
  };
  const handleOpenDropdown = () => {
    setIsDropdownOpen(true);
  };
  const handleCloseDropdown = () => {
    setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  useEffect(() => {
    const handleWindowClick = (e: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        handleCloseDropdown();
      }
    };
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener(
        "click",
        handleWindowClick
      );
    };
  }, [inputRef]);
  return (
    <div css={container}>
      <BookMarkIcon
        size={22}
        color={
          selectedLabelInner
            ? selectedLabelInner.color
            : undefined
        }
        isFilled={!!selectedLabelInner}
      />
      {selectedLabelInner ? (
        <div
          css={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            width: "100%",
            color: theme.colors.text.primary,
            paddingRight: "10px",
            ":hover": {
              backgroundColor:
                theme.colors.background.hover,
              borderRadius: theme.radius.medium,
            },
          }}
        >
          <LabelSelectItem
            label={selectedLabelInner}
            isLabelColorDisplay={false}
          />
          <button
            css={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              margin: 0,
              ":hover": {
                backgroundColor:
                  theme.colors.background.hover,
              },
            }}
            onClick={() => {
              setSelectedLabelInner(null);
              setInputValue("");
              setSelectedColor("#E52B27");
              if (onCancelLabel) {
                onCancelLabel();
              }
            }}
          >
            <CloseIcon size={18} />
          </button>
        </div>
      ) : (
        <input
          id="label-selector"
          type="text"
          css={input}
          ref={inputRef}
          value={inputValue}
          onFocus={handleOpenDropdown}
          // onBlur={handleCloseDropdown}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          placeholder="라벨 선택"
        />
      )}
      {isDropdownOpen && (
        <div
          css={dropdown}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {filteredLabels.length === 0 && (
            <div
              css={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "10px",
                padding: "5px 0",
                cursor: "pointer",
                fontSize: theme.typography.size.small,
                borderRadius: theme.radius.small,
                width: "100%",
                "&:hover": {
                  backgroundColor:
                    theme.colors.background.hover,
                },
              }}
              onClick={() => handleAddLabel()}
            >
              <PlusIcon />
              <span>라벨 추가</span>
              <CustomColorPicker
                size={22}
                onChange={(setColor) => {
                  setSelectedColor(setColor);
                }}
              />
            </div>
          )}

          {filteredLabels.length > 0 &&
            filteredLabels?.map((label) => (
              <div
                css={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  borderRadius: theme.radius.small,
                  paddingRight: "10px",
                  width: "100%",
                  "& button": {
                    display: "none",
                  },
                  ":hover": {
                    backgroundColor:
                      theme.colors.background.hover,
                    "& button": {
                      display: "block",
                    },
                  },
                }}
              >
                <LabelSelectItem
                  key={label.id}
                  label={label}
                  onClick={() => {
                    handleLabelClick(label);
                    setIsDropdownOpen(false);
                  }}
                />
                <button
                  css={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    color: theme.colors.important.heigh,
                    margin: 0,
                    ":hover": {
                      backgroundColor:
                        theme.colors.background.hover,
                    },
                  }}
                  onClick={() => {
                    if (onDeleteLabel) {
                      onDeleteLabel(label.id);
                    }
                  }}
                >
                  <TrashIcon size={16} />
                </button>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default LabelSelector;

function LabelSelectItem({
  label,
  onClick,
  isLabelColorDisplay = true,
}: {
  label: { id: number; name: string; color: string };
  onClick?: () => void;
  isLabelColorDisplay?: boolean;
}) {
  const { labelItem, labelColor } = labelSelectorStyles;
  return (
    <div css={labelItem} onClick={onClick}>
      {isLabelColorDisplay && (
        <div css={labelColor(label.color)} />
      )}

      <span>{label.name}</span>
    </div>
  );
}
