import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";
import "./styles.css";

import logoImg from "../../assets/logo.svg";

export default function Register() {

  

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the hero" />

          <h1>Cadastro</h1>
          <p>Faca seu cadastro, entre na plataforma e ajude pessoas.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Nao tenho cadastro.
          </Link>
        </section>

        <form>
          <input placeholder="nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="whatsapp" />

          <div className="input-group">
            <input placeholder="cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
