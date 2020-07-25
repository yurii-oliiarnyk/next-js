import Link from "next/link";
import Head from "next/head";

export default () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Next JS project" />
        <meta name="keywords" content="HTML, CSS, JavaScript, React" />
        <meta name="author" content="Yurii" />
        <title>Next JS project</title>
      </Head>
      <div className="body">
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
      </div>
    </>
  );
};
