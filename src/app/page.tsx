import Image from "next/image";
import styles from "./styles/page.module.css";
import CardHome from "./components/CardHome";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
          <CardHome/>
      </main>
    </div>
  );
}
