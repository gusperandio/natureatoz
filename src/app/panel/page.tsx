/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import styles from "./styles.module.scss";
import { useState } from "react";
import { FormLogin } from "../components/FormLogin";
import { Accordion } from "../components/Accordion";
import { TableKeys } from "../components/TableKeys";
import toast, { Toaster } from "react-hot-toast";
import { useLanguage } from "../LanguageContext";

interface RequestKey {
  ID: number;
  Key: string;
  JWT: string;
  Created_At: Date;
  Expire_At?: string | null;
}
type RequestArray = Array<RequestKey>;
export default function Page() {
  const { selectedLanguage } = useLanguage();
  const [table, setTable] = useState<RequestArray>([]);
  const [isAuth, setIsAuth] = useState(false);
  const [isVisibleKeys, setIsVisibleKeys] = useState(false);
  const [isVisibleItems, setIsVisibleItems] = useState(false);
  const notify = () =>
    toast.error(
      selectedLanguage === "Pt-BR" ? "Não foi possível logar" : "GET OUT!"
    );
  // useEffect(() => {

  // }, []);

  const toggleVisibilityKeys = () => {
    setIsVisibleKeys(false);
    setIsVisibleItems(true);
  };

  const toggleVisibilityItems = () => {
    setIsVisibleItems(false);
    setIsVisibleKeys(true);
  };

  const logar = (formData: { email: string; password: string }) => {
    if (
      formData.email === process.env.EMAIL_LOGIN &&
      formData.password === process.env.KEY_TO_POST
    ) {
      setIsAuth(true);
      return;
    }
    
    notify();
  };

  const keyIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M17 14H12.6586C11.8349 16.3304 9.61244 18 7 18C3.68629 18 1 15.3137 1 12C1 8.68629 3.68629 6 7 6C9.61244 6 11.8349 7.66962 12.6586 10H23V14H21V18H17V14ZM7 14C8.10457 14 9 13.1046 9 12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12C5 13.1046 5.89543 14 7 14Z"></path>
    </svg>
  );

  const itemsIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M2 18H9V20H2V18ZM2 11H11V13H2V11ZM2 4H22V6H2V4ZM20.674 13.0251L21.8301 12.634L22.8301 14.366L21.914 15.1711C21.9704 15.4386 22 15.7158 22 16C22 16.2842 21.9704 16.5614 21.914 16.8289L22.8301 17.634L21.8301 19.366L20.674 18.9749C20.2635 19.3441 19.7763 19.6295 19.2391 19.8044L19 21H17L16.7609 19.8044C16.2237 19.6295 15.7365 19.3441 15.326 18.9749L14.1699 19.366L13.1699 17.634L14.086 16.8289C14.0296 16.5614 14 16.2842 14 16C14 15.7158 14.0296 15.4386 14.086 15.1711L13.1699 14.366L14.1699 12.634L15.326 13.0251C15.7365 12.6559 16.2237 12.3705 16.7609 12.1956L17 11H19L19.2391 12.1956C19.7763 12.3705 20.2635 12.6559 20.674 13.0251ZM18 18C19.1046 18 20 17.1046 20 16C20 14.8954 19.1046 14 18 14C16.8954 14 16 14.8954 16 16C16 17.1046 16.8954 18 18 18Z"></path>
    </svg>
  );

  return (
    <div className={styles.main}>
      {/* <div className={styles.radio_inputs}>
        <label className={styles.radio}>
          <input type="radio" name="radio" checked />
          <span className={styles.name}>HTML</span>
        </label>
        <label className={styles.radio}>
          <input type="radio" name="radio" />
          <span className={styles.name}>React</span>
        </label>
        <label className={styles.radio}>
          <input type="radio" name="radio" />
          <span className={styles.name}>Vue</span>
        </label>
      </div> */}

      {!isAuth ? <FormLogin login={logar} /> : null}

      {isAuth ? (
        <>
          <div className={styles.buttons}>
            <button className={styles.Btn} onClick={toggleVisibilityKeys}>
              Items
              {itemsIcon}
            </button>

            <button className={styles.Btn} onClick={toggleVisibilityItems}>
              Keys
              {keyIcon}
            </button>
          </div>
          <div className={styles.content}>
            {isVisibleKeys && <TableKeys />}
            {isVisibleItems && <Accordion />}
          </div>
        </>
      ) : null}
      <Toaster />
    </div>
  );
}
