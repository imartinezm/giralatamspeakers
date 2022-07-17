import React from "react";
import tutoria1 from "../../image/tutoria1.png";
import asesoria from "../../image/asesoria.png";
import asesoriaTutoria from "../../image/aesoriatutoria.jpg";
// import "../../css/boostrap.css";
import "../../css/fontawesome-all.css";
import "../../css/magnific-popup.css";
import "../../css/styles.css";
import "../../css/swiper.css";
import "./servicio.css";

export const Servicio = () => {
  return (
    <div id="services" class="cards-1">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2>Nuestros Servicios</h2>
            <p class="p-heading p-large text-justify">
              Nosotros te capacitamos y te brindamos asesoria hasta que rindas
              el Examen de certificacion internacional en cada uno de nuestros
              cursos con materiales adicionales y simulacros y laboratorios 100
              % aplicados a tu examen de certificacion contamos con instructores
              certificados
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <img
                src={tutoria1}
                alt="alternative"
                width="2000"
                height="1332"
                class="card-image rounded"
              />

              <div class="card-body">
                <h4 class="card-title">
                  Tutoria Personalizada&nbsp; en cada Curso de
                  Entrenamiento&nbsp; &nbsp;
                </h4>
                <p>
                  Nuestros instructores te daran todo el apoyo en cada sesion y
                  revisando tus avances en e curso logrando que termines cada
                  modulo de manea exitosa&nbsp;&nbsp;
                </p>
              </div>
            </div>
            <div class="card">
              <img class="card-image" src={asesoria} alt="alternative" />
              <div class="card-body">
                <h4 class="card-title">
                  Asesoria para que logres alcanzar tu Certificación
                  Internacional&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </h4>
                <p>
                  Somos un centro de certificacion autorizado por CertiPort y te
                  daremos acceso a material y simuladores para que puedas
                  lograr&nbsp; tu certificacion de la mano tambien de&nbsp;
                  nuestros instructores compartiran su experiencia y&nbsp; te
                  brindaran contenido y simulacros de examenes &nbsp; para que
                  puedas rendir y aprobar tu examen de certificacion&nbsp;&nbsp;
                </p>
              </div>
            </div>
            <div class="card">
              <img class="card-image" src={asesoriaTutoria} alt="alternative" />
              <div class="card-body">
                <h4 class="card-title">
                  Diseñamos Planes de Entrenamiento Personalizados para Empresas
                </h4>
                <p>
                  A nivel empresarial preparamos cursos de entrenamiento que
                  aporten productividad en tu centro de trabajo y&nbsp;
                  brindamos horarios flexibles para que puedan capacitarte de
                  acuerdo a necesidades profesionales
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
