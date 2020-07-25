import Router from "next/router";
import { MainLayout } from "../../components/MainLayout";

export default () => {
  return (
    <MainLayout title="About Page">
      <h1>About page</h1>
      <button onClick={() => Router.push("/")}>Go back to home</button>
    </MainLayout>
  );
};
