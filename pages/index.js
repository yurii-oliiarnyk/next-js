import Link from "next/link";
import Head from "next/head";
import { MainLayout } from "../components/MainLayout";

export default () => {
  return (
    <MainLayout title="Home Page">
      <h1>Home NextJS!</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <p>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    </MainLayout>
  );
};
