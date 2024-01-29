/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import CopyButton from "../components/CopyButton";
import { IsProd } from "@/lib/config/conifg";

interface RequestKey {
  ID: number;
  Key: string;
  JWT: string;
  Created_At: Date;
  Expire_At?: string | null;
}
type RequestArray = Array<RequestKey>;
export default function Page() {
  const URI = IsProd ? process.env.URI_PROD : process.env.URI_DEV;
  const [table, setTable] = useState<RequestArray>([]);
    useEffect(() => {
      getKeys();
  }, []);

  const router = useRouter()
  
  async function getKeys() {
    try {
      let word = prompt("Secret Word:", "");
      if (word !== process.env.KEY_TO_POST && table.length > 0 || !word) {
        router.push("/");
      }

      if (word) {
        const response = await axios.get(`${URI}api/v1/keys`, {
          headers: {
            'keynature': word,
          },
        });

        setTable(response.data);
      }
    } catch (e) {
      console.error('Erro na requisição:', e);
    }
  }

  const eye = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(34, 34, 34, 1);"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path></svg>)

  const openAlertJWT = (e: string) => {
    alert(e);
  }

  return (
    <div className={styles.main}>
      <h2>Tabela de Chaves</h2>
      <table className={styles.styled_table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}>ID</th>
            <th className={styles.th}>Key</th>
            <th className={styles.th}>JWT</th>
            <th className={styles.th}>Expire</th>
            <th className={styles.th}>Create in</th>
          </tr>
        </thead>
        <tbody>
          {table.map((item, index) => (
            <tr className={styles.tr} key={index}>
              <td className={styles.td} style={{ backgroundColor: `${index % 2 === 0 ? 'var(--whiteCode)' : '#a9cfe2'}` }}>{item.ID}</td>
              <td className={styles.td} style={{ backgroundColor: `${index % 2 === 0 ? 'var(--whiteCode)' : '#a9cfe2'}` }}>{item.Key}</td>
              <td className={styles.td} style={{ backgroundColor: `${index % 2 === 0 ? 'var(--whiteCode)' : '#a9cfe2'}` }}><CopyButton key={index} text={item.JWT}></CopyButton></td>
              <td className={styles.td} style={{ backgroundColor: `${index % 2 === 0 ? 'var(--whiteCode)' : '#a9cfe2'}` }}>{item.Expire_At}</td>
              <td className={styles.td} style={{ backgroundColor: `${index % 2 === 0 ? 'var(--whiteCode)' : '#a9cfe2'}` }}>{item.Created_At.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
