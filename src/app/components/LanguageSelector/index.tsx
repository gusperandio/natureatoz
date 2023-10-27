import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import brazil from "../../../../public/icons/brazil.svg";
import eua from "../../../../public/icons/eua.svg";
import Image from "next/image";

export default function LanguageSelector(){
  const language: string = localStorage.getItem("language") || "En-Us";
  const [selected, setSelected] = useState(language);

  const img =
    selected === "Pt-BR" ? (
      <Image src={brazil} width={38} height={38} alt="flag" />
    ) : (
      <Image src={eua} width={38} height={38} alt="flag" />
    );

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newLanguage = e.target.value;
      localStorage.setItem("language", newLanguage);
      window.location.reload();
    };


  return (
    <div className={styles.divSelect}>
      <label className={styles.labelSelect}>
        <select
          id="languageSelect"
          className={styles.selected}
          value={selected}
          onChange={handleLanguageChange}
        >
          <option value="En-US" className={styles.opt}>
            En-US
          </option>
          <option value="Pt-BR" className={styles.opt}>
            Pt-BR
          </option>
        </select>
      </label>
      <div style={{cursor: 'default'}} className="animate__animated animate__fadeIn">{img}</div>
    </div>
  );
};

//export default LanguageSelector;
