import styles from "./styles.module.scss";
import * as React from 'react';

interface EmailTemplateProps {
  email: string | string[] | undefined;
  description: string | string[] | undefined;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email, description
}) => (
  <>
  <div className={styles.card}>
    <div className={styles.card_icon}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`${styles.bi} ${styles.bi_collection}`} viewBox="0 0 16 16"> <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"></path> </svg>
    </div>
    <h2>{email}</h2>
    <span className={styles.card_body}>
      {description}
    </span>
  </div>
</>
);


