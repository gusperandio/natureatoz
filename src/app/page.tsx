"use client";
import Image from "next/image";
import styles from "./styles/page.module.css";
import CardHome from "./components/CardHome";
import req from "../../public/icons/req.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./components/Loader";
import { analytics, log } from "@/lib/firebase";


interface RequestData {
  request: number;
}

export default function Home() {
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + "M";
    } else if (num >= 100000) {
      return (num / 1000).toFixed(1) + "K";
    } else {
      return num.toString();
    }
  };
  

  const [loading, setLoading] = useState(true);
  const [randomData, setRandomData] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/requests"
        );
        setRandomData(response.data.requests);
        setLoading(false); 
      } catch (error) {
        log(analytics, 'Request Home', {
          typeError: error,
        });
        setLoading(false); 
      }
    };

    fetchData();
  }, []);



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
              {loading ? (<Loader />) : formatNumber(randomData) }
            </span>
          </button>
        </div>
        <CardHome />
      </main>
    </div>
  );
}