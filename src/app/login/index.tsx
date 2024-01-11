"use client";
import { useLanguage } from "../LanguageContext";
import Loader from "../components/Loader";
import styles from "../styles/page.module.css";
import { useState, useEffect } from "react";
import Modal from '../components/Modal';
import Parallax from "../components/Parallax";


export default function Page() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Verificar as credenciais aqui
    const keyToPost = process.env.KEY_TO_POST;
    const keyUserManutence = process.env.KEY_USER_MANUTENCE;

    if (username === keyUserManutence && password === keyToPost) {
      alert('Login bem-sucedido!');
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <label>
        Usuário:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Senha:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
