import React from "react";
import teamWork from "../../image/header-teamwork.svg";
// import "../../css/boostrap.css";
import "../../css/fontawesome-all.css";
import "../../css/magnific-popup.css";
import "../../css/styles.css";
import "../../css/swiper.css";
import "./home.css";

export const Home = () => {
  return (
    <header id="home" class="header">
      <div class="header-content">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="text-container">
                <h1>
                  <span class="turquoise">IT Center Learning</span> Certificate
                  con los Expertos en Nuevas Tecnologias
                </h1>
                <p class="p-large">
                  <h2>
                    <b> Authorized Test Center - Pearson VUE</b>
                  </h2>
                </p>
                <p class="p-large">
                  Somos un centro de capacitacion certificado .Conoce nuestros
                  cursos Altamente Especializados y mantente a la vanguardia de
                  las Nuevas Tecnologias de la Nube y Tecnologias asociadas a
                  Redes de Cisco con nuestro entrenamiento que estan
                  constantemente actualizados a las nuevas certificaciones de
                  hoy en dia.
                </p>
                <a class="btn-solid-lg page-scroll" href="#services">
                  Conoce mas
                </a>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="image-container">
                <img class="img-fluid" src={teamWork} alt="alternative" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
