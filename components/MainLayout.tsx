import Link from "next/link";
import Head from "next/head";

export function MainLayout(props) {
  const { children, title = "Next App" } = props;

  return (
    <>
      <Head>
        <title>{title} | Next Project</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Next JS project" />
        <meta name="keywords" content="HTML, CSS, JavaScript, React" />
        <meta name="author" content="Yurii" />
      </Head>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          top: 0;
          left: 0;
          right: 0;
          background: darkblue;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        nav a {
          color: #fff;
          text-decoration: none;
        }

        main {
          padding-top: 60px;
        }
      `}</style>
    </>
  );
}
