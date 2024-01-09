import { useState } from "react";
import styles from "./styles.module.scss";
import CopyButton from "../CopyButton";
import { useLanguage } from "@/app/LanguageContext";

interface PropsCardCode{
  code? : number
  link: string
  tabs: boolean
}

export default function CardCode(props : PropsCardCode) {
  const [activeTab, setActiveTab] = useState(1);
  const { selectedLanguage } = useLanguage();
  const handleTabChange = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };
  return (
    <div className={styles.cardCode}>
      <div className={styles.container} style={{justifyContent: `space-between`}}>
        <div className={styles.barTop}>
            <div className={styles.red}></div>
            <div className={styles.yellow}></div>
            <div className={styles.green}></div>
        </div>

        <div className={styles.copy}>
          <CopyButton selectedLanguage={selectedLanguage} text={props.link} />
        </div>
      </div>

      <div className={styles.linkparag}>

      <p style={{margin: "1rem", color: "#fff", fontFamily: "JetBrains Mono", padding: "0 0 1rem 1rem", fontSize: "14px"}} >{props.link}</p>
  
      </div>
    </div>
  );
}
