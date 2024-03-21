"use client";
import { useLanguage } from "../LanguageContext";
import Loader from "../components/Loader";
import styles from "../styles/page.module.css";
import { useState, useEffect } from "react";
import Modal from '../components/Modal';
import Parallax from "../components/Parallax";


export default function Page() {
  const { selectedLanguage } = useLanguage();

  return (
    <div>
      <Parallax selectedLanguage={selectedLanguage}/>
    </div>
  );
}
