import React from "react";
import keylaDolores from "../../image/keyla.jpg";
import luisGalvez from "../../image/luis_galvez.jpg";
import adrianFernandez from "../../image/adrian.jpg";
import davidVega from "../../image/david_vega.jpg";
import gonzaloBissiio from "../../image/david_osorio.jpg";
import "../../css/fontawesome-all.css";
import "../../css/magnific-popup.css";
import "../../css/styles.css";
import "../../css/swiper.css";
import "./about.css";

export const About = () => {
  return (
    <div id="about" class="basic-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2>Nuestro Team de Instructores Certificados</h2>
            <p class="p-heading p-large">
              Contamos con un equipo de instructores altamente calificados y con
              una amplia experiencia en el campo empresarial quienes estan a
              cargo de los cursos y que te guiaran en el proceso de aprendizaje
              para que logres la certificacion internacional en cada unos de
              cursos de especializacion que ellos imparten
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="team-member">
              <div class="image-wrapper">
                <img class="img-fluid" src={keylaDolores} alt="alternative" />
              </div>
              <p class="p-large">
                <strong>Keyla Dolores</strong>
              </p>
              <p class="job-title">Microsoft Certificate Trainer</p>
              <p class="job-title">MTC</p>
              <span class="social-icons">
                <span class="fa-stack">
                  <a href="#your-link">
                    <i class="fas fa-circle fa-stack-2x facebook"></i>
                    <i class="fab fa-facebook-f fa-stack-1x"></i>
                  </a>
                </span>
                <span class="fa-stack">
                  <a href="#your-link">
                    <i class="fas fa-circle fa-stack-2x twitter"></i>
                    <i class="fab fa-twitter fa-stack-1x"></i>
                  </a>
                </span>
              </span>
            </div>

            <div class="team-member">
              <div class="image-wrapper">
                <img class="img-fluid" src={luisGalvez} alt="alternative" />
              </div>
              <p class="p-large">
                <strong>Luis Galvez</strong>
              </p>
              <p class="job-title">Instructor Cisco CyberOps</p>
              <p class="job-title">CCNAI&nbsp;</p>
              <span class="social-icons">
                <span class="fa-stack">
                  <a href="#your-link">
                    <i class="fas fa-circle fa-stack-2x facebook"></i>
                    <i class="fab fa-facebook-f fa-stack-1x"></i>
                  </a>
                </span>
                <span class="fa-stack">
                  <a href="#your-link">
                    <i class="fas fa-circle fa-stack-2x twitter"></i>
                    <i class="fab fa-twitter fa-stack-1x"></i>
                  </a>
                </span>
              </span>
            </div>

            <div class="team-member">
              <div class="image-wrapper">
                <img
                  class="img-fluid"
                  src={adrianFernandez}
                  alt="alternative"
                />
              </div>
              <p class="p-large">
                <strong>Adrian Fernandez</strong>
              </p>
              <p class="job-title">Microsoft Certificate Trainer</p>
              <p class="job-title">MTC</p>
              <span class="social-icons">
                <span class="fa-stack">
                  <a href="#your-link">
                    <i class="fas fa-circle fa-stack-2x facebook"></i>
                    <i class="fab fa-facebook-f fa-stack-1x"></i>
                  </a>
                </span>
                <span class="fa-stack">
                  <a href="#your-link">
                    <i class="fas fa-circle fa-stack-2x twitter"></i>
                    <i class="fab fa-twitter fa-stack-1x"></i>
                  </a>
                </span>
              </span>
            </div>
            <div class="team-member">
              <div class="image-wrapper">
                <img class="img-fluid" src={davidVega} alt="alternative" />
              </div>
              <p class="p-large">
                <strong>David Vega&nbsp;</strong>
              </p>
              <p class="job-title">Instructor Cisco Security</p>
              <p class="job-title">CCNAI&nbsp;</p>
              <span class="social-icons">
                <span class="fa-stack">
                  <a href="#your-link">
                    <i class="fas fa-circle fa-stack-2x facebook"></i>
                    <i class="fab fa-facebook-f fa-stack-1x"></i>
                  </a>
                </span>
                <span class="fa-stack">
                  <a href="#your-link">
                    <i class="fas fa-circle fa-stack-2x twitter"></i>
                    <i class="fab fa-twitter fa-stack-1x"></i>
                  </a>
                </span>
              </span>
            </div>
            <div class="team-member">
              <div class="image-wrapper">
                <img class="img-fluid" src={gonzaloBissiio} alt="alternative" />
              </div>
              <p class="p-large">
                <strong>Gonzalo Bissio</strong>
              </p>
              <p class="job-title">Microsoft Certificate&nbsp; Trainer</p>
              <p class="job-title">MTC&nbsp;</p>
              <span class="social-icons">
                <span class="fa-stack">
                  <a href="#your-link">
                    <i class="fas fa-circle fa-stack-2x facebook"></i>
                    <i class="fab fa-facebook-f fa-stack-1x"></i>
                  </a>
                </span>
                <span class="fa-stack">
                  <a href="#your-link">
                    <i class="fas fa-circle fa-stack-2x twitter"></i>
                    <i class="fab fa-twitter fa-stack-1x"></i>
                  </a>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
