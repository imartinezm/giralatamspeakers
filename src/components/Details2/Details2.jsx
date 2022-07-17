import React from "react";
import teamWork from "../../image/details-2-office-team-work.svg";
import "../../css/fontawesome-all.css";
import "../../css/magnific-popup.css";
import "../../css/styles.css";
import "../../css/swiper.css";
import "./details2.css";

export const Details2 = () => {
  return (
    <div class="basic-2">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="image-container">
              <img class="img-fluid" src={teamWork} alt="alternative" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="text-container">
              <h2>
                Entrenamiento Remoto donde te encuentres y desde cualquier
                dispositivo donde te conectes
              </h2>
              <ul class="list-unstyled li-space-lg">
                <li class="media">
                  <i class="fas fa-check"></i>
                  <div class="media-body">
                    <strong>
                      Desde la comodadidad de tu casa o oficina&nbsp;
                    </strong>
                  </div>
                </li>
                <li class="media">
                  <i class="fas fa-check"></i>
                  <div class="media-body">
                    <strong>a traves de Microsoft Teams</strong>
                  </div>
                </li>
                <li class="media">
                  <i class="fas fa-check"></i>
                  <div class="media-body">
                    <strong>Desde tu tablet o telefono</strong>
                  </div>
                </li>
                <li class="media">
                  <i class="fas fa-check"></i>
                  <div class="media-body">
                    <strong>
                      Desarrollamos entrenamiento Empresarial
                      personalizados&nbsp;&nbsp;
                    </strong>
                  </div>
                </li>
                <li class="media">
                  <i class="fas fa-check"></i>
                  <div class="media-body">
                    <strong>
                      Contamos con una plataforma virtual para tu rapido acceso
                    </strong>{" "}
                  </div>
                </li>
              </ul>
              <a class="btn-solid-reg popup-with-move-anim">Ver mas</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
