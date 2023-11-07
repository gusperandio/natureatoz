"use client";
import { useLanguage } from "../LanguageContext";
import Loader from "../components/Loader";
import styles from "./styles.module.scss";
import Modal from "../components/Modal";
import Parallax from "../components/Parallax";
import React, { useEffect, useState } from "react";
import CardCode from "../components/CardCode";

export default function Page() {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const sectionsRef: React.RefObject<HTMLElement>[] = [
    React.createRef(),
    React.createRef(),
  ];

  const handleMenuItemClick = (index: number) => {
    if (sectionsRef[index] && sectionsRef[index].current) {
      sectionsRef[index].current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      sectionsRef.forEach((sectionRef, index) => {
        if (sectionRef.current) {
          const sectionTop = sectionRef.current.offsetTop;
          const sectionHeight = sectionRef.current.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.body}>
      <div id="sidebar" className={styles.sidebar}>
        <h2>Menu</h2>
        <ul>
          <li>
            <button
              onClick={() => handleMenuItemClick(0)}
              className={activeSection === 0 ? styles.active : ""}
            >
              Informações da API
              
            </button>
          </li>
          <li>
            <button
              onClick={() => handleMenuItemClick(1)}
              className={activeSection === 1 ? "active" : ""}
            >
              Endpoints
            </button>
          </li>
        </ul>
      </div>

      <div id="content" className={styles.content}>
        <h1 className={styles.title}>API Documentation</h1>
        <CardCode />
        <section ref={sectionsRef[0]} id="api-info" className={styles.api_info}>
          <h2>Informações da API</h2>
          <p>Aqui você encontra informações gerais sobre a API.</p>
        </section>
        <section
          ref={sectionsRef[1]}
          id="api-endpoints"
          className={styles.api_endpoints}
        >
          <h2>Endpoints</h2>
          <p>Aqui estão os endpoints disponíveis na API e como usá-los.</p>
        </section>
      </div>

      
    </div>
  );
}
