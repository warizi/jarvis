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
      overflow: "hidden",
    } as const),
  content: () =>
    ({
      position: "relative",
      display: "flex",
      flexDirection: "row",
      height: "100vh",
      overflowX: "hidden",
      overflowY: "auto",
      width: "100%",
      "& .content": {
        width: "100%",
        height: "100%",
        overflow: "auto",
      },
    } as const),
};
