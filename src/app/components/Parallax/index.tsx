import { useState, useEffect } from "react";
import { FC } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { Roboto, Oxygen } from "next/font/google";
const fontOxygen = Oxygen({weight: "400", subsets: ['latin'], display : "swap"});
const font = Roboto({weight: "400", subsets: ['latin'], display : "swap"});

interface PropsParallax {
  selectedLanguage: string;
}

export default function Parallax(props: PropsParallax) {
  const scrollToIntroduction = () => {
    const introductionSection = document.getElementById('introduction-section');
    if (introductionSection) {
      introductionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [scrollAnimation, setScrollPosition] = useState(false);
  const [scrollAnimation1, setScrollPosition1] = useState(false);
  const [scrollAnimation2, setScrollPosition2] = useState(false);
  const [scrollAnimation3, setScrollPosition3] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    
    if (position > 200)
      setScrollPosition(true)

    if (position > 360)
      setScrollPosition1(true)

    if (position > 470)
      setScrollPosition2(true)

    if (position > 600)
      setScrollPosition3(true)
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div className={`${styles.main}`}>
      <section
        className={`${styles.banner}`}
      >
        <div className={`${styles.divButtons} ${font.className}`}>
          <button onClick={scrollToIntroduction}>{props.selectedLanguage == "Pt-BR"
            ? "Introdução"
            : "Introduction"}</button>
          <Link href="/docs" legacyBehavior>
            <button>{props.selectedLanguage == "Pt-BR"
              ? "Iniciar"
              : "Get Started"}</button>
          </Link>
        </div>
      </section>
      <section className={`${styles.container} ${fontOxygen.className}`} id="introduction-section">
        <div>
          <h2 style={{ opacity: scrollAnimation ? 1 : 0, transition: 'opacity 0.5s ease-in-out', }}>
            {props.selectedLanguage == "Pt-BR"
              ? "Introdução"
              : "Introduction"}
          </h2>
          <p className={`${styles.paragraph}`} style={{ opacity: scrollAnimation1 ? 1 : 0, transition: 'opacity 0.5s ease-in-out', }}>
            {props.selectedLanguage == "Pt-BR"
              ? "A API Natureza de A a Z é uma ferramenta inovadora e abrangente, projetada para oferecer acesso fácil e conveniente a informações e imagens relacionadas ao meio ambiente. Seguindo uma abordagem alfabética que percorre de A a Z, esta API se assemelha a um dicionário ambiental, possibilitando que desenvolvedores e entusiastas do meio ambiente obtenham dados precisos e imagens abrangentes sobre diversos temas ambientais, tudo apresentado em um formato acessível."
              : "The Nature A to Z API is an innovative and comprehensive tool designed to provide easy and convenient access to information and images related to the environment. Following an alphabetical approach from A to Z, this API resembles an environmental dictionary, allowing developers and environmental enthusiasts to obtain accurate data and comprehensive images on various environmental topics, all presented in an accessible format."}
          </p>
          <p className={styles.paragraph} style={{ opacity: scrollAnimation2 ? 1 : 0, transition: 'opacity 0.5s ease-in-out', }}>
            {props.selectedLanguage == "Pt-BR"
              ? "Com a API Natureza de A a Z, é possível realizar simples requisições HTTP para descobrir informações sobre vida selvagem, ecossistemas, práticas de conservação e muito mais, começando pela letra 'A' e explorando até a letra 'Z'. Seja seu interesse voltado para a aprendizagem sobre a floresta amazônica, biodiversidade marinha, energias renováveis ou zonas de recifes de coral, esta API serve como sua fonte de referência completa. Esse recurso valioso oferece dados precisos e atualizados, tornando-se uma ferramenta essencial não apenas para educadores e pesquisadores, mas para qualquer pessoa que busque aprofundar sua compreensão do meio ambiente."
              : "With the Nature A to Z API, you can make simple HTTP requests to discover information about wildlife, ecosystems, conservation practices, and more, starting with the letter 'A' and exploring all the way to the letter 'Z'. Whether your interest lies in learning about the Amazon rainforest, marine biodiversity, renewable energies, or coral reef zones, this API serves as your complete reference source. This valuable resource offers precise and up-to-date data, becoming an essential tool not only for educators and researchers but for anyone looking to deepen their understanding of the environment."}
          </p>
          <p className={styles.paragraph} style={{ opacity: scrollAnimation3 ? 1 : 0, transition: 'opacity 0.5s ease-in-out', }}>
            {props.selectedLanguage == "Pt-BR"
              ? "Explore a API Natureza de A a Z e eleve sua busca por informações ambientais a um novo patamar, aproveitando seus recursos abrangentes. Seja qual for seu interesse no mundo natural, esta API é a chave para descobertas fascinantes, enriquecendo seu conhecimento sobre o planeta e sua incrível diversidade de vida e paisagens."
              : "Explore the Nature A to Z API and take your quest for environmental information to a new level by leveraging its comprehensive resources. Whatever your interest in the natural world, this API is the key to fascinating discoveries, enriching your knowledge about the planet and its incredible diversity of life and landscapes."}
          </p>
        </div>
      </section>
    </div>
  );
}
