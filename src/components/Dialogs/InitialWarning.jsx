import "./InitialWarning.css";

import { BsFillExclamationTriangleFill } from "react-icons/bs";
import React from "react";

function InitialWarning({ onClick }) {
  return (
    <section className="warning_container">
      <div>
        <BsFillExclamationTriangleFill color="red" size={70} />
        <h1>¡Atencion!</h1>
        <p>
          Este sitio fue creado con fines educativos, no es oficial de Mercado Libre. Puedes
          ver/utilizar el repositorio libremente, lo encontraras en mi{" "}
          <a href="https://github.com/franRappazzini" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          . Gracias!
        </p>

        <button onClick={onClick}>Ok, entiendo</button>
      </div>
    </section>
  );
}

export default InitialWarning;
