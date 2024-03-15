"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import logo from "../../../../public/logo.png";
import Link from "next/link";
import LanguageSelector from "../LanguageSelector";
import { useState } from "react";
import { useLanguage } from "@/app/LanguageContext";
import { Roboto } from "next/font/google";
import Modal from "../Modal";
import ModalSup from "../ModalSup";

const font = Roboto({ weight: "500", subsets: ["latin"], display: "swap" });
export function Header() {
  const { selectedLanguage } = useLanguage();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContext}>
        <Link href="/" legacyBehavior>
          <Image
            src={logo}
            alt="Nature A to Z"
            height={200}
            priority
            style={{ cursor: "pointer" }}
          />
        </Link>
        <nav style={{ fontFamily: "Roboto" }}>
          <Link href="/" legacyBehavior>
            <a className={`${styles.aa} ${font.className}`}>
              {selectedLanguage === "PtBR" ? "Inicio" : "Home"}
            </a>
          </Link>
          <Link href="/intro" legacyBehavior>
            <a className={`${styles.aa} ${font.className}`}>
              {selectedLanguage === "PtBR" ? "Documentos" : "Documents"}
            </a>
          </Link>
          <a
            id="textSupport"
            target="_blank"
            rel="noopener noreferrer"
            onClick={openModal}
            style={{ cursor: "pointer" }}
            className={`${styles.aa} ${font.className}`}
          >
            {selectedLanguage === "Pt-BR" ? "Apoiar" : "Support us"}
          </a>
          <a style={{ backgroundColor: "#15171b" }} className={styles.aa}>
            <LanguageSelector />
          </a>
        </nav>

        <Modal
          isOpen={modalIsOpen}
          onClose={closeModal}
          classToUse="modal_support"
        >
          <ModalSup selectedLanguage={selectedLanguage} />
        </Modal>
      </div>
    </header>
  );
}
