import Image from "next/image";
import styles from "./styles.module.scss";
import logo from "../../../../public/logo.png";
import Link from "next/link";
import LanguageSelector from "../LanguageSelector";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContext}>
        <Link href="/" legacyBehavior>
            <Image src={logo} alt="Nature A to Z" height={200} priority />
        </Link>
        <nav>
          <Link href="/" legacyBehavior>
            <a>Inicio</a>
          </Link>
          <Link href="/docs" legacyBehavior>
            <a>Documentos</a>
          </Link>
          <Link href="https://www.buymeacoffee.com/natureatoz" legacyBehavior passHref>
            <a id="textSupport" target="_blank" rel="noopener noreferrer">Apoiar</a>
          </Link>
          <LanguageSelector />
        </nav>
      </div>
    </header>
  );
}
