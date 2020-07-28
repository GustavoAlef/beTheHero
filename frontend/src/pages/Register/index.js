import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

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

          <Link className="back-link" to="/register">
            <FiArrowLeft size={16} color="#E02041" />
            Nao tenho cadastro.
          </Link>
        </section>

        <form></form>
      </div>
    </div>
  );
}
