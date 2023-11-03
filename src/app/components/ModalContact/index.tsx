import styles from "./styles.module.scss";
import email from "../../../../public/icons/email.svg";
import Image from "next/image";
interface PropsContact {
  selectedLanguage: string;
}

export default function ModalContact(props: PropsContact) {
  return (
    <div className={styles.divContact}>
      <button className={styles.btn}>
        Twitter
        <span className={styles.spann}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className={styles.svgg}
          >
            <path
              fill="#fff"
              d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"
            ></path>
          </svg>
        </span>
      </button>
      <button className={styles.btn}>
        Github
        <span className={styles.spann}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.svgg}
          >
            <path
              d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
              fill="white"
            ></path>
          </svg>
        </span>
      </button>
      <button className={styles.btn}>
        Email
        <span className={styles.spann}>
          <svg
            fill="#ffffff"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
            width="24"
            height="24"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
                fill-rule="evenodd"
              ></path>{" "}
            </g>
          </svg>
        </span>
      </button>
    </div>
  );
}
