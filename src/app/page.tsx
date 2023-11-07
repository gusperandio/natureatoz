import Image from "next/image";
import styles from "./styles/page.module.css";
import CardHome from "./components/CardHome";
import req from '../../public/icons/req.svg';
export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.divBtn}>
          <button className={styles.Btn}>
            <span className={styles.leftContainer}>
              <Image src={req} width={22} height={22} alt="requistion"/>
              <span className={styles.like}>Requests</span>
            </span>
            <span className={styles.likeCount}>2,050</span>
          </button>
        </div>
        <CardHome />
      </main>
    </div>
  );
}
