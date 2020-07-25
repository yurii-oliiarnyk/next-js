import { useRouter } from "next/router";

export default (props) => {
  const { query } = useRouter();
  const { id } = query;

  return <h1>Post #{id}</h1>;
};
