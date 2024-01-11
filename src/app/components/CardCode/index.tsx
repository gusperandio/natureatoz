import { useState } from "react";
import styles from "./styles.module.scss";
import CopyButton from "../CopyButton";
import { useLanguage } from "@/app/LanguageContext";
import ReactDomServer from 'react-dom/server';

interface PropsCardCode {
  method?: "GET" | "POST" | "OPTIONS" | undefined;
  link: string;
  tabs: boolean;
}

type Types = {
  [key: string]: () => JSX.Element;
};

export default function CardCode(props: PropsCardCode) {
  const { selectedLanguage } = useLanguage();
  const buttons = ["cURL", "Javascript", "Python", "C#", "PHP", "Ruby", "Go"];
  const [selectedButton, setSelectedButton] = useState<number>(0);
  const link = 'https://natureatoz.com.br' + props.link;
  const methods: Types = {
    "GET": () => (
      <p className={`${styles.method} ${styles.type} ${styles.get}`}>GET •</p>
    ),
    "OPTIONS": () => (
      <p className={`${styles.method} ${styles.type} ${styles.options}`}>OPTIONS <span>•</span></p>
    ),
    undefined: () => <></>,
  }

  const contentOptions: Types = {
    "cURL": () => (<code>curl -i -X {props.method} <span className={styles.g}>{link}</span> \</code>),

    "Javascript": () => (<code>
      <span className={styles.b}>const</span> apiUrl = <span className={styles.g}>&#34;{link}&#34;</span>; <br /><br />

      <span className={styles.bg}>fetch</span>(apiUrl, &#123; <span className={styles.r}>method</span>: <span className={styles.g}>&#34;OPTIONS&#34;</span> &#125;)<br />
      .<span className={styles.bg}>then</span>(response &#61;&#62; 	&#123;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.p}>return</span> response; <br />
      {/* &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.p}>return</span> response.<span className={styles.bg}>json</span>(); <br /> */}
      &#125;)<br />
      .<span className={styles.bg}>then</span>(data &#61;&#62; 	&#123; <br />
      &nbsp;&nbsp;&nbsp;<span className={styles.r}>console</span>.<span className={styles.bg}>log</span>(<span className={styles.g}>&#34;Response:&#34;</span>, data); <br />
      &#125;) <br />
    </code>),

    "Python": () => (<code>
      <span className={styles.b}>import</span> requests <br /> <br />

      url = <span className={styles.g}>&#34;{link}&#34;</span><br />

      response = requests.<span className={styles.b}>get</span>(url)
    </code>),

    "C#": () => (<code>
      <span className={styles.p}>string</span> url = <span className={styles.g}>&#34;{link}&#34;</span>;<br />
      <span className={styles.b}>using var</span> client = <span className={styles.b}>new</span>  <span className={styles.p}>HttpClient</span>();<br /><br />
      <span className={styles.p}>var</span> request = <span className={styles.b}>new</span> <span className={styles.p}>HttpRequestMessage</span>(HttpMethod.Options, <span className={styles.b}>url</span>);<br />
      <span className={styles.p}>var</span> response = <span className={styles.r}>await</span> client.<span className={styles.p}>SendAsync</span>(request);<br />
    </code>),

    "PHP": () => (<code>
      <span className={styles.r}>$apiUrl</span> = <span className={styles.g}>&#34;{link}&#34;</span>; <br /><br />

      <span className={styles.r}>$ch</span> = <span className={styles.bg}>curl_init</span>(<span className={styles.r}>$apiUrl</span>); <br /><br />

      <span className={styles.bg}>curl_setopt</span>(<span className={styles.r}>$ch</span>, CURLOPT_CUSTOMREQUEST, <span className={styles.g}>&#34;OPTIONS&#34</span>;); <br />
      <span className={styles.bg}>curl_setopt</span>(<span className={styles.r}>$ch</span>, CURLOPT_RETURNTRANSFER, <span className={styles.b}>true</span>); <br /><br />

      <span className={styles.r}>$response</span> = <span className={styles.bg}>curl_exec</span>(<span className={styles.r}>$ch</span>); <br />
    </code>),

    "Ruby": () => (<code>
      <span className={styles.b}>require</span> <span className={styles.g}>&#39;net/http&#39;</span><br /><br />

      api_url = <span className={styles.r}>URI</span>.parse(<span className={styles.g}>&#39;{link}&#39;</span>) <br /><br />

      http = <span className={styles.bg}>Net::HTTP</span>.new(api_url.host, api_url.port)<br />
      request = <span className={styles.bg}>Net::HTTP::Options</span>.new(api_url.path)<br /><br />
      response = http.request(request)<br />
    </code>),

    "Go": () => (<code>
      <span className={styles.b}>package</span> main <br />

      <span className={styles.b}>import</span> <span className={styles.g}>&#34;fmt&#34;</span><br />
      <span className={styles.b}>import</span> <span className={styles.g}>&#34;net/http&#34;</span><br /><br />

      <span className={styles.b}>func</span> <span className={styles.bg}>main</span>() &#123;<br />
      &nbsp;&nbsp;apiURL := <span className={styles.g}>&#34;{link}&#34;</span><br />
      &nbsp;&nbsp;response, err := http.DefaultClient.<span className={styles.p}>Options</span>(apiURL)<br />
      &nbsp;&nbsp;<span className={styles.b}>defer</span> response.Body.<span className={styles.p}>Close</span>()<br />
      &#125;<br />
    </code>)
  }

  const [content, setContent] = useState<JSX.Element>(contentOptions["cURL"]);

  const tractiveCopy = (index: number) => {
    const removeTagsHTML = (htmlString: string) => {
      const doc = new DOMParser().parseFromString(htmlString, 'text/html');
      return doc.body.textContent || "";
    };
    const componentString = ReactDomServer.renderToString(contentOptions[buttons[index]]())
    return removeTagsHTML(componentString.replace(/<br\s*\/?>/gi, '\n'));
  }

  const [copy, setCopy] = useState<string>(tractiveCopy(0))

  const alterContent = (i: number) => {
    setSelectedButton(i);
    setContent(contentOptions[buttons[i]])
    setCopy(tractiveCopy(i))
  }

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
          {methods[props.method ?? "undefined"]()}
          <p className={styles.urlAPI}>{props.link}</p>
        </div>
        <div className={styles.codeContent}>
          {content}
        </div>
      </div>
    </div>
  );
}
