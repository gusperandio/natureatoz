import { useLanguage } from "@/app/LanguageContext";
import Image from "next/image";
import { useState } from "react";
import copy from "clipboard-copy";
import styles from "./styles.module.scss";
import Link from "next/link";

// Importando os ícones
import bitcoinIcon from "../../../../public/icons/bitcoin.svg";
import paypalIcon from "../../../../public/icons/paypal.svg";
import coffeeIcon from "../../../../public/icons/coffee.svg";
import fileTypeIcon from "../../../../public/icons/file-copy.svg";
import checkIcon from "../../../../public/icons/check.svg";
import CopyButton from "../CopyButton";

interface PropsSup {
  selectedLanguage: string;
}

export default function ModalSup(props: PropsSup) {
  return (
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
              <Image src={coffeeIcon} width={42} height={28} alt="coffee" />
            </div>
            <div className={styles.notibody}>
              {props.selectedLanguage === "Pt-BR"
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
              <Image src={paypalIcon} width={42} height={28} alt="paypal" />
            </div>
            <div className={styles.notibodyPay}>
              {props.selectedLanguage === "Pt-BR" ? "Com Taxas" : "With Fees"}
            </div>
          </div>
        </a>
      </Link>
      <div className={styles.bitcoin}>
        <Image src={bitcoinIcon} width={42} height={32} alt="bitcoin" />
        <p>3DnyPiwLLrqs95FdSXgDb2TRqE86DHN2WS</p>
        <div>
          <CopyButton selectedLanguage={props.selectedLanguage} text="3DnyPiwLLrqs95FdSXgDb2TRqE86DHN2WS"/>
        </div>
      </div>
    </div>
  );
}
