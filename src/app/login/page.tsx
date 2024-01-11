"use client";
import { useLanguage } from "../LanguageContext";
import Loader from "../components/Loader";
import styles from "../styles/page.module.css";
import { useState, useEffect } from "react";
import Modal from '../components/Modal';
import Parallax from "../components/Parallax";


export default function Page() {
  useEffect(() => {
    myFunction();
  }, []); // O segundo argumento vazio significa que o efeito será executado apenas uma vez, equivalente a componentDidMount

  function myFunction() {
    let text;
    let person = prompt("Please enter your name:", "Harry Potter");
    if (person === null || person === "") {
      text = "User cancelled the prompt.";
    } else {
      text = "Hello " + person + "! How are you today?";
    }
  }


  return (
    <div>
      <div>

        <div id="demo"></div>
      </div>
    </div>
  );
}
