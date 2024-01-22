"use client";
import { useLanguage } from "../LanguageContext";
import Loader from "../components/Loader";
import styles from "../styles/page.module.css";
import { useState, useEffect } from "react";
import Modal from '../components/Modal';
import Parallax from "../components/Parallax";
import { analytics, log } from "@/lib/firebase";


export default function Page() {
  const { selectedLanguage } = useLanguage();

  useEffect(() => {
    log(analytics, 'page_view', { page_path: '/intro' });
  }, []);

  return (
    <div>
      <Parallax selectedLanguage={selectedLanguage}/>
    </div>
  );
}
