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

  const textContent = {
    title:
      selectedLanguage == "Pt-BR" ? "Documentação API" : "API Documentation",
    textIntro:
      selectedLanguage == "Pt-BR"
        ? "Bem-vindo à documentação da API de A a Z, sua porta de entrada para explorar e interagir com uma vasta gama de informações e serviços relacionados ao meio ambiente, abrangendo desde tópicos que começam com a letra A até aqueles que terminam com a letra Z. Nossa API foi projetada para fornecer acesso fácil e flexível a dados e recursos que podem ser valiosos para pesquisadores, conservacionistas, empresas e qualquer pessoa interessada em proteger e entender o nosso planeta."
        : "Welcome to the A to Z API documentation, your gateway to exploring and interacting with a wide range of environmental-related information and services, ranging from topics starting with the letter A to those ending with the letter Z. Our API is designed to provide easy and flexible access to data and resources that can be valuable to researchers, conservationists, businesses and anyone interested in protecting and understanding our planet.",
    subTitle: selectedLanguage == "Pt-BR" ? "Iniciando" : "Starting",
    textStart:
      selectedLanguage == "Pt-BR"
        ? "Nossa API de A to Z oferece um repositório de informações valiosas que abrange tópicos que vão desde a biodiversidade até as zonas de proteção ambiental. Com recursos acessíveis via HTTP e documentação completa, estamos comprometidos em facilitar a colaboração e o acesso a dados que podem fazer a diferença na conservação de nosso planeta."
        : "Our A to Z API provides a repository of valuable information covering topics ranging from biodiversity to environmental protection zones. With resources accessible via HTTP and complete documentation, we are committed to facilitating collaboration and access to data that can make a difference in conserving our planet.",
    guides: selectedLanguage == "Pt-BR" ? "Guias" : "Guides",
    guides1: selectedLanguage == "Pt-BR" ? "Autenticação" : "Authentication",
    guides1Sub:
      selectedLanguage == "Pt-BR"
        ? "Domine as técnicas de autenticação de solicitação de API."
        : "Master API request authentication techniques.",
    guides2: selectedLanguage == "Pt-BR" ? "Aleatório" : "Random",
    guides2Sub:
      selectedLanguage == "Pt-BR"
        ? "Explore o nossa ampla API de forma aleatória"
        : "Explore our extensive API at random",
    guides3: selectedLanguage == "Pt-BR" ? "Alfabética" : "Alphabetical",
    guides3Sub:
      selectedLanguage == "Pt-BR"
        ? "Solicite todos os dados por ordem alfabética"
        : "Request all data in alphabetical order",
    guides4: selectedLanguage == "Pt-BR" ? "Específico" : "Especific",
    guides4Sub:
      selectedLanguage == "Pt-BR"
        ? "Solicite um dado específico pelo ID"
        : "Request specific data by ID",
    guides5: selectedLanguage == "Pt-BR" ? "Paginação" : "Pagination",
    guides5Sub:
      selectedLanguage == "Pt-BR"
        ? "Solicite um método de paginação com os itens disponíveis"
        : "Request a paging method with available items",
    readMore: selectedLanguage == "Pt-BR" ? "Ler mais" : "Read more",
  };

  const textAuth = {
    title: selectedLanguage === "Pt-BR" ? "Autenticação" : "Authentication",
    textIntro:
      selectedLanguage === "Pt-BR"
        ? "A autenticação de API é um processo crucial para garantir a segurança e o acesso controlado aos dados e serviços disponibilizados por uma aplicação. Um exemplo prático desse processo pode ser observado na API do NatureAtoz, que requer uma chave de autenticação para acessar suas funcionalidades."
        : "API authentication is a critical process to ensure security and controlled access to data and services provided by an application. A practical example of this process can be seen in the NatureAtoz API, which requires an authentication key to access its functionalities.",
    subTitle: selectedLanguage == "Pt-BR" ? "Iniciando" : "Starting",
    textStart:
      selectedLanguage == "Pt-BR"
        ? "Para começar a utilizar a API do NatureAtoz, o primeiro passo é solicitar uma chave de acesso. Isso pode ser feito através do URL"
        : "To begin using the NatureAtoz API, the first step is to request an access key. This can be done through the URL",
    textStart2:
      selectedLanguage == "Pt-BR"
        ? "Com a chave em mãos, você poderá incorporá-la em suas requisições à API, garantindo assim a autenticação necessária para acessar os recursos disponíveis.\n Lembrando que a chave por padrão vem com 30 dias de uso."
        : "With the key in hand, you can incorporate it into your API requests, ensuring the necessary authentication to access the available resources.",
    text1:
      selectedLanguage == "Pt-BR"
        ? "Você pode solicitar uma quantidade de dias de duração da sua chave de acesso maior que o padrão de dias, a quantidade máxima de dias para uso são de 120 dias."
        : "You can request a duration for your access key that is greater than the standard number of days; the maximum allowed duration for usage is 120 days.",
  };

  const textRandom = {
    title: selectedLanguage === "Pt-BR" ? "Aleatório" : "Random",
    textIntro:
      selectedLanguage === "Pt-BR"
        ? "Nesta página, vamos nos aprofundar alguns pontos de requisição em que você pode gerenciar as requisições sem um exato controle, onde você faz a requisição e recebe dados surpresa"
        : "On this page, we will delve deeper into some request points where you can manage requests without exact control, where you make the request and receive surprise data",
    subTitle:
      selectedLanguage === "Pt-BR" ? "Modelo aleatório" : "Random model",
    textStart:
      selectedLanguage === "Pt-BR"
        ? "O modelo aleatório contém todas as informações sobre algo específico do meio ambiente desde que informado a rota utilizando a chave de acesso."
        : "The random model contains all information about something specific in the environment as long as the route is informed using the access key.",
  };

  const textAlphabetical = {};

  const textSpecific = {};

  const textPagination = {};
  const labels = (destiny: React.JSX.Element, n: number, read: string) => {
    return (
      <label onClick={() => alterContent(destiny)}>
        {read} <Image src={arrowRight} width={18} height={18} alt="arrow" style={{marginTop : "2px"}}/>
      </label>
    );
  };

  const auth = (
    <div id="content" className={`${styles.content}`}>
      <h1 className={styles.title}>{textAuth.title}</h1>
      <p>{textAuth.textIntro}</p>
      <br />

      <h3>{textAuth.subTitle}</h3>

      <p>{textAuth.textStart} <br/>
      {textAuth.textStart2}</p>
      <CardCode tabs={false} link="https://natureatoz.com.br/v1/auth" />
      <p>{textAuth.text1}</p>
      <CardCode tabs={false} link="https://natureatoz.com.br/v1/auth?days=120" />
    </div>
  );

  const random = (
    <div id="content" className={`${styles.content}`}>
      <h1 className={styles.title}>
        {language === "Pt-BR" ? "Aleatório" : "Search Random"}
      </h1>
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

  const intro = (
    <div id="content" className={`${styles.content}`}>
      <h1 className={styles.title}>{textContent.title} <span className={styles.version}>v 1.0</span></h1>
      <p>{textContent.textIntro}</p>
      <br />

      <h3>{textContent.subTitle}</h3>

      <p>{textContent.textStart}</p>

      <CardCode tabs={false} link="https://natureatoz.com.br/v1" />
      <div className={styles.guides}>
        <h3>{textContent.guides}</h3>
        <div className={styles.subGuides}>
          <div className={styles.d1}>
            <h4>{textContent.guides1}</h4>
            <p>{textContent.guides1Sub}</p>
            {labels(auth, 1, textContent.readMore)}
          </div>
          <div className={styles.d1}>
            <h4>{textContent.guides2}</h4>
            <p>{textContent.guides2Sub}</p>
            {labels(random, 2, textContent.readMore)}
          </div>
          <div className={styles.d1}>
            <h4>{textContent.guides3}</h4>
            <p>{textContent.guides3Sub}</p>
            {labels(alfabetical, 3, textContent.readMore)}
          </div>
          <div className={styles.d1}>
            <h4>{textContent.guides4}</h4>
            <p>{textContent.guides4Sub}</p>
            {labels(specific, 4, textContent.readMore)}
          </div>
          <div className={styles.d1}>
            <h4>{textContent.guides5}</h4>
            <p>{textContent.guides5Sub}</p>
            {labels(pagination, 5, textContent.readMore)}
          </div>
        </div>
      </div>
    </div>
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adiciona um efeito de rolagem suave
    });
  };

  const alterContent = (actual: React.JSX.Element) => {
    setContent(actual);

    scrollToTop();
  };

  const [content, setContent] = useState(intro);
  const [position, setPosition] = useState("30% 20%");

  useEffect(() => {
    setContent(intro);
  }, [selectedLanguage]);

  return (
    <div className={styles.body}>
      <div
        id="sidebar"
        className={styles.sidebar}
        style={{
          backgroundPosition: `${position}`,
        }}
      >
        {/* <Link href={authors[I].link} legacyBehavior passHref>
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
        </Link> */}
        <br />
        <div className={styles.intro} onClick={() => alterContent(intro)}>
          <button role="button" className={styles.button_name}>
            {" "}
            DOCS
          </button>
        </div>
        <ul className={styles.list}>
          <li onClick={() => alterContent(auth)}>
            <p>/auth</p> <span className={styles.get}>GET</span>
          </li>
          <li onClick={() => alterContent(random)}>
            <p>/random</p> <span className={styles.get}>GET</span>
          </li>
          <li onClick={() => alterContent(alfabetical)}>
            <p>/alphabetical</p> <span className={styles.get}>GET</span>
          </li>
          <li onClick={() => alterContent(specific)}>
            <p>/specific/&#123;id&#125;</p>{" "}
            <span className={styles.get}>GET</span>
          </li>
          <li onClick={() => alterContent(pagination)}>
            <p>/pagination</p> <span className={styles.get}>GET</span>
          </li>
        </ul>
      </div>

      {content}
    </div>
  );
}
