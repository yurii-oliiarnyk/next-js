import Link from "next/link";
import { MainLayout } from "../components/MainLayout";
import styles from "../styles/error.module.scss";

export default function ErrorPage() {
  return (
    <MainLayout>
      <h1 className={styles.error}>Error - 404</h1>
      <Link href="/">
        <a>Go back to home</a>
      </Link>
    </MainLayout>
  );
}
