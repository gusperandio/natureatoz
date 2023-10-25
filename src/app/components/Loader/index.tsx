import styles from "./style.module.scss";

export default function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
      <div className={styles.loader}></div>
      <div className={styles.loader}></div>
      <div className={styles.loader}></div>
      <div className={styles.loader}></div>
    </div>
  );
}
