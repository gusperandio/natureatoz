"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import refreshIcon from "../../../../public/icons/refresh-line.svg";
import { useState } from "react";
import axios from "axios";
import Loader from "../Loader";

export default function CardHome() {
  let language: string = "En-Us";
  language = localStorage.getItem("language") || "En-Us";
  const [name, setName] = useState("Teste 01");
  const [desc, setDesc] = useState(
    "Uma arara é uma ave exótica de grande porte, conhecida por suas cores vibrantes e pela capacidade de imitar sons. "
  );
  const [imgUrl, setImgUrl] = useState(
    "https://images.dog.ceo/breeds/spaniel-welsh/n02102177_1980.jpg"
  );
  const [loader, setLoader] = useState(false);
  const fetchData = () => {
    setLoader(true);

    setTimeout(async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/hello"
        );
        if (response.status === 200) {
          const data = response.data;
          setName(data.name);
          setDesc(data.desc);
          setImgUrl(data.img);
          setLoader(false);
        } else {
          console.error("Erro na requisição");
        }
      } catch (error) {
        console.error("Erro na requisição", error);
      }
    }, 2000);
  };

  const first = "{";
  const second = "}";
  return (
    <div className={styles.mainCards}>
      <div className={styles.card}>
        <div className={styles.header}>
          {loader ? (
            <div style={{marginLeft: "2rem"}}>
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
        <div className={styles.info}>
          <p className={styles.title}>{name}</p>
          <p className={styles.desc}>{desc}</p>
        </div>
        <div className={styles.footer}>
          <p className={styles.tag}>#ATOZ </p>
          <button type="button" className={styles.action} onClick={fetchData}>
            <Image
              src={refreshIcon}
              width={14}
              height={14}
              alt="refresh"
              style={{ marginRight: "4px" }}
            />{" "}
            {language == "Pt-BR" ? <p>BUSCAR</p> : <p>FETCH</p>}
          </button>
        </div>
      </div>

      <div className={styles.cardJson}>
        <pre>
          {first}
          <br />
          <div className={styles.notP}>
            <p className={styles.key}>&quot;name&quot;</p>&nbsp;:&nbsp;
            <p className={styles.value}>&quot;{name}&quot;</p>
            <br />
          </div>
          <div className={styles.notP}>
            <p className={styles.key}>&quot;desc&quot;</p>&nbsp;:&nbsp;
            <p className={styles.value}>&quot;{desc}&quot;</p>
            <br />
          </div>
          <div className={styles.notP}>
            <p className={styles.key}>&quot;img&quot;</p>&nbsp;:&nbsp;
            <p className={styles.value}>&quot;{imgUrl}&quot;</p>
            <br />
          </div>
          <br />
          {second}
        </pre>
      </div>
    </div>
  );
}
