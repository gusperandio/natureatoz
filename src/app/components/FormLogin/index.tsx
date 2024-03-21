import styles from "./styles.module.scss";[
  
]
export function FormLogin() {
  return (
    <form className={styles.form_control} action="">
      <p className={styles.title}>Login</p>
      <div className={styles.input_field}>
        <input required className={styles.input} type="text" />
        <label className={styles.label} htmlFor="input">
          Enter Email
        </label>
      </div>
      <div className={styles.input_field}>
        <input required className={styles.input} type="password" />
        <label className={styles.label} htmlFor="input">
          Enter Password
        </label>
      </div>
      <button className={styles.submit_btn}>Sign In</button>
    </form>
  );
}
