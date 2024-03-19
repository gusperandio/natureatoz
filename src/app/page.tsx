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

  const apis = async () => {
    try {
      const reqs = axios.get(`${URI}api/v1/requests`);

      const cards = axios.get(`${URI}api/v1/random/image`, {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN_CONFIGS}`
        },
      });

      const [reqResult, cardResult] = await Promise.all([reqs, cards]);

      setRandomData(reqResult.data.requests);
      setName(cardResult.data.title);
      setDesc(cardResult.data.description);
      setImgUrl(cardResult.data.image);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingReq(false);
      setLoading(false);
    }
  };

  const cardHome = async () => {
    try {
      const response = await axios.get(`${URI}api/v1/random/image?size=30`, {
        headers: { Authorization: `Bearer ${process.env.TOKEN_CONFIGS}` },
      });
      if (response.data) {
        setName(response.data.title);
        setDesc(response.data.description);
        setImgUrl(response.data.image);
      }
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
    apis();
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
