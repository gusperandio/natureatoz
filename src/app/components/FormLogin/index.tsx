import { useLanguage } from "@/app/LanguageContext";
import styles from "./styles.module.scss";
import { FormEvent, useState } from "react";

interface PropsLogin {
  login: (formData: { email: string; password: string }) => void;
}

export function FormLogin(props: PropsLogin) {
  const { selectedLanguage } = useLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.login({ email, password });
  };
  return (
    <>
      <form className={styles.form_control} onSubmit={handleSubmit}>
        <p className={styles.title}>
          {selectedLanguage === "Pt-BR" ? "Acessar" : "Login"}
        </p>
        <div className={styles.input_field}>
          <input
            required
            className={styles.input}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className={styles.label} htmlFor="input">
            {selectedLanguage === "Pt-BR" ? "Informar Email" : "Enter Email"}
          </label>
        </div>
        <div className={styles.input_field}>
          <input
            required
            className={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className={styles.label} htmlFor="input">
            {selectedLanguage === "Pt-BR" ? "Senha" : "Password"}
          </label>
        </div>
        <button className={styles.submit_btn} type="submit">
          {selectedLanguage === "Pt-BR" ? "Logar" : "Sign In"}
        </button>
      </form>
    </>
  );
}
