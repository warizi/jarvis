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
        backgroundColor: "#F14B4B",
        color: "white",
        borderRadius: "50%",
        width: size,
        height: size,
        fontSize: `${size / 2}px`,
        position: "relative",
      }}
    >
      <span
        css={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%)`,
        }}
      >
        {count}
      </span>
    </div>
  );
}

export default CountAlert;
