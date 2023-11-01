import styles from "./styles.module.scss";

interface PropsLicense{
  selectedLanguage: string;
}

export default function ModalLicense(props: PropsLicense) {
  return(<div>
    <h1>License</h1>
  </div>)
}