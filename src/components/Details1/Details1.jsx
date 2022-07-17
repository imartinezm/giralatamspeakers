import React from "react";
import officeWorker from "../../image/details-1-office-worker.svg";
import "../../css/fontawesome-all.css";
import "../../css/magnific-popup.css";
import "../../css/styles.css";
import "../../css/swiper.css";
import "./details1.css";

export const Details1 = () => {
  return (
    <div class="basic-1">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="text-container">
              <h2>
                Desarrollamos tus Skills&nbsp; en el uso de Tecnologias de
                acuerdo a tu necesidades profesionales.
              </h2>
              <p>
                Con cada uno de nuestros cursos de entrenamiento lograraras
                tener las habilidades tecnicas que tu necesitas desde un Nivel
                Basico hasta Nivel Avanzando para que vayas avanzando en tu
                creciendo profesional
              </p>
              <div class="button-wrapper">
                <a class="btn-solid-reg page-scroll" href="#pricing">
                  Cursos{" "}
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="image-container">
              <img class="img-fluid" src={officeWorker} alt="alternative" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
