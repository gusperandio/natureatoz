"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import logo from "../../../../public/logo.png";
import Link from "next/link";
import { useLanguage } from "@/app/LanguageContext";
export function Footer() {

   const { selectedLanguage } = useLanguage();
   const init = selectedLanguage === "Pt-BR" ? <p style={{fontWeight: "bold"}}>Inicio</p> : <p style={{fontWeight: "bold"}}>Home</p>;
   const cont = selectedLanguage === "Pt-BR" ? <p style={{fontWeight: "bold"}}>Contato</p> : <p style={{fontWeight: "bold"}}>Contact</p>;
   const about = selectedLanguage === "Pt-BR" ? <p style={{fontWeight: "bold"}}>Sobre</p> : <p style={{fontWeight: "bold"}}>About</p>;
   const priv = selectedLanguage === "Pt-BR" ? <p style={{fontWeight: "bold"}}>Privacidade</p> : <p style={{fontWeight: "bold"}}>Privacy</p>;
   const license = selectedLanguage === "Pt-BR" ? <p style={{fontWeight: "bold"}}>Licença</p> : <p style={{fontWeight: "bold"}}>License</p>;
   const sup = selectedLanguage === "Pt-BR" ? <p style={{fontWeight: "bold"}}>Apoiar</p> : <p style={{fontWeight: "bold"}}>Support Us</p>;

  return (
    <div
      className={`${styles.footer} animate__animated animate__fadeIn animate__delay-1s`}
    >
      <div className={styles.footerfooter}>
        <div>
          <ul className={styles.modalLista}>
            <li className={styles.g}>
              <Link
                href={"/"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Image src={logo} alt="Nature A to Z" height={90} />
              </Link>
            </li>
            <li className={styles.g}>
              <Link
                href={"/"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
               {init}
              </Link>
            </li>
            <li className={styles.b}>
              <Link
                href={"/contact"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {cont}
              </Link>
            </li>
            <li className={styles.g}>
              <Link
                href={"/about"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {about}
              </Link>
            </li>
            <li className={styles.b}>
              <Link
                href={"/"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {priv}
              </Link>
            </li>
            <li className={styles.g}>
              <Link
                href={"/"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
               {license}
              </Link>
            </li>
            <li className={styles.b}>
              <Link
                href={"/"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {sup}
              </Link>
            </li>
          </ul>
        </div>

        <br />
      </div>
    </div>
  );
}