import styles from "./styles.module.scss";
import cancel from '../../../../public/cancelar.png'
import verify from '../../../../public/verificado.png'
import Image from "next/image";
import Link from "next/link";
interface PropsLicense {
  selectedLanguage: string;
}

export default function ModalLicense(props: PropsLicense) {
  const link = "https://github.com/gusperandio/natureatoz/blob/main/LICENSE"
  const licenseAccess =
    props.selectedLanguage == "Pt-BR" ? (
      <p className={styles.subs}>
        Natureatoz é licenciada com base na{" "}
        <Link
          href={link}
          legacyBehavior
          passHref
        >
          <a target="_blank" rel="noopener noreferrer">
            <span className={styles.spanLicense}>Licença Apache</span>
          </a>
        </Link>{" "}
        e todos os direitos dos produtos são reservados à Natureatoz.
      </p>
    ) : (
      <p className={styles.subs}>
        Natureatoz is licensed based on the{" "}
        <Link
          href={link}
          legacyBehavior
          passHref
        >
          <a target="_blank" rel="noopener noreferrer">
            <span className={styles.spanLicense}>Apache License</span>
          </a>
        </Link>{" "}
        and all rights of products are reserved for Natureatoz.
      </p>
    );

  return (
    <div className={styles.divLicense}>
      <h1 className={styles.title}>
        {props.selectedLanguage == "Pt-BR" ? "Licença" : "License"}
        {/* <Image src={justice} width={30} height={30} alt="justice" style={{fill: "#292c33"}}/> */}
      </h1>
      <br />
      {licenseAccess}
      <br />
      <h2 className={styles.subtitle}>{props.selectedLanguage == "Pt-BR" ? "Permissões" : "Permissions"}</h2>
      <ul className={styles.ul}>
          <li className={styles.items}><Image src={verify} width={16} height={16} alt="Permission"/> <span className={styles.span}>{props.selectedLanguage == "Pt-BR" ? "Todos os nossos dados referente a natureza podem usados gratuitamente" : "All our data regarding nature can be used free of charge"}</span></li>
          <li className={styles.items}><Image src={verify} width={16} height={16} alt="Permission"/> <span className={styles.span}>{props.selectedLanguage == "Pt-BR" ? "Fins comerciais e não comerciais" : "Commercial and non-commercial purposes"}</span></li>
          <li className={styles.items}><Image src={verify} width={16} height={16} alt="Permission"/> <span className={styles.span}>{props.selectedLanguage == "Pt-BR" ? "Distribuição com atribuição ou crédito" : "Distribution with attribution or credit"}</span></li>
      </ul>

      <br />
      <h2 className={styles.subtitle}>{props.selectedLanguage == "Pt-BR" ? "Proibições" : "Prohibitions"}</h2>
      <ul className={styles.ul}>
          <li className={styles.items}><Image src={cancel} width={16} height={16} alt="Permission"/> <span className={styles.span}>{props.selectedLanguage == "Pt-BR" ? "Uso de marca registrada" : "Trademark use"}</span></li>
          <li className={styles.items}><span className={styles.subSpan}>{props.selectedLanguage == "Pt-BR" ? "Contate-nos se necessário" : "Contact us if necessary"}</span></li>
          <li className={styles.items}><Image src={cancel} width={16} height={16} alt="Permission"/> <span className={styles.span}>{props.selectedLanguage == "Pt-BR" ? "Revender nossa plataforma em qualquer formato" : "Re-selling our platform in any format"}</span></li>
          <li className={styles.items}><Image src={cancel} width={16} height={16} alt="Permission"/> <span className={styles.span}>{props.selectedLanguage == "Pt-BR" ? "Usar nossos dados para replicar uma biblioteca de dados semelhantes ou concorrentes, sem modificações significativas" : "Use our data to replicate a library of similar or competing data without significant modifications"}</span></li>
          <li className={styles.items}><span className={styles.subSpan}>{props.selectedLanguage == "Pt-BR" ? "Como nome e descrição" : "Like name and description"}</span></li>
      </ul>
    </div>
  );
}
