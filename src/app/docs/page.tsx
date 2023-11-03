"use client";
import { useLanguage } from "../LanguageContext";
import Loader from "../components/Loader";
import styles from "../styles/page.module.css";
import { useState, useEffect } from "react";
import Modal from '../components/Modal';
import Parallax from "../components/Parallax";


export default function Page() {
  const { selectedLanguage } = useLanguage();

  const [showLoader, setShowLoader] = useState(false);
  

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowLoader(true);
    }, 2700);

    return () => {
      clearTimeout(delay);
    };
  }, []);

  const aa = selectedLanguage === "Pt-BR" ? <a>Documentos</a> : <a>Docs</a>;
  return (
    <div>
      <Parallax />
  </div>
  );
}
