/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "./styles.module.scss";
import Plus from "../../../../public/icons/plus.svg";
import { useState } from "react";
import Loader from "../Loader";

interface RequestItems {
  title: string;
  description: number;
  image: string | null;
}
type RequestArray = Array<RequestItems>;
export function Accordion() {
  const letter = (): string[] => {
    const letras = [];

    for (let i = 65; i <= 90; i++) {
      letras.push(String.fromCharCode(i));
    }
    return letras;
  };
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN_CONFIGS}`,
    },
  };
  const [items, setItems] = useState<RequestArray>([]);
  const [letters, setLetters] = useState<string[]>(letter());
  const [loading, setLoading] = useState(false);
  const fetchLetter = async (x: string) => {
    setLoading(true);
    await fetch(`/api/v1/dictionary/${x}`, config)
      .then((res) => res.json())
      .then((response) => {
        setItems(response);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1200);
      });
  };

  // useEffect(() => {
  //   fetchKey();
  // }, []);

  return (
    <div className={styles.main}>
      <div className={styles.letters}>
        {letters.map((l, i) => (
          <button
            key={i}
            className={styles.btnletters}
            onClick={() => fetchLetter(l)}
          >
            {l}
          </button>
        ))}
      </div>
      {loading ? (
        <div>
          <br />
          <br />
          <Loader />
        </div>
      ) : (
        <div className={styles.faq_container}>
          {items.map((item, index) => (
            <details className={styles.details} key={index}>
              <summary className={styles.summary}>
                <span className={styles.faq_title}>{item.title}</span>
                <Image src={Plus} className={styles.expand_icon} alt="Plus" />
              </summary>
              <div className={styles.faq_content}>
                {item.image && (
                  <img
                    width={100}
                    height={100}
                    src={item.image ?? ""}
                    alt={item.title}
                  />
                )}
                {item.description}
              </div>
            </details>
          ))}
        </div>
      )}
    </div>
  );
}
