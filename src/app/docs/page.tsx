import Loader from "../components/Loader";
import styles from "../styles/page.module.css";

export default function Page() {
  return (
    <div>
      <main className={styles.main}>
        <Loader />
      </main>
    </div>
  );
}
