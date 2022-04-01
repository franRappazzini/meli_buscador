import "./Footer.css";

import React from "react";

function Footer() {
  return (
    <footer>
      <span>Este sitio no es oficial, es solo un proyecto personal</span>
      <p>
        Creado por{" "}
        <a
          href="https://rappazzini-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Francisco Rappazzini
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
