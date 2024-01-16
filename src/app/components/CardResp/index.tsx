import { useState } from "react";
import styles from "./styles.module.scss";
import CopyButton from "../CopyButton";
import { useLanguage } from "@/app/LanguageContext";
import ReactDomServer from 'react-dom/server';

interface PropsCardCode {
  method?: "GET" | "POST" | "OPTIONS" | undefined;
  link: string;
  tabs: boolean;
}

type Types = {
  [key: string]: () => JSX.Element;
};

export default function CardResp(props: PropsCardCode) {
  const { selectedLanguage } = useLanguage();
 
  return (
    <div>
      
    </div>
  );
}
