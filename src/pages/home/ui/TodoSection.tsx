/** @jsxImportSource @emotion/react */

const TodoSectionStyles = {
  container: () => ({
    width: "40%",
    height: "100%",
    display: "grid",
    gridTemplateRows: "repeat(2, 1fr)",
  }),
};

function TodoSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const { container } = TodoSectionStyles;
  return <div css={container}>{children}</div>;
}

export default TodoSection;
