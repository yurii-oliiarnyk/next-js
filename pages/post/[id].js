import { useRouter } from "next/router";
import { MainLayout } from "../../components/MainLayout";

export default (props) => {
  const { query } = useRouter();
  const { id } = query;

  return (
    <MainLayout title={`Post ${id} page`}>
      <h1>Post #{id}</h1>
    </MainLayout>
  );
};
