"use client";
import Loader from "../components/Loader";
import styles from "../styles/page.module.css";
import { useState, useEffect } from "react";

export default function Page() {
  let language: string = "En-Us";
  language = localStorage.getItem("language") || "En-Us";

  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowLoader(true);
    }, 2700);

    return () => {
      clearTimeout(delay);
    };
  }, []);

  const aa = language === "Pt-BR" ? <a>Documentos</a> : <a>Docs</a>;
  return (
    <div>
      <main className={styles.main}>
        {showLoader ? <div>Carregado docs</div> : <Loader />}
      </main>
    </div>
  );
}
