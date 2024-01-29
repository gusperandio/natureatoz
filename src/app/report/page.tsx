"use client";
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { useLanguage } from '../LanguageContext';

export default function Page() {
  const { selectedLanguage } = useLanguage();
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (event: any) => {
    alert('A name was submitted: ' + email);
    event.preventDefault();
  }

  useEffect(() => {
    const scrollToPosition = () => {
      window.scrollTo({
        top: 195,
        behavior: 'smooth'
      });
    };

    scrollToPosition();
  }, []);
  
  return (<div className={styles.content}>
    <div className={styles.container}>
      <form className={styles.modal} onSubmit={handleSubmit}>
        <div className={styles.modal__header}>
          <span className={styles.modal__title}>{selectedLanguage === "Pt-BR" ? "Reportar" : "Report"}</span>
        </div>
        <div className={styles.modal__body}>
          <div className={styles.input}>
            <label className={styles.input__label}>E-mail <span style={{ color: "red" }}>*</span></label>
            <input className={styles.input__field} type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className={styles.input}>
            <label className={styles.input__label}>{selectedLanguage === "Pt-BR" ? "Descrição" : "Description"} <span style={{ color: "red" }}>*</span></label>
            <textarea className={`${styles.input__field} ${styles.input__field__textarea}`}></textarea>
            <p className={styles.input__description}>Give your project a good description so everyone know it for</p>
          </div>
        </div>
        <div className={styles.modal__footer}>
          <button className={`${styles.button} ${styles.button__primary}`}>{selectedLanguage === "Pt-BR" ? "Enviar" : "Submit"}</button>
        </div>
      </form>
    </div>
  </div>)
}