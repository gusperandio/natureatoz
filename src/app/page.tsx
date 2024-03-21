"use client";
import Image from "next/image";
import styles from "./styles/page.module.css";
import CardHome from "./components/CardHome";
import req from "../../public/icons/req.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./components/Loader";
import { IsProd } from "../lib/config/config";

export default function Home() {
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + "M";
    } else if (num >= 10000) {
      return (num / 1000).toFixed(1) + "K";
    } else {
      return num.toString();
    }
  };
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN_CONFIGS}`,
    },
  };

  const [loading, setLoading] = useState(true);
  const [loadingReq, setLoadingReq] = useState(true);
  const [randomData, setRandomData] = useState(0);
  const [name, setName] = useState("Orvalho");
  const [desc, setDesc] = useState(
    "Fenômeno natural que ocorre normalmente à noite ou madrugada de céu limpo, pouco teor de umidade e velocidade de vento. Formado por vapor de água que há no ar e que se condensa em gotículas de água, ao atingir a superfície fria dos corpos expostos ao ar livre."
  );

  const [imgUrl, setImgUrl] = useState(
    "https://natureatoz.com.br/images/orvalho"
  );

  const cardHome = async () => {
    try {
      fetch("/api/v1/random/image", config)
        .then((res) => res.json())
        .then((response) => {
          if (
            !response.title.includes("Plástico") ||
            !response.title.includes("IBAMA") ||
            !response.title.includes("Reciclagem")
          ) {
            setName(response.title);
            setDesc(response.description);
            setImgUrl(response.image);
          } else {
            cardHome();
          }
        });
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 350);
    }
  };

  const prints = () => {
    setLoading(true);
    setTimeout(() => {
      cardHome();
    }, 1000);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reqs = fetch(`/api/v1/requests`, config);
        const cards = fetch(`api/v1/random/image`, config);

        const [reqResult, cardResult] = await Promise.all([reqs, cards]);
        const reqData = await reqResult.json();
        const cardData = await cardResult.json();

        setRandomData(reqData.requests);
        setName(cardData.title);
        setDesc(cardData.description);
        setImgUrl(cardData.image);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
        setLoadingReq(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {}, []);

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.divBtn}>
          <button className={styles.Btn}>
            <span className={styles.leftContainer}>
              <Image src={req} width={22} height={22} alt="requistion" />
              <span className={styles.like}>Requests</span>
            </span>

            <span className={styles.likeCount}>
              {loadingReq ? <Loader /> : formatNumber(randomData)}
            </span>
          </button>
        </div>
        <CardHome
          loader={loading}
          name={name}
          desc={desc}
          imgUrl={imgUrl}
          reload={prints}
        />
      </main>
    </div>
  );
}
