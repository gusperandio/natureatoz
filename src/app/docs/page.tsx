/* eslint-disable @next/next/no-img-element */
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
import CardHome from "../components/CardHome";
import BackIcon from '../../../public/icons/arrow-left.svg'
import { analytics, log } from "@/lib/firebase";


export default function Page() {
  const { selectedLanguage } = useLanguage();
  // const setCard = (method?: "GET" | "POST" | "OPTIONS" | undefined, link?: string, tabs?: boolean, auth?: boolean) => {
  //   return (<CardCode tabs={tabs ?? true} link={link ?? "/api/v1"} method={method} auth={auth} />)
  // }
  const authors = [
    {
      autor: "Felix Mittermeier",
      link: "https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg",
      styles:
        "10px 0 0 0",
    },
    {
      autor: "Alex Andrews",
      link: "https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      styles:
        "0 10px 0 0",
    },
    {
      autor: "GEORGE DESIPRIS",
      link: "https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      styles:
        "0 0 0 10px",
    },
    {
      autor: "Eberhard grossgasteiger",
      link: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      styles:
        "0 0 10px 0",
    }
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
    guides3: selectedLanguage == "Pt-BR" ? "Dicionário" : "Dictionary",
    guides3Sub:
      selectedLanguage == "Pt-BR"
        ? "Solicite todos os dados por ordem alfabética"
        : "Request all data in Letter order",
    guides4: selectedLanguage == "Pt-BR" ? "Busca" : "Search",
    guides4Sub:
      selectedLanguage == "Pt-BR"
        ? "Solicite um dado específico pelo Título"
        : "Request specific data by Title",
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
        : "With the key in hand, you can embed it in your API requests, ensuring the necessary authentication to access the available resources.\n Remember that the key comes with a default validity period of 30 days.",
    text1:
      selectedLanguage == "Pt-BR"
        ? "Você pode solicitar uma quantidade de dias de duração da sua chave de acesso maior que o padrão de dias, a quantidade máxima de dias para uso são de 120 dias."
        : "You can request a duration for your access key that is greater than the standard number of days; the maximum allowed duration for usage is 120 days.",
  };

  const textRandom = {
    title: selectedLanguage === "Pt-BR" ? "Aleatório" : "Random",
    textIntro:
      selectedLanguage === "Pt-BR"
        ? "Nesta página, vamos nos aprofundar alguns pontos de requisição em que você pode gerenciar as requisições sem um exato controle, onde você faz a requisição e recebe dados surpresa."
        : "On this page, we will delve deeper into some request points where you can manage requests without exact control, where you make the request and receive surprise data.",
    textIntro2:
      selectedLanguage === "Pt-BR"
        ? "Solicitar nossas informações em um formato aleatório, é bem simples e fácil."
        : "Requesting our information in a random format is very simple and easy.",

    textStart:
      selectedLanguage === "Pt-BR"
        ? "O modelo aleatório contém todas as informações sobre algo específico do meio ambiente desde que informado a rota utilizando a chave de acesso."
        : "The random model contains all information about something specific in the environment as long as the route is informed using the access key.",
    subTitle:
      selectedLanguage === "Pt-BR" ? "Sem imagens" : "Without images",
    subTitle2:
      selectedLanguage === "Pt-BR" ? "Com imagens" : "With images",
    text1: selectedLanguage === "Pt-BR" ? "Esse tipo de requisição, consegue lhe fornecer dados abstratos, onde não são fornecidos nenhum tipo de imagem, mas sim toda a informação necessária." : "This request can provide you with abstract data, where no images are provided, but rather all the necessary information is given.",
    text2: selectedLanguage === "Pt-BR" ? "Já esta requisição você solicita algo tangível, onde é fornecido toda a descrição e uma imagem junto ao dados solicitados." : "In this request, you search for something tangible, where a complete description and an image are provided along with the requested data.",

  };

  const textDictionary = {
    title: selectedLanguage === "Pt-BR" ? "Dicionário" : "Dictionary",
    textIntro:
      selectedLanguage === "Pt-BR"
        ? "Essa rota funciona como um dicionário, onde os itens são filtrados de acordo com a letra especificada. Ao fazer uma requisição para essa rota, o servidor da API retorna os itens cujos nomes, palavras-chave ou outros atributos começam com a letra fornecida."
        : "This route functions as a dictionary, where items are filtered according to the specified letter. When making a request to this route, the API server returns items whose names, keywords, or other attributes start with the provided letter.",
    subTitle: selectedLanguage == "Pt-BR" ? "Iniciando" : "Starting",
    textStart:
      selectedLanguage == "Pt-BR"
        ? "Essa funcionalidade é útil para explorar e recuperar informações específicas do banco de dados relacionadas à letra indicada, facilitando a navegação e pesquisa de conteúdo na API Nature AtoZ. O modelo é funcional desde que informado na rota utilizando a chave de acesso"
        : "This functionality is useful for exploring and retrieving specific information from the database related to the indicated letter, facilitating navigation and content search in the Nature AtoZ API. The feature is operational when provided in the route using the access key.",
    text1:
      selectedLanguage == "Pt-BR"
        ? "Você pode solicitar qualquer letra, aqui trazemos dois exemplos, acima com a letra A e abaixo com a letra J, os valores retornados são todos com base na letra inicial, exatamente com as páginas de um dicionário"
        : "You can request any letter; here, we provide two examples, above with the letter A and below with the letter J. The returned values are all based on the initial letter, exactly like the pages of a dictionary.",

  };

  const textSearch = {
    title: selectedLanguage === "Pt-BR" ? "Dados por titulo" : "Search by title",
    textIntro:
      selectedLanguage === "Pt-BR"
        ? "Esta rota oferece a funcionalidade de busca de itens com base no título. Ao enviar uma requisição para esta rota, especifique o título desejado como parâmetro na URL."
        : "This route provides the functionality to search for items based on their title. When sending a request to this route, specify the desired title as a parameter in the URL.",
    subTitle: selectedLanguage == "Pt-BR" ? "Iniciando" : "Starting",
    textStart:
      selectedLanguage == "Pt-BR"
        ? "A API retornará uma lista de itens cujos títulos contenham a correspondência com a consulta fornecida. Esta funcionalidade é particularmente útil para recuperar informações específicas relacionadas a um título específico, proporcionando uma maneira eficiente e direta de acessar dados relevantes na sua aplicação."
        : "The API will return a list of items whose titles contain a match with the provided query. This functionality is particularly useful for retrieving specific information related to a particular title, offering an efficient and direct way to access relevant data in your application.",
    text1:
      selectedLanguage == "Pt-BR"
        ? "Utilize esta rota para facilitar operações de pesquisa e recuperação de conteúdo com base em títulos específicos."
        : "Use this route to streamline search operations and retrieve content based on specific titles.",
  };

  const textPagination = {};

  const labels = (destiny: React.JSX.Element, read: string) => {
    return (
      <label onClick={() => alterContent(destiny)}>
        {read} <Image src={arrowRight} width={18} height={18} alt="arrow" style={{ marginTop: "2px" }} />
      </label>
    );
  };

  const goBack = (
    <div>
      <button className={styles.goBack} onClick={() => alterContent(intro)}>
        <Image src={BackIcon} width={24} height={24} alt="Go back" />
        <p>{selectedLanguage == "Pt-BR" ? "Voltar" : "Go back"}</p>
      </button>
    </div>
  )

  const auth = (
    <div id="content" className={`${styles.content}`}>
      {goBack}
      <h1 className={styles.title}>{textAuth.title}</h1>
      <p>{textAuth.textIntro}</p>
      <br />

      <h3>{textAuth.subTitle}</h3>

      <p>{textAuth.textStart} <br />
        {textAuth.textStart2}</p><br />
      <CardCode method="GET" link="/api/v1/auth" tabs={true} auth={false} />
      <p>{textAuth.text1}</p><br />
      <CardCode tabs={true} link="/api/v1/auth?days=120" method="GET" auth={false} />
    </div >
  );

  const random = (
    <div id="content" className={`${styles.content}`}>
      {goBack}
      <h1 className={styles.title}>
        {textRandom.title}
      </h1>
      <p>
        {textRandom.textIntro}&nbsp;
        {textRandom.textIntro2}
      </p>
      <p>
        {textRandom.textStart}
      </p>
      <br />

      <h3>{textRandom.subTitle}</h3>
      <p>{textRandom.text1}</p><br />
      <CardCode link="/api/v1/random" tabs={true} auth={true} method="GET" />
      <br />

      <h3>{textRandom.subTitle2}</h3>
      <p>{textRandom.text2}</p><br />
      <div className={styles.reqWithImg}>
        <CardCode link="/api/v1/random/image" tabs={true} auth={true} method="GET" />
        <div className={styles.gridImage}>
          {authors.map((e) => {
            return (
              <div className={styles.gridItem} key={e.autor}><img className={styles.image} width={150} height={150} src={e.link} alt={e.autor} style={{ borderRadius: `${e.styles}` }} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );

  const dictionary = (
    <div id="content" className={`${styles.content}`}>
      {goBack}
      <h1 className={styles.title}>{textDictionary.title}</h1>
      <p>{textDictionary.textIntro}</p>
      <br />

      <h3>{textDictionary.subTitle}</h3>

      <p>{textDictionary.textStart}</p><br />
      <CardCode tabs={true} link="/api/v1/dictionary/A" method="GET" auth={true} />
      <p>{textDictionary.text1}</p><br />
      <CardCode tabs={true} link="/api/v1/dictionary/J" method="GET" auth={true} />
    </div>
  );

  const search = (
    <div id="content" className={`${styles.content}`}>
      {goBack}
      <h1 className={styles.title}>{textSearch.title}</h1>
      <p>{textSearch.textIntro}</p>
      <br />

      <h3>{textSearch.subTitle}</h3>

      <p>{textSearch.textStart} </p><br />
      <CardCode tabs={true} link="/api/v1/search/title_example" method="GET" auth={true} />
      <p>{textSearch.text1}</p><br />
      <CardCode tabs={true} link="/api/v1/search/colina" method="GET" auth={true} />
    </div>
  );

  const pagination = (
    <div id="content" className={`${styles.content}`}>
      <h1 className={styles.title}>{textDictionary.title}</h1>
      <p>{textDictionary.textIntro}</p>
      <br />

      <h3>{textDictionary.subTitle}</h3>

      <p>{textDictionary.textStart} <br /></p>
      <p>{textDictionary.text1}</p>
    </div>
  );

  const intro = (
    <div id="content" className={`${styles.content}`}>
      <h1 className={styles.title}>{textContent.title} <span className={styles.version}>v 1.0</span></h1>
      <p>{textContent.textIntro}</p>
      <br />

      <h3>{textContent.subTitle}</h3>

      <p>{textContent.textStart}</p>

      <CardCode tabs={true} link="/api/v1" method={"OPTIONS"} />
      <div className={styles.guides}>
        <h3>{textContent.guides}</h3>
        <div className={styles.subGuides}>
          <div className={styles.d1}>
            <h4>{textContent.guides1}</h4>
            <p>{textContent.guides1Sub}</p>
            {labels(auth, textContent.readMore)}
          </div>
          <div className={styles.d1}>
            <h4>{textContent.guides2}</h4>
            <p>{textContent.guides2Sub}</p>
            {labels(random, textContent.readMore)}
          </div>
          <div className={styles.d1}>
            <h4>{textContent.guides3}</h4>
            <p>{textContent.guides3Sub}</p>
            {labels(dictionary, textContent.readMore)}
          </div>
          <div className={styles.d1}>
            <h4>{textContent.guides4}</h4>
            <p>{textContent.guides4Sub}</p>
            {labels(search, textContent.readMore)}
          </div>
          {/* <div className={styles.d1}>
            <h4>{textContent.guides5}</h4>
            <p>{textContent.guides5Sub}</p>
            {labels(pagination, textContent.readMore)}
          </div> */}
        </div>
      </div>
    </div>
  );

  const region = intro;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adiciona um efeito de rolagem suave
    });
  };

  const alterContent = (actual: React.JSX.Element | null) => {
    if (actual) {
      setContent(actual)
      scrollToTop();
    }
  };

  const [content, setContent] = useState(intro);
  const [position, setPosition] = useState("30% 20%");
  const section = [
    { name: "v1/", section: intro, style: styles.options, req: "OPTIONS" },
    { name: "/auth", section: auth, style: styles.get, req: "GET" },
    { name: "/random", section: random, style: styles.get, req: "GET" },
    { name: "/dictionary/{x}", section: dictionary, style: styles.get, req: "GET" },
    { name: "/search/{title}", section: search, style: styles.get, req: "GET" },
    // { name: "/language", section: pagination, style: styles.get, req: "GET" },
    { name: "/region", section: null, style: styles.delete, req: "Soon ⚠️" }
  ]
  useEffect(() => {
    setContent(intro);
  }, [selectedLanguage]);

  useEffect(() => {
    log(analytics, 'page_view', { page_path: '/docs' });
  }, []);

  return (
    <div className={styles.body}>
      <div
        id="sidebar"
        className={styles.sidebar}
        style={{
          backgroundPosition: `${position}`,
        }}
      >
        <br />

        <ul className={styles.list}>
          {section.map((e, i) => {
            return (
              <li onClick={() => alterContent(e.section)} key={i}>
                <p>{e.name}</p> <span className={`${styles.typeReq} ${e.style}`}>{e.req}</span>
              </li>)
          })
          }
        </ul>
      </div>

      {content}
    </div>
  );
}
