export const todoLayoutStyle = {
  container: () =>
    ({
      potision: "relative",
      top: 0,
      left: 0,
      display: "flex",
      flexDirection: "row",
      width: "100%",
      height: "100vh",
    } as const),
  content: () => ({
    height: "100vh",
    overflow: "auto",
    width: "100%",
  }),
};
