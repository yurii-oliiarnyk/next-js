import { useState, useEffect } from "react";
import { MainLayout } from "../../components/MainLayout";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Post({ post: serverPost }) {
  const [post, setPost] = useState(serverPost);

  const { query } = useRouter();

  useEffect(() => {
    const load = async () => {
      const { id } = query;
      const response = await fetch(`http://localhost:4200/posts/${id}`);
      const post = await response.json();
      setPost(post);
    };

    if (!serverPost) {
      load();
    }
  }, []);

  if (!post) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={post.title}>
      <h1>{post.title}</h1>
      <hr />
      <p>{post.body}</p>
      <Link href="/posts/">
        <a>Back to posts</a>
      </Link>
    </MainLayout>
  );
}

Post.getInitialProps = async ({ query, req }) => {
  if (!req) {
    return { post: null };
  }

  const { id } = query;
  const response = await fetch(`http://localhost:4200/posts/${id}`);
  const post = await response.json();

  return { post };
};
