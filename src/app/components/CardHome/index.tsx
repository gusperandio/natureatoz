/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import refreshIcon from "../../../../public/icons/refresh-line.svg";
import { useEffect, useState } from "react";
import Loader from "../Loader";
import { useLanguage } from "@/app/LanguageContext";
import fileTypeIcon from "../../../../public/icons/file-copy.svg";
import copy from "clipboard-copy";
import checkIcon from "../../../../public/icons/check.svg";
import { JetBrains_Mono, Oxygen, Roboto_Mono } from "next/font/google";

interface PropsCardHome {
  name?: string;
  desc?: string;
  imgUrl?: string;
  loader: boolean;
  reload: () => void;
}

const font = Oxygen({ weight: "400", subsets: ["latin"] });
const fontJson = Roboto_Mono({ weight: "100", subsets: ["latin"] });
export default function CardHome(props: PropsCardHome) {
  const { selectedLanguage } = useLanguage();
  const [isCopied, setIsCopied] = useState(false);
  const handleButtonClick = () => {
    props.reload();
  };

  const handleCopyToClipboard = () => {
    let textToCopy = "https://natureatoz.com.br/api/v1/random/image";

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

  const copyClip = (
    <span className={styles.tooltiptext} id="myTooltip">
      {isCopied ? (
        <p>
          {selectedLanguage === "Pt-BR" ? "Copiado" : "Copied"}{" "}
          <Image src={checkIcon} width={16} height={16} alt="check" />
        </p>
      ) : selectedLanguage === "Pt-BR" ? (
        "Copiar"
      ) : (
        "Copy to clipboard"
      )}
    </span>
  );

  return (
    <div
      className={`${styles.mainCards} ${font.className} animate__animated animate__fadeInUp`}
    >
      <div className={styles.card}>
        <div className={styles.header}>
          {props.loader ? (
            <div>
              <Loader />
            </div>
          ) : (
            <img
              src={props.imgUrl}
              height={150}
              width={270}
              alt={props.name}
              style={{ borderRadius: "0.75rem" }}
            />
          )}
        </div>
        <div>
          <div
            className={styles.info}
            style={{ display: `${props.loader ? "none" : "block"}` }}
          >
            <p className={styles.title}>{props.name}</p>
            <p className={styles.desc}>
              {props.desc && props.desc.length > 90
                ? `${props.desc.substring(0, 90)}...`
                : props.desc}
            </p>
          </div>
          <div
            className={styles.is_loading}
            style={{ display: `${props.loader ? "block" : "none"}` }}
          >
            <div className={styles.content}>
              <p className={styles.titleSkel}></p>
              <p className={styles.subSkel}></p>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <p className={styles.tag}>#ATOZ</p>
          <button
            type="button"
            className={styles.action}
            onClick={handleButtonClick}
          >
            <Image
              src={refreshIcon}
              width={14}
              height={14}
              alt="refresh"
              style={{ marginRight: "4px" }}
            />{" "}
            {selectedLanguage == "Pt-BR" ? <p>BUSCAR</p> : <p>FETCH</p>}
          </button>
        </div>
      </div>
      <div className={styles.secondColum}>
        <div className={styles.input_group}>
          <div className={styles.input}>
            <p>https://natureatoz.com.br/api/v1/random/image</p>
          </div>
          <button className={styles.button_submit} type="button">
            <div className={styles.copy} onClick={handleCopyToClipboard}>
              {copyClip}
              <Image
                src={fileTypeIcon}
                width={18}
                height={18}
                alt="bitcoin"
                onClick={handleCopyToClipboard}
              />
            </div>
          </button>
        </div>

        <div className={styles.cardJson}>
          <div className={styles.tools}>
            <div className={styles.circle}>
              <span className={`${styles.red} ${styles.box}`}></span>
            </div>
            <div className={`${styles.circle}`}>
              <span className={`${styles.yellow} ${styles.box}`}></span>
            </div>
            <div className={styles.circle}>
              <span className={`${styles.green} ${styles.box}`}></span>
            </div>
          </div>
          <div className={styles.card__content}>
            {props.loader ? (
              <div style={{ height: "100px" }}>
                <Loader />
              </div>
            ) : (
              <div className={fontJson.className}>
                <span style={{ color: "dodgerblue" }}>&#123;</span>
                <div className={styles.notP}>
                  <b className={styles.key}>&quot;name&quot;</b>&nbsp;:&nbsp;
                  <b className={styles.value}>&quot;{props.name}&quot;</b>
                  &#44;
                </div>
                <div className={styles.notP}>
                  <b className={styles.key}>&quot;description&quot;</b>
                  &nbsp;:&nbsp;
                  <b className={styles.value}>&quot;{props.desc}&quot;</b>
                  &#44;
                </div>
                <div className={styles.notP}>
                  <b className={styles.key}>&quot;image&quot;</b>&nbsp;:&nbsp;
                  <b className={styles.value}>&quot;{props.imgUrl}&quot;</b>
                </div>
                <span style={{ color: "dodgerblue" }}>&#125;</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
