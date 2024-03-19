"use client";
import Image from "next/image";
import styles from "./styles/page.module.css";
import CardHome from "./components/CardHome";
import req from "../../public/icons/req.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./components/Loader";
import { analytics, log } from "@/lib/firebase";
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
      'Authorization': `Bearer ${process.env.TOKEN_CONFIGS}`,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    }
  };
  const [loading, setLoading] = useState(true);
  const [loadingReq, setLoadingReq] = useState(true);
  const [randomData, setRandomData] = useState(0);
  const [name, setName] = useState("Abastecimento de água");
  const [desc, setDesc] = useState(
    "Sistema caracterizado pelo conjunto de obras e equipamentos para captar, tratar, armazenar e `distribuir água potável para o consumo humano."
  );
  const [imgUrl, setImgUrl] = useState(
    "https://i0.wp.com/alfacomp.net/wp-content/uploads/2019/04/Abastecimento-de-agua.jpg?fit=735%2C448&ssl=1"
  );
  const URI = IsProd ? process.env.URI_PROD : process.env.URI_DEV;

  const cardHome = async () => {
    try {
      fetch('/api/v1/random/image')
      .then((res) => res.json())
      .then((response) => {
        setName(response.title);
        setDesc(response.description);
        setImgUrl(response.image);
      })
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const prints = () => {
    setLoading(true);
    cardHome();
  };
  
  useEffect(() => {
    log(analytics, "page_view", { page_path: "/" });
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
        setLoadingReq(false)
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
