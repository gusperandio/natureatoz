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
import ModalContact from "../ModalContact";
import ModalLicense from "../ModalLicense";

export function Footer() {
  const { selectedLanguage } = useLanguage();
  const { isOpen, openModal, closeModal, modalConfig } =
    useModal(selectedLanguage);

  return (
    <div className={styles.footer}>
      <div className={styles.footerfooter}>
        <div>
          <ul className={styles.modalLista}>
            <li className={styles.g}>
              <Link
                href="/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Image src={logo} alt="Nature A to Z" height={90} />
              </Link>
            </li>
            <li className={styles.g}>
              <Link
                href="/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <p style={{ fontWeight: "bold" }}>
                  {selectedLanguage === "Pt-BR" ? "Início" : "Home"}
                </p>
              </Link>
            </li>
            <li className={styles.b}>
              <p style={{ fontWeight: "bold" }} onClick={() => openModal(1)}>
                {selectedLanguage === "Pt-BR" ? "Contato" : "Contact"}
              </p>
            </li>
            <li className={styles.g}>
              <p style={{ fontWeight: "bold" }} onClick={() => openModal(2)}>
                {selectedLanguage === "Pt-BR" ? "Privacidade" : "Privacy"}
              </p>
            </li>
            <li className={styles.b}>
              <p style={{ fontWeight: "bold" }} onClick={() => openModal(3)}>
                {" "}
                {selectedLanguage === "Pt-BR" ? "Licença" : "License"}
              </p>
            </li>
            <li className={styles.g}>
              <p
                style={{ fontWeight: "bold", cursor: "pointer" }}
                onClick={() => openModal(4)}
              >
                {selectedLanguage === "Pt-BR" ? "Apoiar" : "Support Us"}
              </p>
            </li>
          </ul>
        </div>

        <br />
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} {...modalConfig} />
    </div>
  );
}

function useModal(selectedLanguage: string) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    margin: "15% auto",
    height: "320px",
    width: "640px",
    children: <ModalSup selectedLanguage={selectedLanguage} />,
  });

  const openModal = (n: number) => {
    switch (n) {
      case 1:
        setModalConfig({
          margin: "17% auto",
          height: "300px",
          width: "460px",
          children: <ModalContact selectedLanguage={selectedLanguage} />,
        });

        break;
      case 2:
        setModalConfig({
          margin: "6% auto",
          height: selectedLanguage === "Pt-BR" ? "680px" : "620px",
          width: "620px",
          children: <ModalPrivacy selectedLanguage={selectedLanguage} />,
        });
        break;
      case 3:
        setModalConfig({
          margin: "15% auto",
          height: "300px",
          width: "300px",
          children: <ModalLicense selectedLanguage={selectedLanguage} />,
        });
        break;
      default:
        setModalConfig({
          margin: "15% auto",
          height: "320px",
          width: "640px",
          children: <ModalSup selectedLanguage={selectedLanguage} />,
        });
        break;
    }

    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return { isOpen, openModal, closeModal, modalConfig };
}
