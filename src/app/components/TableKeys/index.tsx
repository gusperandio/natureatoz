import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import CopyButton from "../CopyButton";
import Loader from "../Loader";
interface RequestKey {
  _id: string;
  ID: number;
  Key: string;
  JWT: string;
  Created_At: Date;
  Expire_At?: string | null;
}
type RequestArray = Array<RequestKey>;
export function TableKeys() {
  const [table, setTable] = useState<RequestArray>([]);
  const [loading, setLoading] = useState(false);
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN_CONFIGS}`,
    },
  };

  const fetchKey = async () => {
    await fetch("/api/v1/keys", config)
      .then((res) => res.json())
      .then((response) => {
        setTable(response);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1200);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchKey();
  }, []);

  const formatDate = (date: string): string => {
    const year = date.split("-")[0];
    const month = date.split("-")[1];
    const day = date.split("-")[2].slice(0, 2);

    return `${day}/${month}/${year}`;
  };

  return (
    <>
      <h2>Tabela de Chaves</h2>
      {loading ? (
        <div>
          <br />
          <br />
          <Loader />
        </div>
      ) : (
        <table className={styles.styled_table}>
          <thead>
            <tr className={styles.tr}>
              <th className={styles.th}>ID</th>
              <th className={styles.th}>Key</th>
              <th className={styles.th}>JWT</th>
              <th className={styles.th}>Expire in</th>
              <th className={styles.th}>Create in</th>
            </tr>
          </thead>
          <tbody>
            {table.map((item, index) => (
              <tr className={styles.tr} key={index}>
                <td
                  className={styles.td}
                  style={{
                    backgroundColor: `${
                      index % 2 === 0 ? "var(--whiteCode)" : "#a9cfe2"
                    }`,
                  }}
                >
                  {item._id}
                </td>
                <td
                  className={styles.td}
                  style={{
                    backgroundColor: `${
                      index % 2 === 0 ? "var(--whiteCode)" : "#a9cfe2"
                    }`,
                  }}
                >
                  {item.Key}
                </td>
                <td
                  className={styles.td}
                  style={{
                    backgroundColor: `${
                      index % 2 === 0 ? "var(--whiteCode)" : "#a9cfe2"
                    }`,
                  }}
                >
                  <CopyButton key={index} text={item.JWT}></CopyButton>
                </td>
                <td
                  className={styles.td}
                  style={{
                    backgroundColor: `${
                      index % 2 === 0 ? "var(--whiteCode)" : "#a9cfe2"
                    }`,
                  }}
                >
                  {formatDate(item.Expire_At?.toString() ?? "")}
                </td>
                <td
                  className={styles.td}
                  style={{
                    backgroundColor: `${
                      index % 2 === 0 ? "var(--whiteCode)" : "#a9cfe2"
                    }`,
                  }}
                >
                  {formatDate(item.Created_At.toString())}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
