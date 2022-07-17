import React from "react";
import "../../css/fontawesome-all.css";
import "../../css/magnific-popup.css";
import "../../css/styles.css";
import "../../css/swiper.css";
import "./footer.css";

export const Footer = () => {
  return (
    <>
      <>
        <div class="footer">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="footer-col">
                  <h4>Acerca IT Center Learning</h4>
                  <p>
                    Nuestra pasion es lograr tu exito profesional a lo largo de
                    tu camino en la carrera de las tecnologias de la informacion
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="footer-col middle">
                  <h4>Links de Interes </h4>
                  <ul class="list-unstyled li-space-lg">
                    <li class="media">
                      <i class="fas fa-square"></i>
                      <div class="media-body">
                        Nuestra Empresa{" "}
                        <a class="turquoise" href="#your-link">
                          itcenterlearning.com
                        </a>
                      </div>
                    </li>
                    <li class="media">
                      <i class="fas fa-square"></i>
                      <div class="media-body">
                        Nuestras Politicas de Privacidad{" "}
                        <a class="turquoise" href="terms-conditions.html">
                          Terms & Conditions
                        </a>
                        ,{" "}
                        <a class="turquoise" href="privacy-policy.html">
                          Privacy Policy
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-4">
                <div class="footer-col last">
                  <h4>Social Media</h4>
                  <span class="fa-stack">
                    <a href="#your-link">
                      <i class="fas fa-circle fa-stack-2x"></i>
                      <i class="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                  </span>
                  <span class="fa-stack">
                    <a href="#your-link">
                      <i class="fas fa-circle fa-stack-2x"></i>
                      <i class="fab fa-twitter fa-stack-1x"></i>
                    </a>
                  </span>
                  <span class="fa-stack">
                    <a href="#your-link">
                      <i class="fas fa-circle fa-stack-2x"></i>
                      <i class="fab fa-google-plus-g fa-stack-1x"></i>
                    </a>
                  </span>
                  <span class="fa-stack">
                    <a href="#your-link">
                      <i class="fas fa-circle fa-stack-2x"></i>
                      <i class="fab fa-instagram fa-stack-1x"></i>
                    </a>
                  </span>
                  <span class="fa-stack">
                    <a href="#your-link">
                      <i class="fas fa-circle fa-stack-2x"></i>
                      <i class="fab fa-linkedin-in fa-stack-1x"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <br />
      <br />
      <br />
    </>
  );
};
