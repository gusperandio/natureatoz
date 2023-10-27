"use client";
import Image from "next/image";
import style from "./styles.module.scss";
import logo from "../../../../public/logo.png";
import Link from "next/link";
export function Footer() {
   let language: string = "En-Us";
   language = localStorage.getItem("language") || "En-Us";

   const init = language === "Pt-BR" ? <p style={{fontWeight: "bold"}}>Inicio</p> : <p style={{fontWeight: "bold"}}>Home</p>;
   const cont = language === "Pt-BR" ? <p style={{fontWeight: "bold"}}>Contato</p> : <p style={{fontWeight: "bold"}}>Contact</p>;
   const about = language === "Pt-BR" ? <p style={{fontWeight: "bold"}}>Sobre</p> : <p style={{fontWeight: "bold"}}>About</p>;
   const priv = language === "Pt-BR" ? <p style={{fontWeight: "bold"}}>Privacidade</p> : <p style={{fontWeight: "bold"}}>Privacy</p>;
   const license = language === "Pt-BR" ? <p style={{fontWeight: "bold"}}>Licença</p> : <p style={{fontWeight: "bold"}}>License</p>;
   const sup = language === "Pt-BR" ? <p style={{fontWeight: "bold"}}>Apoiar</p> : <p style={{fontWeight: "bold"}}>Support Us</p>;

  return (
    <div
      className={`${style.footer} animate__animated animate__fadeIn animate__delay-1s`}
    >
      <div className={style.footerfooter}>
        {/* <div className={style.contatoBasic}>
          <button className={style.buttonEmail}>
            {email}&nbsp;gustavo.sperandio25@gmail.com
          </button>
          <br />
        </div> */}

        <div>
          <ul className={style.modalLista}>
            <li className={style.g}>
              <Link
                href={"/"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Image src={logo} alt="Nature A to Z" height={90} />
              </Link>
            </li>
            <li className={style.g}>
              <Link
                href={"/"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
               {init}
              </Link>
            </li>
            <li className={style.b}>
              <Link
                href={"/contact"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {cont}
              </Link>
            </li>
            <li className={style.g}>
              <Link
                href={"/about"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {about}
              </Link>
            </li>
            <li className={style.b}>
              <Link
                href={"/"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {priv}
              </Link>
            </li>
            <li className={style.g}>
              <Link
                href={"/"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
               {license}
              </Link>
            </li>
            <li className={style.b}>
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