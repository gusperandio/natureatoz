"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import logo from "../../../../public/logo.png";
import Link from "next/link";
import LanguageSelector from "../LanguageSelector";
import { useState } from "react";
import { useLanguage } from "@/app/LanguageContext";

import Modal from "../Modal";
import ModalSup from "../ModalSup";

export function Header() {
  const { selectedLanguage } = useLanguage();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  
  
  const aa =
    selectedLanguage === "Pt-BR" ? (
      <a className={styles.aa}>Inicio</a>
    ) : (
      <a className={styles.aa}>Home</a>
    );

  const dc =
    selectedLanguage === "Pt-BR" ? (
      <a className={styles.aa}>Documentos</a>
    ) : (
      <a className={styles.aa}>Documents</a>
    );

  const sup =
    selectedLanguage === "Pt-BR" ? (
      <a
        id="textSupport"
        target="_blank"
        rel="noopener noreferrer"
        onClick={openModal}
        style={{ cursor: "pointer" }}
        className={styles.aa}
      >
        Apoiar
      </a>
    ) : (
      <a
        id="textSupport"
        target="_blank"
        rel="noopener noreferrer"
        onClick={openModal}
        style={{ cursor: "pointer" }}
        className={styles.aa}
      >
        Support us
      </a>
    );

 

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContext}>
        <Link href="/" legacyBehavior>
          <Image src={logo} alt="Nature A to Z" height={200} priority style={{cursor: "pointer"}} />
        </Link>
        <nav style={{fontFamily : "Roboto"}}>
          <Link href="/" legacyBehavior>
            {aa}
          </Link>
          <Link href="/intro" legacyBehavior>
            {dc}
          </Link>
          {sup}
          <a style={{ backgroundColor: "#15171b" }} className={styles.aa}>
            <LanguageSelector />
          </a>
        </nav>

        <Modal isOpen={modalIsOpen} onClose={closeModal} classToUse="modal_support">
          <ModalSup selectedLanguage={selectedLanguage}/>
        </Modal>
      </div>
    </header>
  );
}
