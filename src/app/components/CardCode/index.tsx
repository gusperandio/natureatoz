import { useState } from "react";
import styles from "./styles.module.scss";
import CopyButton from "../CopyButton";
import { useLanguage } from "@/app/LanguageContext";

interface PropsCardCode {
  method?: "GET" | "POST" | "OPTIONS" | undefined;
  link: string;
  tabs: boolean;
}

type Types = {
  [key: string]: () => JSX.Element;
};

export default function CardCode(props: PropsCardCode) {
  const { selectedLanguage } = useLanguage();
  const buttons = ["cURL", "Javascript", "Python", "C#", "PHP", "Ruby"];
  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const link = 'https://natureatoz.com.br' + props.link;
  const methods: Types = {
    "GET": () => (
      <p className={`${styles.method} ${styles.type} ${styles.get}`}>GET •</p>
    ),
    "OPTIONS": () => (
      <p className={`${styles.method} ${styles.type} ${styles.options}`}>OPTIONS <span>•</span></p>
    ),
    undefined: () => <></>,
  }

  return (
    <div>
      <div className={styles.cardCode}>
        <div className={styles.header}>
          {props.tabs ? <div className={styles.btn}>
            {buttons.map((e, i) => {
              return (
                <button
                  key={e}
                  className={selectedButton === i ? styles.selectedBtn : ""}
                  onClick={() => setSelectedButton(i)}
                >
                  {e}
                </button>
              );
            })}
          </div> : <div></div>}
          <div className={styles.copy}>
            <CopyButton selectedLanguage={selectedLanguage} text={link} />
          </div>
        </div>


        <div className={styles.method}>
          {methods[props.method ?? "undefined"]()}
          <p className={styles.urlAPI}>{props.link}</p>
        </div>

        {/* {props.tabs ? <div className={styles.codeContent}>
            
          curl -i -X OPTIONS {link} \
            
        </div> : <></> } */}

        <div className={styles.codeContent}>

          {/* <code>curl -i -X OPTIONS {link} \</code> */}
          {/* <code>
            <span className={styles.purple}>string</span> <span className={styles.white}>url</span> = <span className={styles.green}>&#34;{link}&#34;</span>;<br />
            <span className={styles.blue}>using var</span> client = <span className={styles.blue}>new</span>  <span className={styles.purple}>HttpClient</span>();<br />
            <span className={styles.purple}>var</span> <span className={styles.white}>request</span> = <span className={styles.blue}>new</span> <span className={styles.purple}>HttpRequestMessage</span>(HttpMethod.Options, <span className={styles.blue}>url</span>);<br />
            <span className={styles.purple}>var</span> response = <span className={styles.red}>await</span> client.<span className={styles.purple}>SendAsync</span>(request);<br />
          </code>  */}

        </div>
      </div>
    </div>
  );
}
