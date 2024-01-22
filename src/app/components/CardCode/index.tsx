import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import CopyButton from "../CopyButton";
import { useLanguage } from "@/app/LanguageContext";
import ReactDomServer from 'react-dom/server';

interface PropsCardCode {
  method?: "GET" | "POST" | "OPTIONS" | undefined;
  link: string;
  tabs: boolean;
  auth?: boolean
}

type Types = {
  [key: string]: () => JSX.Element;
};

export default function CardCode(props: PropsCardCode) {
  const { selectedLanguage } = useLanguage();
  const buttons = ["cURL", "Javascript", "Python", "C#", "PHP", "Ruby"];
  const [selectedButton, setSelectedButton] = useState<number>(0);
  const [link, setLink] = useState<string>('https://natureatoz.com.br' + props.link);
  const methods: Types = {
    "GET": () => (
      <p className={`${styles.method} ${styles.type} ${styles.get}`}>GET •</p>
    ),
    "OPTIONS": () => (
      <p className={`${styles.method} ${styles.type} ${styles.options}`}>OPTIONS <span>•</span></p>
    )
  }

  const cURL = () => (
    <code>curl -i -X {props.method?.toUpperCase()} <span className={styles.g}>&quot;{link}&quot;</span> \
      <span style={{ display: props.auth ? "block" : "none" }}> -H <span className={styles.g}>&quot;Authorization: Bearer MY_TOKEN_HERE&quot;</span></span>
    </code>
  )

  const Javascript = () => (
    <code>
      <span className={styles.b}>const</span> apiUrl = <span className={styles.g}>&#34;{link}&#34;</span>; <br />
      <div style={{ display: props.auth ? "block" : "none" }}><span className={styles.b}>const</span> token = <span className={styles.g}>&#34;MY_TOKEN_HERE&#34;</span>; <br /></div><br />

      <span className={styles.bg}>fetch</span>(apiUrl, <span style={{ display: props.auth ? "inline" : "none" }}><br />
        &nbsp;&nbsp;&nbsp;&nbsp; </span>&#123;<span className={styles.r}>method</span>: <span className={styles.g}>&#34;{props.method}&#34;</span>
      <span style={{ display: props.auth ? "inline" : "none" }}>, <span className={styles.r}>headers</span>: &#123; <span className={styles.g}>&#39;Authorization&#39;</span>: <span className={styles.g}>`Bearer $&#123;token&#125;`</span>&#125;</span>&#125;)<br />
      .<span className={styles.bg}>then</span>(response &#61;&#62;  &#123;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.p}>return</span> response; <br />
      &#125;)<br />
      .<span className={styles.bg}>then</span>(data &#61;&#62;  &#123; <br />
      &nbsp;&nbsp;&nbsp;<span className={styles.r}>console</span>.<span className={styles.bg}>log</span>(<span className={styles.g}>&#34;Response:&#34;</span>, data); <br />
      &#125;) <br />
    </code>
  );

  const Python = () => (
    <code>
      <span className={styles.b}>import</span> requests <br /> <br />

      url = <span className={styles.g}>&#34;{link}&#34;</span><br />

      <div style={{ display: props.auth ? "block" : "none" }}>headers = &#123;<br />
        &nbsp;&nbsp;&nbsp;<span className={styles.g}>&#34;Authorization&#34;</span>: <span className={styles.g}>f&#39;Bearer &#123;MY_TOKEN_HERE&#125;&#39;</span><br />
        &#125;<br /></div>

      response = requests.<span className={styles.b}>{props.method?.toLowerCase()}</span>(url<div style={{ display: props.auth ? "inline" : "none" }}>, headers=headers</div>)
    </code>
  )

  const Csharp = () => (
    <code>
      <span className={styles.p}>string</span> url = <span className={styles.g}>&#34;{link}&#34;</span>;<br />
      <div style={{ display: props.auth ? "block" : "none" }}><span className={styles.p}>string</span> token = <span className={styles.g}>&#34;MY_TOKEN_HERE&#34;</span>;<br /></div>
      <span className={styles.b}>using var</span> client = <span className={styles.b}>new</span>  <span className={styles.p}>HttpClient</span>();<br /><br />

      <div style={{ display: props.auth ? "block" : "none" }}>client.DefaultRequestHeaders.<span className={styles.b}>Add</span>(<span className={styles.g}>&#34;Authorization&#34;, $&#34;Bearer &#123;token&#125;&#34;</span>);<br /></div>
      <div style={{ display: props.method === "OPTIONS" ? "block" : "none" }}><span className={styles.p}>var</span> request = <span className={styles.b}>new</span> <span className={styles.p}>HttpRequestMessage</span>(HttpMethod.Options, <span className={styles.b}>url</span>);<br /></div>
      <span className={styles.p}>var</span> response = <span className={styles.r}>await</span> client.<span className={styles.p}>{props.method === "GET" ? "GetAsync" : "SendAsync"}</span>({props.method === "OPTIONS" ? "request" : "url"});<br />
    </code>
  )

  const Php = () => (
    <code>
      <span className={styles.r}>$apiUrl</span> = <span className={styles.g}>&#34;{link}&#34;</span>; <br />
      <div style={{ display: props.auth ? "block" : "none" }}><span className={styles.r}>$token</span> = <span className={styles.g}>&#34;MY_TOKEN_HERE&#34;</span>;</div> <br />

      <span className={styles.r}>$ch</span> = <span className={styles.bg}>curl_init</span>(<span className={styles.r}>$apiUrl</span>); <br /><br />

      <div style={{ display: props.method === "OPTIONS" ? "block" : "none" }}><span className={styles.bg}>curl_setopt</span>(<span className={styles.r}>$ch</span>, CURLOPT_CUSTOMREQUEST, <span className={styles.g}>&#34;OPTIONS&#34;</span>); <br /></div>
      <span className={styles.bg}>curl_setopt</span>(<span className={styles.r}>$ch</span>, CURLOPT_RETURNTRANSFER, <span className={styles.b}>true</span>); <br />
      <div style={{ display: props.auth ? "block" : "none" }}><span className={styles.bg}>curl_setopt</span>(<span className={styles.r}>$ch</span>, CURLOPT_HTTPHEADER, [<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className={styles.g}>&#39;Authorization: Bearer&#39;</span> . <span className={styles.r}>$token</span>,
        ]);<br /><br /></div>


      <span className={styles.r}>$response</span> = <span className={styles.bg}>curl_exec</span>(<span className={styles.r}>$ch</span>); <br />
    </code>
  )

  const Ruby = () => (
    <code>
      <span className={styles.b}>require</span> <span className={styles.g}>&#39;net/http&#39;</span><br />
      <span className={styles.b}>require</span> <span className={styles.g}>&#39;uri&#39;</span><br /><br />

      api_url = <span className={styles.r}>URI</span>.parse(<span className={styles.g}>&#39;{link}&#39;</span>) <br /><br />

      http = <span className={styles.bg}>Net::HTTP</span>.new(api_url.host, api_url.port)<br />
      req = <span className={styles.bg}>Net::HTTP::{props.method === "OPTIONS" ? "Options" : "Get"}</span>.new(api_url.path)<br />
      <div style={{ display: props.auth ? "block" : "none" }}>req[<span className={styles.g}>&#39;Authorization&#39;</span>] = <span className={styles.g}>&#39;Bearer MY_TOKEN_HERE&#39;</span><br /></div><br />
      response = http.request(req)<br />
    </code>)

  const templates = [cURL, Javascript, Python, Csharp, Php, Ruby];

  const [content, setContent] = useState<JSX.Element>(templates[0]);
  const tractiveCopy = (index: number) => {
    const removeTagsHTML = (htmlString: string) => {
      const doc = new DOMParser().parseFromString(htmlString, 'text/html');
      return doc.body.textContent || "";
    };
    const componentString = ReactDomServer.renderToString(templates[index]())
    return removeTagsHTML(componentString.replace(/<br\s*\/?>/gi, '\n'));
  }

  const [copy, setCopy] = useState<string>(tractiveCopy(0))

  const alterContent = (i: number) => {
    setSelectedButton(i);
    setContent(templates[i]())
    setCopy(tractiveCopy(i))
  }

  useEffect(() => {
    setLink('https://natureatoz.com.br' + props.link);
  }, [props.link]);
  
  useEffect(() => {
    setContent(templates[selectedButton]());
    setCopy(tractiveCopy(selectedButton));
  }, [link, selectedButton]);

  return (
    <div>
      <div className={styles.cardCode}>
        <div className={styles.header}>
          {props.tabs ? <div className={styles.btn}>
            {buttons.map((e, i) => {
              return (
                <button
                  key={e}
                  className={selectedButton === i ? styles.selectedBtn : ""}
                  onClick={() => alterContent(i)}
                >
                  {e}
                </button>
              );
            })}
          </div> : <div></div>}
          <div className={styles.copy}>
            <CopyButton selectedLanguage={selectedLanguage} text={copy} />
          </div>
        </div>


        <div className={styles.method}>
          {methods[props.method ?? "GET"]()}
          <p className={styles.urlAPI}>{props.link}</p>
        </div>
        <div className={styles.codeContent}>
          {content}
        </div>
      </div>
    </div>
  );
}
