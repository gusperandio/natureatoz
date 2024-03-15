/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import brazil from "../../../../public/icons/brazil.svg";
import eua from "../../../../public/icons/eua.svg";
import Image from "next/image";
import { useLanguage } from '../../LanguageContext';
import { Roboto } from "next/font/google";
const font = Roboto({weight: "500", subsets: ["latin"],  display: 'swap', });

export default function LanguageSelector() {
  
  const { selectedLanguage, setLanguage } = useLanguage();
  const [img, setImg] = useState<JSX.Element | null>(null);

  useEffect(() => {
    setImage();
  }, [selectedLanguage]);

  const setImage = () => {
    setImg(
      selectedLanguage === 'Pt-BR' ? (
        <Image src={brazil} width={38} height={38} alt="flag" />
      ) : (
        <Image src={eua} width={38} height={38} alt="flag" />
      )
    );
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  return (
    <div className={styles.divSelect}>
      <label className={styles.labelSelect}>
        <select
          id="languageSelect"
          className={`${styles.selected} ${font.className}`}
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          <option value="En-US" className={`${styles.opt} ${font.className}`}>
            En-US
          </option>
          <option value="Pt-BR" className={`${styles.opt} ${font.className}`}>
            Pt-BR
          </option>
        </select>
      </label>
      <div
        style={{ cursor: "default" }}
        className="animate__animated animate__fadeIn"
      >
        {img}
      </div>
    </div>
  );
}

//export default LanguageSelector;
