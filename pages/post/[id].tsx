import { useState, useEffect } from "react";
import { MainLayout } from "../../components/MainLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import { NextPageContext } from "next";
import { MyPost } from "../../interfaces/post";

interface PostPageProps {
  post: MyPost;
}

export default function Post({ post: serverPost }: PostPageProps) {
  const [post, setPost] = useState(serverPost);

  const { query } = useRouter();

  useEffect(() => {
    const load = async () => {
      const { id } = query;
      const response = await fetch(`${process.env.baseUrl}/${id}`);
      const post: MyPost = await response.json();
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

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

Post.getInitialProps = async ({ query, req }: PostNextPageContext) => {
  if (!req) {
    return { post: null };
  }

  const { id } = query;
  const response = await fetch(`${process.env.baseUrl}/posts/${id}`);
  const post: MyPost = await response.json();

  return { post };
};
