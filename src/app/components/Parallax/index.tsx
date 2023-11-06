import { useState, useEffect } from "react";
import { FC } from "react";
import styles from "./styles.module.scss";

interface PropsParallax {
  selectedLanguage: string;
}

export default function Parallax(props: PropsParallax) {
  return (
    <div className={styles.main}>
      <section
        style={{
          backgroundSize: `${100}%`,
        }}
        className={`${styles.banner}`}
      >
        <h2>Documents</h2>
        <div className={styles.divButtons}>
          <button>{props.selectedLanguage == "Pt-BR"
            ? "Introdução"
            : "Introduction"}</button>
          <button>{props.selectedLanguage == "Pt-BR"
            ? "Iniciar"
            : "Get Started"}</button>
        </div>
      </section>
      <section className={`${styles.container}`}>
        <h2>
          {props.selectedLanguage == "Pt-BR"
            ? "Introdução"
            : "Introduction"}
        </h2>
        <p className={styles.p}>
          {props.selectedLanguage == "Pt-BR"
            ? "A Nature A to Z API é uma ferramenta inovadora e abrangente projetada para fornecer acesso fácil e prático a informações e imagens relacionadas ao meio ambiente, seguindo uma abordagem alfabética que abrange todas as letras de A a Z. Semelhante a um dicionário do meio ambiente, essa API permite que os desenvolvedores e entusiastas do meio ambiente obtenham dados precisos e imagens relacionadas a uma ampla variedade de tópicos ambientais, tudo em um formato conveniente e de fácil acesso."
            : "The Nature A to Z API is an innovative and comprehensive tool designed to provide easy and convenient access to information and images related to the environment, following an alphabetical approach that spans from A to Z. Similar to an environmental dictionary, this API enables developers and environmental enthusiasts to obtain accurate data and images related to a wide variety of environmental topics, all in a convenient and accessible format"}
        </p>
        <p className={styles.p}>
          {props.selectedLanguage == "Pt-BR"
            ? "Com a Nature A to Z API, você pode realizar requisições HTTP simples para descobrir informações sobre a vida selvagem, ecossistemas, práticas de conservação, e muito mais, começando com a letra A e explorando até a letra Z. Se você está interessado em aprender sobre a Amazônia, biodiversidade marinha, energias renováveis, ou zonas de recifes de coral, esta API é a sua fonte de referência completa. Este recurso valioso oferece dados precisos e atualizados, tornando-se uma ferramenta essencial para educadores, pesquisadores, e todos os que desejam aprofundar seus conhecimentos sobre o meio ambiente."
            : "With the Nature A to Z API, you can make simple HTTP requests to discover information about wildlife, ecosystems, conservation practices, and more, starting with the letter 'A' and exploring all the way to the letter 'Z'. Whether you're interested in learning about the Amazon rainforest, marine biodiversity, renewable energies, or coral reef zones, this API serves as your comprehensive reference source. This valuable resource offers precise and up-to-date data, making it an essential tool for educators, researchers, and anyone looking to deepen their understanding of the environment."}
        </p>
        <p className={styles.p}>
          {props.selectedLanguage == "Pt-BR"
            ? "Explore a Nature A to Z API e leve sua busca por informações ambientais a um novo nível, aproveitando os recursos abrangentes que ela tem a oferecer. Seja qual for seu interesse no mundo natural, esta API é a porta de entrada para descobertas fascinantes, enriquecendo seu conhecimento sobre o planeta e sua incrível diversidade de vida e paisagens."
            : "Explore the Nature A to Z API and take your quest for environmental information to a new level by leveraging its extensive resources. Whatever your interest in the natural world, this API is the gateway to fascinating discoveries, enriching your knowledge about the planet and its incredible diversity of life and landscapes."}
        </p>
      </section>
    </div>
  );
}
