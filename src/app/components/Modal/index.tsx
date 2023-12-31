import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import close from "../../../../public/icons/close-circle.svg";
import Image from "next/image";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  classToUse: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, classToUse }) => {
  const modalOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (
        !modalOverlayRef.current?.contains(event.target as Node) &&
        modalOverlayRef.current
      ) {
        onClose();
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [modalOverlayRef, onClose]);

  return (
    <>
      {isOpen && (
        <div className={styles.modal}>
          <div
            className={`${styles.modal_content} ${styles[classToUse]} animate__animated animate__fadeIn`}
            ref={modalOverlayRef}
          >
            <a onClick={onClose} className={styles.close}>
              <Image src={close} width={28} height={28} alt="close" />
            </a>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
