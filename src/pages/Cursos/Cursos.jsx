import React from "react";
import az900 from "../../image/az-900.png";
import az104 from "../../image/az104.png";
import az500 from "../../image/az500.png";
import windowServer2019 from "../../image/Windows_Server_2019_Administration_2x.png";
import wdServerhibrido from "../../image/Windows_Server_2019_Hybrid_and_Azure_IaaS_2x.png";
import ddls from "../../image/DDLS_MS_WS-013T00.png";
import ccna1 from "../../image/ccna1.png";
import ccna2 from "../../image/ccna2.png";
import ccna3 from "../../image/ccna3.png";
import ciscoNet from "../../image/ciscodevnet.png";
import python from "../../image/pyhton.png";
import cyberOps from "../../image/cyberops.png";
import excelBook from "../../image/Excel_Bookman.png";
import excelExpert from "../../image/excelExpert.png";
import excelMaster from "../../image/Master-EXCEL.png";
import excelDashboard from "../../image/dashboardexcel-N.png";
import powerBi from "../../image/Power-BI-N.png";
import "../../css/fontawesome-all.css";
import "../../css/magnific-popup.css";
import "../../css/styles.css";
import "../../css/swiper.css";
import "./curso.css";

export const Cursos = () => {
  return (
    <div id="pricing" class="cards-2">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2>Nuestros Cursos de Entrenamiento TI</h2>
            <p class="p-heading p-large">
              Aqui te mostramos los cursos que estamos ofreciendo 100% practicos
              con Instructores Calificados y estan diseñados para tu crecimiento
              profesional en el area TI y estamos seguros que te aportaran a tu
              desarrollo profesional y en la de tu Organizacion{" "}
              <strong>
                .Contamos con un Sistema de Pagos por cuotas para nuestros
                alumnos en todos los cursos.
              </strong>
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12">
            {/* CARD  */}
            <div class="card">
              <div class="label">
                <p class="best-value">Inscribete</p>
              </div>
              <div class="card-body">
                <div class="card-title">
                  Curso Microsoft <br /> Azure Fundamentals AZ-900
                </div>
                <img src={az900} width="230" height="230" alt="" />
                <div>&nbsp;</div>
                <hr class="cell-divide-hr" />
                <div class="price">
                  <span class="currency">&nbsp;</span>
                  <span class="value">&nbsp;</span>
                  <div class="frequency">
                    <p>
                      <strong>Duracion 3 meses</strong>
                    </p>
                    <p>
                      <strong>Inicio 15 de Abril 2022</strong>
                    </p>
                  </div>
                </div>
                <hr class="cell-divide-hr" />
                <ul class="list-unstyled li-space-lg">
                  <li class="media">
                    <i class="fas fa-check"></i>
                    <div class="media-body">
                      Laboratorios 100% Practicos&nbsp;
                    </div>
                  </li>
                  <li class="media">
                    <i class="fas fa-check"></i>
                    <div class="media-body">
                      Materiales Digital del curso &nbsp;
                    </div>
                  </li>
                  <li class="media">
                    <i class="fas fa-check"></i>
                    <div class="media-body">
                      Instructores del curso Certificados&nbsp;
                    </div>
                  </li>
                  <li class="media">
                    <i class="fas fa-check"></i>
                    <div class="media-body">
                      Examenes Practicos por cada sesion de clase
                    </div>
                  </li>
                  <li class="media">
                    <i class="fas fa-check"></i>
                    <div class="media-body">
                      {" "}
                      Entrenamiento y Simulacion de examenes
                    </div>
                  </li>
                </ul>
                <div class="button-wrapper">
                  <a class="btn-solid-reg page-scroll" href="#fundamentals">
                    Conoce mas &nbsp;
                  </a>
                </div>
              </div>
            </div>

            {/* CARD  */}
            <div class="card">
              <div class="label">
                <p class="best-value">Inscribete</p>
              </div>
              <div class="card-body">
                <div class="card-title">
                  {" "}
                  Curso Microsoft Azure Administrator AZ-104{" "}
                </div>
                <img src={az104} width="215" height="215" alt="" />
                <div class="card-subtitle">&nbsp;</div>
                <hr class="cell-divide-hr" />
                <div class="price">
                  <span class="currency">&nbsp;</span>
                  <span class="value">&nbsp;</span>
                  <div class="frequency">
                    <p>
                      <strong>Duracion 4 meses</strong>&nbsp;
                    </p>
                    <p>
                      <strong>Inicio 15 de Abril 2022</strong>&nbsp;
                    </p>
                  </div>
                </div>
                <hr class="cell-divide-hr" />
                <hr class="cell-divide-hr" />
                <ul class="list-unstyled li-space-lg">
                  <li class="media">
                    <i class="fas fa-check"></i>
                    <div class="media-body">
                      Laboratorios 100% Practicos&nbsp;
                    </div>
                  </li>
                  <li class="media">
                    <i class="fas fa-check"></i>
                    <div class="media-body">
                      Materiales Digital del curso &nbsp;
                    </div>
                  </li>
                  <li class="media">
                    <i class="fas fa-check"></i>
                    <div class="media-body">
                      Instructores del curso Certificados&nbsp;
                    </div>
                  </li>
                  <li class="media">
                    <i class="fas fa-check"></i>
                    <div class="media-body">
                      Examenes Practicos por cada sesion de clase
                    </div>
                  </li>
                  <li class="media">
                    <i class="fas fa-check"></i>
                    <div class="media-body">
                      {" "}
                      Entrenamiento y Simulacion de examenes
                    </div>
                  </li>
                </ul>
                <div class="button-wrapper">
                  <a class="btn-solid-reg page-scroll" href="#administrador">
                    Conoce mas &nbsp;
                  </a>
                </div>
              </div>
            </div>

            {/* CARD  */}
            <div class="card">
              <div class="label">
                <p class="best-value">Inscribete</p>
              </div>
              <div class="card-body">
                <div class="card-title">
                  Curso Microsoft Azure Security Technologies&nbsp; &nbsp;AZ-500
                </div>
                <img src={az500} width="221" height="221" alt="" />
                <div class="card-subtitle">&nbsp;</div>
                <hr class="cell-divide-hr" />
                <div class="price">
                  <span class="currency">&nbsp;</span>
                  <span class="value">&nbsp;</span>
                  <div class="frequency">
                    <p>
                      <strong>Duracion x 3 meses</strong>&nbsp;
                    </p>
                    <p>
                      <strong>Inicio 15 de Abril 2022</strong>&nbsp;
                    </p>
                  </div>
                </div>
                <hr class="cell-divide-hr" />
                <hr class="cell-divide-hr" />
                <ul class="list-unstyled li-space-lg">
                  <li class="media">
                    <i class="fas fa-check"></i>
                    <div class="media-body">
                      Laboratorios 100% Practicos&nbsp;
                    </div>
                  </li>
                  <li class="media">
                    <i class="fas fa-check"></i>
                    <div class="media-body">
                      Materiales Digital del curso &nbsp;
                    </div>
                  </li>
                  <li class="media">
                    <i class="fas fa-check"></i>
                    <div class="media-body">
                      Instructores del curso Certificados&nbsp;
                    </div>
                  </li>
                  <li class="media">
                    <i class="fas fa-check"></i>
                    <div class="media-body">
                      Examenes Practicos por cada sesion de clase
                    </div>
                  </li>
                  <li class="media">
                    <i class="fas fa-check"></i>
                    <div class="media-body">
                      {" "}
                      Entrenamiento y Simulacion de examenes
                    </div>
                  </li>
                </ul>
                <div class="button-wrapper">
                  <a class="btn-solid-reg page-scroll" href="#request">
                    Conoce mas{" "}
                  </a>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12">
                {/* CARD  */}
                <div class="card">
                  <div class="label">
                    <p class="best-value">Inscribete</p>
                  </div>
                  <div class="card-body">
                    <div class="card-title">
                      Curso Microsoft <br />
                      Administration Windows Server 2019
                    </div>
                    <img
                      src={windowServer2019}
                      width="220"
                      height="221"
                      alt=""
                    />
                    <div>&nbsp;</div>
                    <hr class="cell-divide-hr" />
                    <div class="price">
                      <span class="currency">&nbsp;</span>
                      <span class="value">&nbsp;</span>
                      <div class="frequency">
                        <p>
                          <strong>Duracion 2 mes</strong>
                        </p>
                        <p>
                          <strong>Inicio 15 de Abril 2022</strong>
                        </p>
                      </div>
                    </div>
                    <hr class="cell-divide-hr" />
                    <ul class="list-unstyled li-space-lg">
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Laboratorios 100% Practicos&nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Materiales Digital del curso &nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Instructores del curso Certificados&nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Examenes Practicos por cada sesion de clase
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          {" "}
                          Entrenamiento y Simulacion de examenes
                        </div>
                      </li>
                    </ul>
                    <div class="button-wrapper">
                      <a class="btn-solid-reg page-scroll" href="#fundamentals">
                        Conoce mas &nbsp;
                      </a>
                    </div>
                  </div>
                </div>

                {/* CARD */}
                <div class="card">
                  <div class="label">
                    <p class="best-value">Inscribete</p>
                  </div>
                  <div class="card-body">
                    <div class="card-title">
                      Curso Microsoft Windows Server 2019 Hybrid and Azure IaaS{" "}
                    </div>
                    <img
                      src={wdServerhibrido}
                      width="205"
                      height="204"
                      alt=""
                    />
                    <div class="card-subtitle">&nbsp;</div>
                    <hr class="cell-divide-hr" />
                    <div class="price">
                      <span class="currency">&nbsp;</span>
                      <span class="value">&nbsp;</span>
                      <div class="frequency">
                        <p>
                          <strong>Duracion 2 meses</strong>&nbsp;
                        </p>
                        <p>
                          <strong>Inicio 15 de Abril 2022</strong>&nbsp;
                        </p>
                      </div>
                    </div>
                    <hr class="cell-divide-hr" />
                    <hr class="cell-divide-hr" />
                    <ul class="list-unstyled li-space-lg">
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Laboratorios 100% Practicos&nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Materiales Digital del curso &nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Instructores del curso Certificados&nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Examenes Practicos por cada sesion de clase
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          {" "}
                          Entrenamiento y Simulacion de examenes
                        </div>
                      </li>
                    </ul>
                    <div class="button-wrapper">
                      <a
                        class="btn-solid-reg page-scroll"
                        href="#administrador"
                      >
                        Conoce mas &nbsp;
                      </a>
                    </div>
                  </div>
                </div>

                {/* CARD  */}
                <div class="card">
                  <div class="label">
                    <p class="best-value">Inscribete</p>
                  </div>
                  <div class="card-body">
                    <div class="card-title">
                      Curso Microsoft Windows Server 2019&nbsp; Azure Stack
                      HCI&nbsp; &nbsp;
                    </div>
                    <img src={ddls} width="205" height="205" alt="" />
                    <div class="card-subtitle">&nbsp;</div>
                    <hr class="cell-divide-hr" />
                    <div class="price">
                      <span class="currency">&nbsp;</span>
                      <span class="value">&nbsp;</span>
                      <div class="frequency">
                        <p>
                          <strong>Duracion x 2 meses</strong>&nbsp;
                        </p>
                        <p>
                          <strong>Inicio 15 de Abril 2022</strong>&nbsp;
                        </p>
                      </div>
                    </div>
                    <hr class="cell-divide-hr" />
                    <hr class="cell-divide-hr" />
                    <ul class="list-unstyled li-space-lg">
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Laboratorios 100% Practicos&nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Materiales Digital del curso &nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Instructores del curso Certificados&nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Examenes Practicos por cada sesion de clase
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          {" "}
                          Entrenamiento y Simulacion de examenes
                        </div>
                      </li>
                    </ul>
                    <div class="button-wrapper">
                      <a class="btn-solid-reg page-scroll" href="#request">
                        Conoce mas{" "}
                      </a>
                    </div>
                  </div>
                </div>

                {/* CARD*/}
                <div class="card">
                  <div class="label">
                    <p class="best-value">Inscribete</p>
                  </div>
                  <div class="card-body">
                    <div class="card-title">
                      {" "}
                      Curso Cisco <br />
                      CCNA ver 7.2 Introduction to Networks
                      <br />
                      <br />
                      <br /> Exam-200-301
                    </div>
                    <img src={ccna1} width="225" height="228" alt="" />
                    <div class="card-subtitle">&nbsp;</div>
                    <hr class="cell-divide-hr" />
                    <div class="price">
                      <span class="currency">&nbsp;</span>
                      <span class="value">&nbsp;</span>
                      <div class="frequency">
                        <p>
                          <strong>Duracion 3 meses</strong>&nbsp;
                        </p>
                        <p>
                          <strong>Inicio 15 de Abril 2022</strong>&nbsp;
                        </p>
                      </div>
                    </div>
                    <hr class="cell-divide-hr" />
                    <hr class="cell-divide-hr" />
                    <ul class="list-unstyled li-space-lg">
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Laboratorios 100% Practicos&nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Materiales Digital del curso &nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Instructores del curso Certificados&nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Examenes Practicos por cada sesion de clase
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          {" "}
                          Entrenamiento y Simulacion de examenes
                        </div>
                      </li>
                    </ul>
                    <div class="button-wrapper">
                      <a class="btn-solid-reg page-scroll" href="#request">
                        Conoce mas &nbsp;
                      </a>
                    </div>
                  </div>
                </div>

                {/* CARD  */}
                <div class="card">
                  <div class="label">
                    <p class="best-value">Inscribete</p>
                  </div>
                  <div class="card-body">
                    <div class="card-title">
                      Curso Cisco CCNA ver 7.2&nbsp; Switching, Routing and
                      Wireless Essentials Exam-200-301
                    </div>
                    <img src={ccna2} width="225" height="228" alt="" />
                    <div class="card-subtitle">&nbsp;</div>
                    <hr class="cell-divide-hr" />
                    <div class="price">
                      <span class="currency">&nbsp;</span>
                      <span class="value">&nbsp;</span>
                      <div class="frequency">
                        <p>
                          <strong>Duracion 3 meses</strong>&nbsp;
                        </p>
                        <p>
                          <strong>Inicio 15 de Abril 2022</strong>&nbsp;
                        </p>
                      </div>
                    </div>
                    <hr class="cell-divide-hr" />
                    <hr class="cell-divide-hr" />
                    <ul class="list-unstyled li-space-lg">
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Laboratorios 100% Practicos&nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Materiales Digital del curso &nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Instructores del curso Certificados&nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Examenes Practicos por cada sesion de clase
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          {" "}
                          Entrenamiento y Simulacion de examenes
                        </div>
                      </li>
                    </ul>
                    <div class="button-wrapper">
                      <a class="btn-solid-reg page-scroll" href="#request">
                        Conoce mas &nbsp;
                      </a>
                    </div>
                  </div>
                </div>

                {/* CARD  */}
                <div class="card">
                  <div class="label">
                    <p class="best-value">Inscribete</p>
                  </div>
                  <div class="card-body">
                    <div class="card-title">
                      Curso Cisco CCNA&nbsp;ver 7.2&nbsp; &nbsp; Enterprise
                      Networking, Security and Automation&nbsp; Exam-200-301
                    </div>
                    <img src={ccna3} width="228" height="225" alt="" />
                    <div class="card-subtitle">&nbsp;</div>
                    <hr class="cell-divide-hr" />
                    <div class="price">
                      <span class="currency">&nbsp;</span>
                      <span class="value">&nbsp; </span>
                      <div class="frequency">
                        <p>
                          <strong>Duracion 3 meses</strong>&nbsp;
                        </p>
                        <p>
                          <strong>Inicio 15 de Abril 2022</strong>&nbsp;
                        </p>
                      </div>
                    </div>
                    <hr class="cell-divide-hr" />
                    <hr class="cell-divide-hr" />
                    <ul class="list-unstyled li-space-lg">
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Laboratorios 100% Practicos&nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Materiales Digital del curso &nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Instructores del curso Certificados&nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Examenes Practicos por cada sesion de clase
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          {" "}
                          Entrenamiento y Simulacion de examenes
                        </div>
                      </li>
                    </ul>
                    <div class="button-wrapper">
                      <a class="btn-solid-reg page-scroll" href="#request">
                        Conoce mas&nbsp;
                      </a>
                    </div>
                  </div>
                </div>

                {/* CARD  */}
                <div class="card">
                  <div class="label">
                    <p class="best-value">Inscribete</p>
                  </div>
                  <div class="card-body">
                    <div class="card-title">
                      Curso Cisco Certificated DevNet&nbsp; Asociate
                      <br />
                    </div>
                    <img src={ciscoNet} width="220" height="220" alt="" />
                    <div class="card-subtitle">&nbsp;</div>
                    <hr class="cell-divide-hr" />
                    <div class="price">
                      <span class="currency">&nbsp;</span>
                      <span class="value">&nbsp;</span>
                      <div class="frequency">
                        <p>
                          <strong>Duracion 72 Horas</strong>&nbsp;
                        </p>
                        <p>
                          <strong>Inicio 15 de Abril 2022</strong>&nbsp;
                        </p>
                      </div>
                    </div>
                    <hr class="cell-divide-hr" />
                    <hr class="cell-divide-hr" />
                    <ul class="list-unstyled li-space-lg">
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Laboratorios 100% Practicos&nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Materiales Digital del curso &nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Instructores del curso Certificados&nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Examenes Practicos por cada sesion de clase
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          {" "}
                          Entrenamiento y Simulacion de examenes
                        </div>
                      </li>
                    </ul>
                    <div class="button-wrapper">
                      <a class="btn-solid-reg page-scroll" href="#request">
                        Conoce mas &nbsp;
                      </a>
                    </div>
                  </div>
                </div>

                {/* CARD  */}
                <div class="card">
                  <div class="label">
                    <p class="best-value">Inscribete</p>
                  </div>
                  <div class="card-body">
                    <div class="card-title">
                      Curso Cisco Automatizacionde Redes con Python &nbsp;
                      &nbsp;
                    </div>
                    <img src={python} width="221" height="220" alt="" />
                    <div class="card-subtitle">&nbsp;</div>
                    <hr class="cell-divide-hr" />
                    <div class="price">
                      <span class="currency">&nbsp;</span>
                      <span class="value">&nbsp;</span>
                      <div class="frequency">
                        <p>
                          <strong>Duracion 92 Horas</strong>&nbsp;
                        </p>
                        <p>
                          <strong>Inicio 15 de Abril 2022</strong>&nbsp;
                        </p>
                      </div>
                    </div>
                    <hr class="cell-divide-hr" />
                    <hr class="cell-divide-hr" />
                    <ul class="list-unstyled li-space-lg">
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Laboratorios 100% Practicos&nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Materiales Digital del curso &nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Instructores del curso Certificados&nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Examenes Practicos por cada sesion de clase
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          {" "}
                          Entrenamiento y Simulacion de examenes
                        </div>
                      </li>
                    </ul>
                    <div class="button-wrapper">
                      <a class="btn-solid-reg page-scroll" href="#request">
                        Conoce mas &nbsp;
                      </a>
                    </div>
                  </div>
                </div>

                {/* CARD  */}
                <div class="card">
                  <div class="label">
                    <p class="best-value">Inscribete</p>
                  </div>
                  <div class="card-body">
                    <div class="card-title">
                      Curso Cisco Certificated CyberOps Asociate
                    </div>
                    <img src={cyberOps} width="222" height="220" alt="" />
                    <div class="card-subtitle">&nbsp;</div>
                    <hr class="cell-divide-hr" />
                    <div class="price">
                      <span class="currency">&nbsp;</span>
                      <span class="value">&nbsp;</span>
                      <div class="frequency">
                        <p>
                          <strong>Duracion 72 Horas</strong>&nbsp;
                        </p>
                        <p>
                          <strong>Inicio 15 de Abril 2022</strong>&nbsp;
                        </p>
                      </div>
                    </div>
                    <hr class="cell-divide-hr" />
                    <hr class="cell-divide-hr" />
                    <ul class="list-unstyled li-space-lg">
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Laboratorios 100% Practicos&nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Materiales Digital del curso &nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Instructores del curso Certificados&nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Examenes Practicos por cada sesion de clase
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          {" "}
                          Entrenamiento y Simulacion de examenes
                        </div>
                      </li>
                    </ul>
                    <div class="button-wrapper">
                      <a class="btn-solid-reg page-scroll" href="#request">
                        Conoce mas &nbsp;
                      </a>
                    </div>
                  </div>
                </div>

                {/* CARD */}
                <div class="card">
                  <div class="label">
                    <p class="best-value">Inscribete</p>
                  </div>
                  <div class="card-body">
                    <div class="card-title">
                      Curso Microsoft Office Specialist Excel
                      <br />
                    </div>
                    <img src={excelBook} width="207" height="222" alt="" />
                    <div class="card-subtitle">&nbsp;</div>
                    <hr class="cell-divide-hr" />
                    <div class="price">
                      <span class="currency">&nbsp;</span>
                      <span class="value">&nbsp;</span>
                      <div class="frequency">
                        <p>
                          <strong>Duracion 20 Horas</strong>&nbsp;
                        </p>
                        <p>
                          <strong>Inicio 15 de Abril 2022</strong>&nbsp;
                        </p>
                      </div>
                    </div>
                    <hr class="cell-divide-hr" />
                    <hr class="cell-divide-hr" />
                    <ul class="list-unstyled li-space-lg">
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Laboratorios 100% Practicos&nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Materiales Digital del curso &nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Instructores del curso Certificados&nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Examenes Practicos por cada sesion de clase
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          {" "}
                          Entrenamiento y Simulacion de examenes
                        </div>
                      </li>
                    </ul>
                    <div class="button-wrapper">
                      <a class="btn-solid-reg page-scroll" href="#request">
                        Conoce mas &nbsp;
                      </a>
                    </div>
                  </div>
                </div>

                {/* CARD  */}
                <div class="card">
                  <div class="label">
                    <p class="best-value">Inscribete</p>
                  </div>
                  <div class="card-body">
                    <div class="card-title">
                      Curso Microsoft Office Expert Excel
                    </div>
                    <img src={excelExpert} width="222" height="222" alt="" />
                    <div class="card-subtitle">&nbsp;</div>
                    <hr class="cell-divide-hr" />
                    <div class="price">
                      <span class="currency">&nbsp;</span>
                      <span class="value">&nbsp;</span>
                      <div class="frequency">
                        <p>
                          <strong>Duracion 20 Horas</strong>&nbsp;
                        </p>
                        <p>
                          <strong>Inicio 15 de Abril 2022</strong>&nbsp;
                        </p>
                      </div>
                    </div>
                    <hr class="cell-divide-hr" />
                    <hr class="cell-divide-hr" />
                    <ul class="list-unstyled li-space-lg">
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Laboratorios 100% Practicos&nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Materiales Digital del curso &nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Instructores del curso Certificados&nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Examenes Practicos por cada sesion de clase
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          {" "}
                          Entrenamiento y Simulacion de examenes
                        </div>
                      </li>
                    </ul>
                    <div class="button-wrapper">
                      <a class="btn-solid-reg page-scroll" href="#request">
                        Conoce mas &nbsp;
                      </a>
                    </div>
                  </div>
                </div>

                {/* CARD  */}
                <div class="card">
                  <div class="label">
                    <p class="best-value">Inscribete</p>
                  </div>
                  <div class="card-body">
                    <div class="card-title">
                      Curso Microsoft Office Master Excel
                    </div>
                    <img src={excelMaster} width="222" height="222" alt="" />
                    <div class="card-subtitle">&nbsp;</div>
                    <hr class="cell-divide-hr" />
                    <div class="price">
                      <span class="currency">&nbsp;</span>
                      <span class="value">&nbsp;</span>
                      <div class="frequency">
                        <p>
                          <strong>Duracion 20 Horas</strong>&nbsp;
                        </p>
                        <p>
                          <strong>Inicio 15 de Abril 2022</strong>&nbsp;
                        </p>
                      </div>
                    </div>
                    <hr class="cell-divide-hr" />
                    <hr class="cell-divide-hr" />
                    <ul class="list-unstyled li-space-lg">
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Laboratorios 100% Practicos&nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Materiales Digital del curso &nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Instructores del curso Certificados&nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Examenes Practicos por cada sesion de clase
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          {" "}
                          Entrenamiento y Simulacion de examenes
                        </div>
                      </li>
                    </ul>
                    <div class="button-wrapper">
                      <a class="btn-solid-reg page-scroll" href="#request">
                        Conoce mas &nbsp;
                      </a>
                    </div>
                  </div>
                </div>

                {/* CARD  */}
                <div class="card">
                  <div class="label">
                    <p class="best-value">Inscribete</p>
                  </div>
                  <div class="card-body">
                    <div class="card-title">
                      Curso Reportes DashBoard en MS-Excel&nbsp;
                    </div>
                    <img src={excelDashboard} width="220" height="220" alt="" />
                    <div class="card-subtitle">&nbsp;</div>
                    <hr class="cell-divide-hr" />
                    <div class="price">
                      <span class="currency">&nbsp;</span>
                      <span class="value">&nbsp;</span>
                      <div class="frequency">
                        <p>
                          <strong>Duracion 48 Horas</strong>&nbsp;
                        </p>
                        <p>
                          <strong>Inicio 15 de Abril 2022</strong>&nbsp;
                        </p>
                      </div>
                    </div>
                    <hr class="cell-divide-hr" />
                    <hr class="cell-divide-hr" />
                    <ul class="list-unstyled li-space-lg">
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Laboratorios 100% Practicos&nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Materiales Digital del curso &nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Instructores del curso Certificados&nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Examenes Practicos por cada sesion de clase
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          {" "}
                          Entrenamiento y Simulacion de examenes
                        </div>
                      </li>
                    </ul>
                    <div class="button-wrapper">
                      <a class="btn-solid-reg page-scroll" href="#request">
                        Conoce mas &nbsp;
                      </a>
                    </div>
                  </div>
                </div>

                {/* CARD  */}
                <div class="card">
                  <div class="label">
                    <p class="best-value">Inscribete</p>
                  </div>
                  <div class="card-body">
                    <div class="card-title">
                      Curso Microsoft Power BI-&nbsp; Basico
                    </div>
                    <img src={powerBi} width="220" height="220" alt="" />
                    <div class="card-subtitle">&nbsp;</div>
                    <hr class="cell-divide-hr" />
                    <div class="price">
                      <span class="currency">&nbsp;</span>
                      <span class="value">&nbsp;</span>
                      <div class="frequency">
                        <p>
                          <strong>Duracion 60 Horas</strong>&nbsp;
                        </p>
                        <p>
                          <strong>Inicio 15 de Abril 2022</strong>&nbsp;
                        </p>
                      </div>
                    </div>
                    <hr class="cell-divide-hr" />
                    <hr class="cell-divide-hr" />
                    <ul class="list-unstyled li-space-lg">
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Laboratorios 100% Practicos&nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Materiales Digital del curso &nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Instructores del curso Certificados&nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Examenes Practicos por cada sesion de clase
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          {" "}
                          Entrenamiento y Simulacion de examenes
                        </div>
                      </li>
                    </ul>
                    <div class="button-wrapper">
                      <a class="btn-solid-reg page-scroll" href="#request">
                        Conoce mas &nbsp;
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card */}
                <div class="card">
                  <div class="label">
                    <p class="best-value">Inscribete</p>
                  </div>
                  <div class="card-body">
                    <div class="card-title">
                      Curso Microsoft Power BI-Intermedio
                    </div>
                    <img src={powerBi} width="220" height="220" alt="" />
                    <div class="card-subtitle">&nbsp;</div>
                    <hr class="cell-divide-hr" />
                    <div class="price">
                      <span class="currency">&nbsp;</span>
                      <span class="value">&nbsp;</span>
                      <div class="frequency">
                        <p>
                          <strong>Duracion 75 Horas</strong>&nbsp;
                        </p>
                        <p>
                          <strong>Inicio 15 de Abril 2022</strong>&nbsp;
                        </p>
                      </div>
                    </div>
                    <hr class="cell-divide-hr" />
                    <hr class="cell-divide-hr" />
                    <ul class="list-unstyled li-space-lg">
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Laboratorios 100% Practicos&nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Materiales Digital del curso &nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Instructores del curso Certificados&nbsp;
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          Examenes Practicos por cada sesion de clase
                        </div>
                      </li>
                      <li class="media">
                        <i class="fas fa-check"></i>
                        <div class="media-body">
                          {" "}
                          Entrenamiento y Simulacion de examenes
                        </div>
                      </li>
                    </ul>
                    <div class="button-wrapper">
                      <a class="btn-solid-reg page-scroll" href="#request">
                        Conoce mas &nbsp;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
