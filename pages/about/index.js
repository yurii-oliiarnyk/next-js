import Router from "next/router";

export default () => {
  return (
    <>
      <h1>About page</h1>
      <button onClick={() => Router.push("/")}>Go back to home</button>
    </>
  );
};
