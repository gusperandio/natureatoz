/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import refreshIcon from "../../../../public/icons/refresh-line.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader";
import { useLanguage } from "@/app/LanguageContext";
import fileTypeIcon from "../../../../public/icons/file-copy.svg";
import copy from "clipboard-copy";
import checkIcon from "../../../../public/icons/check.svg";

export default function CardHome() {
  const { selectedLanguage } = useLanguage();
  const [isCopied, setIsCopied] = useState(false);
  const [name, setName] = useState("Teste 01");
  const [desc, setDesc] = useState(
    "Uma arara é uma ave exótica de grande porte, conhecida por suas cores vibrantes e pela capacidade de imitar sons. "
  );
  const [imgUrl, setImgUrl] = useState(
    "https://i.imgur.com/HhYfMwK.jpg"
  );
  const [loader, setLoader] = useState(true);
  const fetchData = () => {
    setLoader(true);

    setTimeout(async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/random/image?size=30", { headers: { 'Authorization': `Bearer ${process.env.TOKEN_CONFIGS}` } });
        if (response.status === 200) {
          const data = await response.json();
          setName(data.title);
          setDesc(data.description);
          setImgUrl(data.image);
          setLoader(false);
        } else {
          console.error("Erro na requisição");
        }
      } catch (error) {
        console.error("Erro na requisição", error);
      }
    }, 1000);
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
  const copyClipText =
    selectedLanguage === "Pt-BR" ? "Copiar" : "Copy to clipboard";

  const copyClip = (
    <span className={styles.tooltiptext} id="myTooltip">
      {isCopied ? (
        <p>
          {selectedLanguage === "Pt-BR" ? "Copiado" : "Copied"}{" "}
          <Image src={checkIcon} width={16} height={16} alt="check" />
        </p>
      ) : (
        copyClipText
      )}
    </span>
  );

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className={`${styles.mainCards} animate__animated animate__fadeInUp`}>
      <div className={styles.card}>
        <div className={styles.header}>
          {loader ? (
            <div>
              <Loader />
            </div>
          ) : (
            <img
              src={imgUrl}
              height={150}
              width={270}
              alt={name}
              style={{ borderRadius: "0.75rem" }}
            />
          )}
        </div>
        <div>

          <div className={styles.info} style={{ display: `${loader ? "none" : "block"}` }}>
            <p className={styles.title}>{name}</p>
            <p className={styles.desc}>{desc}</p>
          </div>
          <div className={styles.is_loading} style={{ display: `${loader ? "block" : "none"}` }}>
            <div className={styles.content}>
              <p className={styles.titleSkel}></p>
              <p className={styles.subSkel}></p>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <p className={styles.tag}>#ATOZ</p>
          <button type="button" className={styles.action} onClick={fetchData}>
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
            <p>https://natureatoz.com.br/api/v1/random</p>
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
          <pre>
            &#123;
            <br />
            <div className={styles.notP}>
              <p className={styles.key}>&quot;name&quot;</p>&nbsp;:&nbsp;
              <p className={styles.value}>&quot;{name}&quot;</p>&#44;
              <br />
            </div>
            <div className={styles.notP}>
              <p className={styles.key}>&quot;description&quot;</p>&nbsp;:&nbsp;
              <p className={styles.value}>&quot;{desc}&quot;</p>&#44;
              <br />
            </div>
            <div className={styles.notP}>
              <p className={styles.key}>&quot;image&quot;</p>&nbsp;:&nbsp;
              <p className={styles.value}>&quot;{imgUrl}&quot;</p>
              <br />
            </div>
            &#125;
          </pre>
        </div>
      </div>
    </div>
  );
}
