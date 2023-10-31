"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import logo from "../../../../public/logo.png";
import Link from "next/link";
import LanguageSelector from "../LanguageSelector";
import { useEffect, useReducer, useState } from "react";
import { useLanguage } from "@/app/LanguageContext";
import bitcoin from "../../../../public/icons/bitcoin.svg";
import paypal from "../../../../public/icons/paypal.svg";
import coffee from "../../../../public/icons/coffee.svg";
import filetype from "../../../../public/icons/file-copy.svg";
import check from "../../../../public/icons/check-line.svg";
import codeQR from "../../../../public/qrCode.png";
import Modal from "../Modal";
import copy from "clipboard-copy";

export function Header() {
  const { selectedLanguage } = useLanguage();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleCopyToClipboard = () => {
    let textToCopy = "3DnyPiwLLrqs95FdSXgDb2TRqE86DHN2WS";
    copy(textToCopy)
      .then(() => {
        setIsCopied(true);

        setTimeout(() => {
          setIsCopied(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Erro ao copiar para a área de transferência", error);
      });
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
      <a className={styles.aa}>Docs</a>
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

  const copyClip =
    selectedLanguage === "Pt-BR" ? (
      <span className={styles.tooltiptext} id="myTooltip">
        {isCopied ? (
          <p>
            Copiado <Image src={check} width={18} height={18} alt="check" />
          </p>
        ) : (
          "Copiar"
        )}
      </span>
    ) : (
      <span className={styles.tooltiptext} id="myTooltip">
        {isCopied ? (
          <p>
            Copy to clipboard{" "}
            <Image src={check} width={18} height={18} alt="check" />
          </p>
        ) : (
          "Copied"
        )}
      </span>
    );

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContext}>
        <Link href="/" legacyBehavior>
          <Image src={logo} alt="Nature A to Z" height={200} priority />
        </Link>
        <nav>
          <Link href="/" legacyBehavior>
            {aa}
          </Link>
          <Link href="/docs" legacyBehavior>
            {dc}
          </Link>
          {sup}
          <a style={{ backgroundColor: "#15171b" }} className={styles.aa}>
            <LanguageSelector />
          </a>
        </nav>
        <Modal isOpen={modalIsOpen} onClose={closeModal}>
          <div className={styles.divDonations}>
            <Link
              href="https://www.buymeacoffee.com/natureatoz"
              legacyBehavior
              passHref
            >
              <a target="_blank" rel="noopener noreferrer">
                <div className={styles.notification}>
                  <div className={styles.notiglow}></div>
                  <div className={styles.notiborderglow}></div>
                  <div className={styles.notititle}>
                    Buy Me a Coffee{" "}
                    <Image src={coffee} width={42} height={28} alt="coffee" />
                  </div>
                  <div className={styles.notibody}>
                    {selectedLanguage === "Pt-BR"
                      ? "Recomendado para regiões fora da China"
                      : "Recommended for Non-China Regions"}
                  </div>
                </div>
              </a>
            </Link>
            <Link
              href="https://www.paypal.com/donate/?hosted_button_id=2U3WSCJG8ZU88"
              legacyBehavior
              passHref
            >
              <a target="_blank" rel="noopener noreferrer">
                <div className={styles.notificationPay}>
                  <div className={styles.notiglowPay}></div>
                  <div className={styles.notiborderglowPay}></div>
                  <div className={styles.notititlePay}>
                    PayPal{" "}
                    <Image src={paypal} width={42} height={28} alt="paypal" />
                  </div>
                  <div className={styles.notibodyPay}>
                    {selectedLanguage === "Pt-BR" ? "Com Taxas" : "With Fees"}
                  </div>
                </div>
              </a>
            </Link>
            <div className={styles.bitcoin}>
              <Image src={bitcoin} width={42} height={32} alt="bitcoin" />
              <p>3DnyPiwLLrqs95FdSXgDb2TRqE86DHN2WS</p>
              <div className={styles.copy}>
                {copyClip}
                <Image
                  src={filetype}
                  width={18}
                  height={18}
                  alt="bitcoin"
                  onClick={handleCopyToClipboard}
                />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </header>
  );
}
