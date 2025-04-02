/** @jsxImportSource @emotion/react */

function HomePage() {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        fontSize: "30px",
      }}
    >
      <h1>Welcome to the Home Page</h1>
      <br />
      <p>This is the home page of the application.</p>
      <br />
      <p>
        Dashboard is a place where you can manage your tasks
        and notes.
      </p>
    </div>
  );
}

export default HomePage;
