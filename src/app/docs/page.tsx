/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useLanguage } from "../LanguageContext";
import styles from "./styles.module.scss";
import React, { useEffect, useState } from "react";
import CardCode from "../components/CardCode";
import Link from "next/link";
import Image from "next/image";
import camera from "../../../public/icons/camera-fill.svg";
import arrowRight from "../../../public/icons/arrow-right.svg";

export default function Page() {
  const { selectedLanguage } = useLanguage();
  const [language, setLanguage] = useState("");
  

  const authors = [
    {
      autor: "Lucas Vinícius",
      link: "https://www.pexels.com/pt-br/foto/fotografia-animal-fotografia-de-animais-grande-enorme-5855497/",
      backgrounds:
        "https://images.pexels.com/photos/5855497/pexels-photo-5855497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      autor: "Daniel Torobekov",
      link: "https://www.pexels.com/pt-br/foto/grande-tartaruga-aquatica-nadando-no-mar-azul-5560909/",
      backgrounds:
        "https://images.pexels.com/photos/5560909/pexels-photo-5560909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      autor: "Magali Guimarães",
      link: "https://www.pexels.com/pt-br/foto/adoravel-passaro-exotico-galbulidae-sentado-em-um-galho-de-arvore-na-floresta-5583910/",
      backgrounds:
        "https://images.pexels.com/photos/5583910/pexels-photo-5583910.jpeg",
    },
    {
      autor: "David Selbert",
      link: "https://www.pexels.com/pt-br/foto/animal-bicho-biologia-borrao-7896214/",
      backgrounds:
        "https://images.pexels.com/photos/7896214/pexels-photo-7896214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      autor: "Daniel Torobekov",
      link: "https://www.pexels.com/pt-br/foto/golfinho-solitario-na-agua-azul-4886378/",
      backgrounds:
        "https://images.pexels.com/photos/4886378/pexels-photo-4886378.jpeg",
    },
    {
      autor: "Matthew M.",
      link: "https://www.pexels.com/pt-br/foto/pinheiros-verdes-1179229/",
      backgrounds:
        "https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const textContent = 
    {
      title: selectedLanguage == "Pt-BR" ? "Documentação API" : "API Documentation",
      textIntro: selectedLanguage == "Pt-BR" ? "Bem-vindo à documentação da API A to Z, sua porta de entrada para explorar e interagir com uma vasta gama de informações e serviços relacionados ao meio ambiente, abrangendo desde tópicos que começam com a letra A até aqueles que terminam com a letra Z. Nossa API foi projetada para fornecer acesso fácil e flexível a dados e recursos que podem ser valiosos para pesquisadores, conservacionistas, empresas e qualquer pessoa interessada em proteger e entender o nosso planeta." : "Welcome to the A to Z API documentation, your gateway to exploring and interacting with a wide range of environmental-related information and services, ranging from topics starting with the letter A to those ending with the letter Z. Our API is designed to provide easy and flexible access to data and resources that can be valuable to researchers, conservationists, businesses and anyone interested in protecting and understanding our planet.",
      subTitle : selectedLanguage == "Pt-BR" ? "Iniciando" : "Starting",
      textStart : selectedLanguage == "Pt-BR" ? "Nossa API de A to Z oferece um repositório de informações valiosas que abrange tópicos que vão desde a biodiversidade até as zonas de proteção ambiental. Com recursos acessíveis via HTTP e documentação completa, estamos comprometidos em facilitar a colaboração e o acesso a dados que podem fazer a diferença na conservação de nosso planeta." : "Our A to Z API provides a repository of valuable information covering topics ranging from biodiversity to environmental protection zones. With resources accessible via HTTP and complete documentation, we are committed to facilitating collaboration and access to data that can make a difference in conserving our planet.",
      guides : selectedLanguage == "Pt-BR" ? "Guias" : "Guides",
    
    }
  

  const auth = (
    <div id="content" className={`${styles.content}`}>
      <h1 className={styles.title}>Auth</h1>
      <p>
        Bem-vindo à documentação da API A to Z, sua porta de entrada para
        explorar e interagir com uma vasta gama de informações e serviços
        relacionados ao meio ambiente, abrangendo desde tópicos que começam com
        a letra A até aqueles que terminam com a letra Z. Nossa API foi
        projetada para fornecer acesso fácil e flexível a dados e recursos que
        podem ser valiosos para pesquisadores, conservacionistas, empresas e
        qualquer pessoa interessada em proteger e entender o nosso planeta.
      </p>
      <br />

      <h3>Iniciando</h3>

      <p>
        Nossa API de A to Z oferece um repositório de informações valiosas que
        abrange tópicos que vão desde a biodiversidade até as zonas de proteção
        ambiental. Com recursos acessíveis via HTTP e documentação completa,
        estamos comprometidos em facilitar a colaboração e o acesso a dados que
        podem fazer a diferença na conservação de nosso planeta.
      </p>
    </div>
  );

  const random = (
    <div id="content" className={`${styles.content}`}>
      <h1 className={styles.title}>{language === "Pt-BR" ? "Aleatório" : "Search Random"}</h1>
      <p>
        Bem-vindo à documentação da API A to Z, sua porta de entrada para
        explorar e interagir com uma vasta gama de informações e serviços
        relacionados ao meio ambiente, abrangendo desde tópicos que começam com
        a letra A até aqueles que terminam com a letra Z. Nossa API foi
        projetada para fornecer acesso fácil e flexível a dados e recursos que
        podem ser valiosos para pesquisadores, conservacionistas, empresas e
        qualquer pessoa interessada em proteger e entender o nosso planeta.
      </p>
      <br />

      <h3>Iniciando</h3>

      <p>
        Nossa API de A to Z oferece um repositório de informações valiosas que
        abrange tópicos que vão desde a biodiversidade até as zonas de proteção
        ambiental. Com recursos acessíveis via HTTP e documentação completa,
        estamos comprometidos em facilitar a colaboração e o acesso a dados que
        podem fazer a diferença na conservação de nosso planeta.
      </p>
    </div>
  );
  
  const alfabetical = (
    <div id="content" className={`${styles.content}`}>
      <h1 className={styles.title}>Alphabetical</h1>
      <p>
        Bem-vindo à documentação da API A to Z, sua porta de entrada para
        explorar e interagir com uma vasta gama de informações e serviços
        relacionados ao meio ambiente, abrangendo desde tópicos que começam com
        a letra A até aqueles que terminam com a letra Z. Nossa API foi
        projetada para fornecer acesso fácil e flexível a dados e recursos que
        podem ser valiosos para pesquisadores, conservacionistas, empresas e
        qualquer pessoa interessada em proteger e entender o nosso planeta.
      </p>
      <br />

      <h3>Iniciando</h3>

      <p>
        Nossa API de A to Z oferece um repositório de informações valiosas que
        abrange tópicos que vão desde a biodiversidade até as zonas de proteção
        ambiental. Com recursos acessíveis via HTTP e documentação completa,
        estamos comprometidos em facilitar a colaboração e o acesso a dados que
        podem fazer a diferença na conservação de nosso planeta.
      </p>
    </div>
  );

  const specific = (
    <div id="content" className={`${styles.content}`}>
      <h1 className={styles.title}>Especific</h1>
      <p>
        Bem-vindo à documentação da API A to Z, sua porta de entrada para
        explorar e interagir com uma vasta gama de informações e serviços
        relacionados ao meio ambiente, abrangendo desde tópicos que começam com
        a letra A até aqueles que terminam com a letra Z. Nossa API foi
        projetada para fornecer acesso fácil e flexível a dados e recursos que
        podem ser valiosos para pesquisadores, conservacionistas, empresas e
        qualquer pessoa interessada em proteger e entender o nosso planeta.
      </p>
      <br />

      <h3>Iniciando</h3>

      <p>
        Nossa API de A to Z oferece um repositório de informações valiosas que
        abrange tópicos que vão desde a biodiversidade até as zonas de proteção
        ambiental. Com recursos acessíveis via HTTP e documentação completa,
        estamos comprometidos em facilitar a colaboração e o acesso a dados que
        podem fazer a diferença na conservação de nosso planeta.
      </p>
    </div>
  );

  const pagination = (
    <div id="content" className={`${styles.content}`}>
      <h1 className={styles.title}>Pagination</h1>
      <p>
        Bem-vindo à documentação da API A to Z, sua porta de entrada para
        explorar e interagir com uma vasta gama de informações e serviços
        relacionados ao meio ambiente, abrangendo desde tópicos que começam com
        a letra A até aqueles que terminam com a letra Z. Nossa API foi
        projetada para fornecer acesso fácil e flexível a dados e recursos que
        podem ser valiosos para pesquisadores, conservacionistas, empresas e
        qualquer pessoa interessada em proteger e entender o nosso planeta.
      </p>
      <br />

      <h3>Iniciando</h3>

      <p>
        Nossa API de A to Z oferece um repositório de informações valiosas que
        abrange tópicos que vão desde a biodiversidade até as zonas de proteção
        ambiental. Com recursos acessíveis via HTTP e documentação completa,
        estamos comprometidos em facilitar a colaboração e o acesso a dados que
        podem fazer a diferença na conservação de nosso planeta.
      </p>
    </div>
  );

  const labels = (destiny: React.JSX.Element) => {
    return (
      <label onClick={() => alterContent(destiny, 1)}>
        Read more <Image src={arrowRight} width={12} height={12} alt="arrow" />
      </label>
    );
  };

  const intro = (
    <div id="content" className={`${styles.content}`}>
      <h1 className={styles.title}>{textContent.title}</h1>
      <p>
       {textContent.textIntro}
      </p>
      <br />

      <h3>{textContent.subTitle}</h3>

      <p>
        {textContent.textStart}
      </p>
      <div className={styles.guides}>
        <h3>{textContent.guides}</h3>
        <div className={styles.subGuides}>
          <div className={styles.d1}>
            <h4>Authentication</h4>
            <p>Learn how to authenticate your API requests. </p>
            {labels(auth)}
          </div>
          <div className={styles.d1}>
            <h4>Random</h4>
            <p>Learn how to authenticate your API requests. </p>
            {labels(random)}
          </div>
          <div className={styles.d1}>
            <h4>Alphabetical</h4>
            <p>Learn how to authenticate your API requests. </p>
            {labels(alfabetical)}
          </div>
          <div className={styles.d1}>
            <h4>Especific</h4>
            <p>Learn how to authenticate your API requests. </p>
            {labels(specific)}
          </div>
          <div className={styles.d1}>
            <h4>Pagination</h4>
            <p>Learn how to authenticate your API requests. </p>
            {labels(pagination)}
          </div>
        </div>
      </div>
    </div>
  );

  const alterContent = (actual: React.JSX.Element, n: number) => {
    setContent(actual);
    setI(n);
    if (n == 2 || n == 3) {
      let percent = n == 2 ? "50% 40%" : "50% 20%"
      setPosition(percent);
    }
  };

  const [content, setContent] = useState(intro);
  const [I, setI] = useState(0);
  const [position, setPosition] = useState("30% 20%");

  useEffect(() => {
    setContent(intro)
    setI(0);
  }, [selectedLanguage]);
  
  return (
    <div className={styles.body}>
      <div
        id="sidebar"
        className={styles.sidebar}
        style={{
          backgroundImage: `url(${authors[I].backgrounds})`,
          backgroundPosition: `${position}`,
        }}
      >
        <Link href={authors[I].link} legacyBehavior passHref>
          <a target="_blank" rel="noopener noreferrer">
            <p className={styles.author}>
              {selectedLanguage === "Pt-BR" ? "Foto de" : "Photo by"}{" "}
              {authors[I].autor}{" "}
              <Image
                src={camera}
                width={12}
                height={12}
                alt="camera"
                style={{ marginTop: "2px" }}
              />
            </p>
          </a>
        </Link>
        <br />
        <div className={styles.intro} onClick={() => alterContent(intro, 0)}>
          <button className={styles.Btn}>
            <p className={styles.text}>{selectedLanguage === "Pt-BR" ? "Introdução" : "Introduction"}</p>
            <span className={styles.BG}></span>
          </button>
        </div>
        <ul className={styles.list}>
          <li onClick={() => alterContent(auth, 1)}>
            <p>/authentication</p> <span className={styles.get}>GET</span>
          </li>
          <li onClick={() => alterContent(random, 2)}>
            <p>/random</p> <span className={styles.get}>GET</span>
          </li>
          <li onClick={() => alterContent(alfabetical, 3)}>
            <p>/alphabetical</p> <span className={styles.get}>GET</span>
          </li>
          <li onClick={() => alterContent(specific, 4)}>
            <p>/specific/&#123;id&#125;</p>{" "}
            <span className={styles.get}>GET</span>
          </li>
          <li onClick={() => alterContent(pagination, 5)}>
            <p>/pagination</p> <span className={styles.get}>GET</span>
          </li>
        </ul>
      </div>

      {content}
    </div>
  );
}
