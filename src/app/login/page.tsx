"use client";

import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import { redirect } from 'next/navigation'
import axios from "axios";

interface RequestKey {
  ID: number;
  Key: string;
  Created_At: Date;
  Expire_At?: string | null;
}
type RequestArray = Array<RequestKey>;
export default function Page() {
  const [table, setTable] = useState<RequestArray>([]);
  useEffect(() => {
    getKeys();
  }, []);

  async function getKeys() {

    try {
      let word = prompt("Secret Word:", "");
      if(word !==  process.env.KEY_TO_POST){
        redirect('/');
      }

      if (word) {

        const response = await axios.get("http://localhost:3000/api/v1/keys", {
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



  return (
    <div className={styles.main}>
      <h2>Tabela de Chaves</h2>
      <table className={styles.styled_table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}>ID</th>
            <th className={styles.th}>Key</th>
            <th className={styles.th}>Expire</th>
            <th className={styles.th}>Create in</th>
          </tr>
        </thead>
        <tbody>
          {table.map((item, index) => (
            <tr className={styles.tr} key={index}>
              <td className={styles.td} style={{backgroundColor : `${index % 2 === 0 ? 'var(--whiteCode)' : '#a9cfe2'}`}}>{item.ID}</td>
              <td className={styles.td} style={{backgroundColor : `${index % 2 === 0 ? 'var(--whiteCode)' : '#a9cfe2'}`}}>{item.Key}</td>
              <td className={styles.td} style={{backgroundColor : `${index % 2 === 0 ? 'var(--whiteCode)' : '#a9cfe2'}`}}>{item.Expire_At}</td>
              <td className={styles.td} style={{backgroundColor : `${index % 2 === 0 ? 'var(--whiteCode)' : '#a9cfe2'}`}}>{item.Created_At.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
