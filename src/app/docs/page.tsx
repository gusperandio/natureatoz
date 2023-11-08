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
      autor: "Tomas Anunziata",
      link: "https://www.pexels.com/pt-br/foto/cataratas-do-niagara-no-canada-695214/",
      backgrounds:
        "https://images.pexels.com/photos/695214/pexels-photo-695214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      autor: "Jonathan Santos",
      link: "https://www.pexels.com/pt-br/foto/brasil-cacto-campo-interior-13331017/",
      backgrounds:
        "https://images.pexels.com/photos/13331017/pexels-photo-13331017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const auth = (
    <div id="content" className={`${styles.content} ${styles.bgTurtle}`}>
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

  const alfabetical = (
    <div id="content" className={`${styles.content} ${styles.bgBird}`}>
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
    <div id="content" className={`${styles.content} ${styles.bgWater}`}>
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
    <div id="content" className={`${styles.content} ${styles.bgBird}`}>
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
    <div id="content" className={`${styles.content} ${styles.bgOnca}`}>
      <h1 className={styles.title}>API Documentation</h1>
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
      <div className={styles.guides}>
        <h3>Guides</h3>
        <div className={styles.subGuides}>
          <div className={styles.d1}>
            <h4>Authentication</h4>
            <p>Learn how to authenticate your API requests. </p>
            {labels(auth)}
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
  };

  const [content, setContent] = useState(intro);

  const [I, setI] = useState(0);
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
      <div
        id="sidebar"
        className={styles.sidebar}
        style={{ backgroundImage: `url(${authors[I].backgrounds})` }}
      >
        <Link href={authors[I].link} legacyBehavior passHref>
          <a target="_blank" rel="noopener noreferrer">
            <p className={styles.author}>
              Foto de {authors[I].autor}{" "}
              <Image src={camera} width={12} height={12} alt="camera" />
            </p>
          </a>
        </Link>
        <br />
        <div className={styles.intro} onClick={() => alterContent(intro, 0)}>
          <button className={styles.Btn}>
            <p className={styles.text }>Introduction</p>
            <span className={styles.BG }></span>
          </button>
        </div>
        <ul className={styles.list}>
          <li onClick={() => alterContent(auth, 1)}>
            <p>/authentication</p> <span className={styles.get}>GET</span>
          </li>
          <li onClick={() => alterContent(alfabetical, 2)}>
            <p>/alphabetical</p> <span className={styles.get}>GET</span>
          </li>
          <li onClick={() => alterContent(specific, 3)}>
            <p>/specific/&#123;id&#125;</p>{" "}
            <span className={styles.get}>GET</span>
          </li>
          <li onClick={() => alterContent(pagination, 4)}>
            <p>/pagination</p> <span className={styles.get}>GET</span>
          </li>
        </ul>
      </div>

      {content}
    </div>
  );
}
