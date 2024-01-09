import styles from "./styles.module.scss";

interface PropsPrivacy {
  selectedLanguage: string;
}

export default function ModalPrivacy(props: PropsPrivacy) {
  return (
    <div className={styles.divPrivacy}>
      <h1 className={styles.titles}>
        {props.selectedLanguage == "Pt-BR"
          ? "Política de Privacidade"
          : "Privacy Policy"}
      </h1>
      <br />
      <p className={styles.texts}>
        {props.selectedLanguage == "Pt-BR"
          ? "O Natureatoz.com leva a sua privacidade a sério. Estamos comprometidos em proteger as suas informações pessoais e garantir que a sua experiência no nosso site seja segura e satisfatória. Nossa política de privacidade visa fornecer informações claras sobre como coletamos, usamos e protegemos os seus dados."
          : "Natureatoz.com takes your privacy seriously. We are committed to protecting your personal information and ensuring that your experience on our website is safe and satisfactory. Our privacy policy aims to provide clear information about how we collect, use and protect your data."}
      </p>
      <br />
      <h2 className={styles.titles}>1. Google Analytics</h2>
      <p className={styles.texts}>
        {props.selectedLanguage == "Pt-BR"
          ? "Utilizamos o Google Analytics para analisar o tráfego do site, compreender nosso público e aprimorar produtos e serviços. O rastreamento é feito pelo servidor do Google, sujeito às políticas de privacidade da empresa. Consulte a política de privacidade do Google para mais informações sobre o tratamento de dados pelo Google Analytics."
          : "We use Google Analytics to analyze website traffic, understand our audience, and enhance our products and services. Tracking is done by Google's server, subject to the company's privacy policies. For more information on how Google Analytics handles your data, please refer to Google's privacy policy."}
      </p>
      <br />
      <h2 className={styles.titles}>
        {props.selectedLanguage == "Pt-BR"
          ? "2. Armazenamento de Dados"
          : "2. Data Storage"}
      </h2>
      <p className={styles.texts}>
        {props.selectedLanguage == "Pt-BR"
          ? "É fundamental destacar que não coletamos ou armazenamos informações pessoais identificáveis em nossos servidores. Respeitamos a sua privacidade e protegemos seus dados."
          : "It is important to highlight that we do not collect or store personally identifiable information on our servers. We respect your privacy and protect your data."}
      </p>
      <br />
      <h2 className={styles.titles}>
        {props.selectedLanguage == "Pt-BR"
          ? "3. Links para Terceiros"
          : "3. Links to Third Parties"}
      </h2>
      <p className={styles.texts}>
        {props.selectedLanguage == "Pt-BR"
          ? "O Natureatoz.com pode conter links para outros sites de terceiros. Esta política de privacidade se aplica apenas ao nosso site, e não somos responsáveis pelas práticas de privacidade de outros sites. Recomendamos que você leia as políticas de privacidade de qualquer site que visitar."
          : "Natureatoz.com may contain links to other third party websites. This privacy policy applies only to our website, and we are not responsible for the privacy practices of other websites. We recommend that you read the privacy policies of any website you visit."}
      </p>
      <br />
      <h2 className={styles.titles}>
        {props.selectedLanguage == "Pt-BR"
          ? "4. Alterações na Política de Privacidade"
          : "4. Changes to the Privacy Policy"}
      </h2>
      <p className={styles.texts}>
        {props.selectedLanguage == "Pt-BR"
          ? "Reservamo-nos o direito de atualizar ou modificar esta política de privacidade a qualquer momento. Quaisquer alterações serão refletidas nesta página com a data de atualização mais recente. Sugerimos que você visite esta página periodicamente para ficar informado sobre as atualizações."
          : "We reserve the right to update or modify this privacy policy at any time. Any changes will be reflected on this page with the most recent updated date. We suggest that you visit this page periodically to stay informed of updates."}
      </p>
      <br />
      <p className={styles.texts}>
        {props.selectedLanguage == "Pt-BR"
          ? "Agradecemos por escolher o Natureatoz.com como sua fonte de informações. Continuaremos a proteger sua privacidade e aprimorar nossas práticas à medida que as tecnologias evoluem."
          : "Thank you for choosing Natureatoz.com as your information source. We will continue to protect your privacy and improve our practices as technologies evolve."}
      </p>
      <br />
      <p className={styles.texts}>
        {props.selectedLanguage == "Pt-BR"
          ? "Atenciosamente,"
          : "Yours sincerely,"}
      </p>
      <br />
      <p className={styles.texts}>
        {props.selectedLanguage == "Pt-BR"
          ? "Equipe do Natureatoz.com"
          : "Natureatoz.com Team"}
      </p>
    </div>
  );
}
