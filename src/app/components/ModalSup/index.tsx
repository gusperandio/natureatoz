import { useLanguage } from "@/app/LanguageContext";
import Image from "next/image";
import { useState } from "react";
import bitcoin from "../../../../public/icons/bitcoin.svg";
import paypal from "../../../../public/icons/paypal.svg";
import coffee from "../../../../public/icons/coffee.svg";
import filetype from "../../../../public/icons/file-copy.svg";
import check from "../../../../public/icons/check-line.svg";
import check2 from "../../../../public/icons/check.svg";
import codeQR from "../../../../public/qrCode.png";
import copy from "clipboard-copy";
import styles from './styles.module.scss'
import Link from "next/link";

interface PropsSup{
  selectedLanguage: string
}

export default function ModalSup(props : PropsSup){

  const [isCopied, setIsCopied] = useState(false);
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
  const copyClip =
  props.selectedLanguage === "Pt-BR" ? (
    <span className={styles.tooltiptext} id="myTooltip">
      {isCopied ? (
        <p>
          {"Copiado "}{" "}
          <Image src={check2} width={16} height={16} alt="check" />
        </p>
      ) : (
        "Copiar"
      )}
    </span>
  ) : (
    <span className={styles.tooltiptext} id="myTooltip">
      {isCopied ? (
        <p>
          {"Copied "}
          <Image src={check2} width={16} height={16} alt="check" />
        </p>
      ) : (
        "Copy to clipboard"
      )}
    </span>
  );
  return(
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
                    <Image src={paypal} width={42} height={28} alt="paypal" />
                  </div>
                  <div className={styles.notibodyPay}>
                    {props.selectedLanguage === "Pt-BR" ? "Com Taxas" : "With Fees"}
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
  )
}