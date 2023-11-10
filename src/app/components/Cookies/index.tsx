/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useLanguage } from "@/app/LanguageContext";
import CookiesLibrary from "js-cookie";
type DeviceInfo = {
  userAgent: string;
  screenWidth: number;
  screenHeight: number;
};

export default function Cookies() {
  const cookie = CookiesLibrary;
  const { selectedLanguage } = useLanguage();
  const [disp, setDisp] = useState("none");
  const [anime, setAnime] = useState("animate__zoomInUp");
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);
 
  const saveLocation = () =>{
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          cookie.set("user_position", `${latitude} ${longitude}`, {expires: 5})
        },
        (error) => {
          cookie.set("user_position", `API Geo Denied`, {expires: 5})
        }
      );
    } else {
      cookie.set("user_position", `API Geo Denied`, {expires: 5})
    }
  }

  const getInfo = () => {
    const info = {
      userAgent: window.navigator.userAgent,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
    };

    setDeviceInfo(info);
    cookie.set('deviceInfo', JSON.stringify(deviceInfo), { expires: 5 });
  };

  
  const accept = () => {
    cookie.set('closed', "true", {expires : 5})
    setAnime("animate__zoomOutDown");
    setTimeout(() => {
      setDisp("none");
    }, 1000);
    saveLocation()
    getInfo()
  };
  
  const decline = () => {
    cookie.set('closed', "true", {expires : 5})
    setAnime("animate__zoomOutDown");
    setTimeout(() => {
      setDisp("none");
    }, 1000);
  };
  
  useEffect(() => {
    if (!cookie.get('closed')) {
      setDisp("block");
    }
  }, []);

  return (
    <div
      className={`${styles.cookie_card} animate__animated ${anime}`}
      style={{ display: `${disp}` }}
    >
      <span className={styles.title}>
        🍪 {selectedLanguage === "Pt-BR" ? "Aviso de cookies" : "Cookie Notice"}
      </span>
      <p className={styles.description}>
        {selectedLanguage === "Pt-BR"
          ? "Utilizamos cookies para garantir que lhe proporcionamos a melhor experiência no nosso site."
          : "We use cookies to ensure that we give you the best experience on our website."}
        <a href="#">
          {" "}
          {selectedLanguage === "Pt-BR"
            ? "Leia as políticas de cookies"
            : "Read cookies policies"}
        </a>
        .{" "}
      </p>
      <div className={styles.actions}>
        <button className={styles.decline} onClick={() => decline()}>
        {selectedLanguage === "Pt-BR" ? "Rejeitar" : "Decline" }
        </button>
        <button className={styles.accept} onClick={() => accept()}>
        {selectedLanguage === "Pt-BR" ? "Aceitar" : "Accept" }
        </button>
      </div>
    </div>
  );
}

