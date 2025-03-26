/** @jsxImportSource @emotion/react */

function CountAlert({
  size = 25,
  count = 0,
}: {
  size?: number;
  count?: number;
}) {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        color: "white",
        borderRadius: "50%",
        width: size,
        height: size,
        fontSize: `${size / 2}px`,
      }}
    >
      <span>{count}</span>
    </div>
  );
}

export default CountAlert;
