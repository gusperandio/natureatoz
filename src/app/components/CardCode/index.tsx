import { useState } from "react";
import styles from "./styles.module.scss";
import CopyButton from "../CopyButton";
import { useLanguage } from "@/app/LanguageContext";

export default function CardCode() {
  const [activeTab, setActiveTab] = useState(1);
  const { selectedLanguage } = useLanguage();
  const handleTabChange = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };
  return (
    <div className={styles.cardCode}>
      <div className={styles.container}>
        <div className={styles.tabs}>
          <input
            type="radio"
            id="radio-1"
            name="tabs"
            checked={activeTab === 1}
            onChange={() => handleTabChange(1)}
          />
          <label className={styles.tab} htmlFor="radio-1">
            cURL
          </label>
          <input
            type="radio"
            id="radio-2"
            name="tabs"
            checked={activeTab === 2}
            onChange={() => handleTabChange(2)}
          />
          <label className={styles.tab} htmlFor="radio-2">
            JS
          </label>
          <input
            type="radio"
            id="radio-3"
            name="tabs"
            checked={activeTab === 3}
            onChange={() => handleTabChange(3)}
          />
          <label className={styles.tab} htmlFor="radio-3">
            React
          </label>
          <input
            type="radio"
            id="radio-4"
            name="tabs"
            checked={activeTab === 4}
            onChange={() => handleTabChange(4)}
          />
          <label className={styles.tab} htmlFor="radio-4">
            Python
          </label>
          <input
            type="radio"
            id="radio-5"
            name="tabs"
            checked={activeTab === 5}
            onChange={() => handleTabChange(5)}
          />
          <label className={styles.tab} htmlFor="radio-5">
            PHP
          </label>
          <input
            type="radio"
            id="radio-6"
            name="tabs"
            checked={activeTab === 6}
            onChange={() => handleTabChange(6)}
          />
          <label className={styles.tab} htmlFor="radio-6">
            C#
          </label>
          <input
            type="radio"
            id="radio-7"
            name="tabs"
            checked={activeTab === 7}
            onChange={() => handleTabChange(7)}
          />
          <label className={styles.tab} htmlFor="radio-7">
            Ruby
          </label>
          <span className={styles.glider}></span>
        </div>

        <div className={styles.copy}>
          <CopyButton selectedLanguage={selectedLanguage} text="texto" />
        </div>
      </div>
    </div>
  );
}
