"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import logo from "../../../../public/logo.png";
import Link from "next/link";
import LanguageSelector from "../LanguageSelector";

export function Header() {
  let language = "En-Us";

  if (typeof localStorage !== "undefined" && localStorage.getItem("language")) {
    language = localStorage.getItem("language") || "En-US";
  }
  const aa = language === "Pt-BR" ? <a>Inicio</a> : <a>Home</a>;
  const dc = language === "Pt-BR" ? <a>Documentos</a> : <a>Docs</a>;
  const sup =
    language === "Pt-BR" ? (
      <a id="textSupport" target="_blank" rel="noopener noreferrer">
        Apoiar
      </a>
    ) : (
      <a id="textSupport" target="_blank" rel="noopener noreferrer">
        Support us
      </a>
    );

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContext}>
        <Link href="/" legacyBehavior>
          <Image src={logo} alt="Nature A to Z" height={200} priority />
        </Link>
        <nav>
          <Link href="/" legacyBehavior>
            {aa}
          </Link>
          <Link href="/docs" legacyBehavior>
            {dc}
          </Link>
          <Link
            href="https://www.buymeacoffee.com/natureatoz"
            legacyBehavior
            passHref
          >
            {sup}
          </Link>
          <a style={{ backgroundColor: "#15171b" }}>
            <LanguageSelector />
          </a>
        </nav>
      </div>
    </header>
  );
}
