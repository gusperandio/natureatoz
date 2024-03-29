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
import { useRouter } from "next/navigation";
import { Roboto } from "next/font/google";

const font = Roboto({weight : "400", subsets: ["latin"]})


export function Footer() {
  const { selectedLanguage } = useLanguage();
  const { isOpen, openModal, closeModal, modalConfig } =
  useModal(selectedLanguage);
  const router = useRouter();

  const report = () => {
    router.push("/report");
  }

  return (
    <div className={`${styles.footer} ${font.className}`}>
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
            <li className={styles.b}>
              <p
                style={{ fontWeight: "bold", cursor: "pointer" }}
                onClick={() => report()}
              >
                {selectedLanguage === "Pt-BR" ? "Reportar" : "Report"}
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
    classToUse: "modal_support",
    children: <ModalSup selectedLanguage={selectedLanguage} />,
  });

  const openModal = (n: number) => {
    switch (n) {
      case 1:
        setModalConfig({
          classToUse: "modal_contact",
          children: <ModalContact selectedLanguage={selectedLanguage} />,
        });

        break;
      case 2:
        setModalConfig({
          classToUse: "modal_privacy",
          children: <ModalPrivacy selectedLanguage={selectedLanguage} />,
        });
        break;
      case 3:
        setModalConfig({
          classToUse: "modal_license",
          children: <ModalLicense selectedLanguage={selectedLanguage} />,
        });
        break;
      default:
        setModalConfig({
          classToUse: "modal_support",
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
