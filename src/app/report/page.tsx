"use client";
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { useLanguage } from '../LanguageContext';
import axios from 'axios';
import Loader from "../components/Loader";
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { IsProd } from '@/lib/config/conifg';
import { Roboto } from 'next/font/google';

const font = Roboto({weight: "400", subsets: ["latin"], display : "swap"})

export default function Page() {
  const { selectedLanguage } = useLanguage();
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();
  const URI = IsProd ? process.env.URI_PROD : process.env.URI_DEV;
  const notify = () => toast.success(selectedLanguage === "Pt-BR" ? 'Report send!' : "Reporte enviado!");
  const sendReport = async () => {
    setLoading(true);
    setDisabled(true);
    
    
    try {
      const response = await axios.post(
        `${URI}api/v1/send?email=${email}&description=${desc}`, { headers: { 'keynature': process.env.KEY_TO_POST } });

      if (response.status == 200 || response.status == 500) {

      }
    } catch (error) {
      console.error(error)
    }
    finally {
      setLoading(false);
      notify();
      setEmail("");
      setDesc("");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();

    sendReport();
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

  return (<div className={`${styles.content} ${font.className}`}>
    <div className={styles.container}>
      <form className={styles.modal} onSubmit={handleSubmit}>
        <div className={styles.modal__header}>
          <span className={styles.modal__title}>{selectedLanguage === "Pt-BR" ? "Reportar" : "Report"}</span>
        </div>
        <div className={styles.modal__body}>
          <div className={styles.input}>
            <label className={styles.input__label}>E-mail <span style={{ color: "red" }}>*</span></label>
            <input className={styles.input__field} type="email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={254} required disabled={disabled} />
          </div>
          <div className={styles.input}>
            <label className={styles.input__label}>{selectedLanguage === "Pt-BR" ? "Descrição" : "Description"} <span style={{ color: "red" }}>*</span></label>
            <textarea className={`${styles.input__field} ${styles.input__field__textarea}`} value={desc} onChange={(e) => setDesc(e.target.value)} maxLength={400} required disabled={disabled}></textarea>
            <p className={styles.input__description}>{selectedLanguage === "Pt-BR" ? "Nos reporte seu problema, seja ele um bug, melhoria ou indicação." : "Report your issue to us, whether it's a bug, improvement, or suggestion."}</p>
          </div>
        </div>
        <div className={styles.modal__footer}>
          {loading ? (<Loader />) :
            <button className={`${styles.button}`} disabled={disabled}>
              <span className={styles.spanButton}>{selectedLanguage === "Pt-BR" ? "Enviar" : "Submit"}</span>
            </button>
          }
        </div>
      </form>
    </div>
    <Toaster />
  </div>)
}