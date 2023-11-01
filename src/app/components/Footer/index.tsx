"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import logo from "../../../../public/logo.png";
import Link from "next/link";
import { useLanguage } from "@/app/LanguageContext";
import Modal from "../Modal";
import ModalSup from "../ModalSup";
import { useState } from "react";
import ModalPrivacy from "../ModalPrivacy";

export function Footer() {
  const { selectedLanguage } = useLanguage();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div
      className={`${styles.footer} animate__animated animate__fadeIn animate__delay-1s`}
    >
      <div className={styles.footerfooter}>
        <div>
          <ul className={styles.modalLista}>
            <li className={styles.g}>
              <Link
                href={"/"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Image src={logo} alt="Nature A to Z" height={90} />
              </Link>
            </li>
            <li className={styles.g}>
              <Link
                href={"/"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <p style={{ fontWeight: "bold" }}>
                  {selectedLanguage === "Pt-BR" ? "Inicio" : "Home"}
                </p>
              </Link>
            </li>
            <li className={styles.b}>
              <Link
                href={"/contact"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <p style={{ fontWeight: "bold" }}>
                  {selectedLanguage === "Pt-BR" ? "Contato" : "Contact"}
                </p>
              </Link>
            </li>
            <li className={styles.g}>
              <Link
                href={"/"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <p style={{ fontWeight: "bold" }}>
                  {selectedLanguage === "Pt-BR" ? "Privacidade" : "Privacy"}
                </p>
              </Link>
            </li>
            <li className={styles.b}>
              <Link
                href={"/"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <p style={{ fontWeight: "bold" }}>
                  {" "}
                  {selectedLanguage === "Pt-BR" ? "Licença" : "License"}
                </p>
              </Link>
            </li>
            <li className={styles.g}>
              <Link
                href={"/"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <p style={{ fontWeight: "bold", cursor: "pointer" }} onClick={openModal}>
                  {selectedLanguage === "Pt-BR" ? "Apoiar" : "Support Us"}
                </p>
              </Link>
            </li>
          </ul>
        </div>

        <br />
      </div>

        <Modal isOpen={modalIsOpen} onClose={closeModal}>
          {/* <ModalSup selectedLanguage={selectedLanguage}/> */}
          <ModalPrivacy selectedLanguage={selectedLanguage}/>
        </Modal>
    </div>
  );
}
