import React from "react";
import videoFrame from "../../image/video-frame.svg";
import "../../css/styles.css";
import "../../css/swiper.css";
import "./videoTecnologico.css";

export const VideoTecnologico = () => {
  //   $(".popup-youtube, .popup-vimeo").magnificPopup({
  //     disableOn: 700,
  //     type: "iframe",
  //     mainClass: "mfp-fade",
  //     removalDelay: 160,
  //     preloader: false,
  //     fixedContentPos: false,
  //     iframe: {
  //       patterns: {
  //         youtube: {
  //           index: "youtube.com/",
  //           id: function (url) {
  //             var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
  //             if (!m || !m[1]) return null;
  //             return m[1];
  //           },
  //           src: "https://www.youtube.com/embed/%id%?autoplay=1",
  //         },
  //         vimeo: {
  //           index: "vimeo.com/",
  //           id: function (url) {
  //             var m = url.match(
  //               /(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/
  //             );
  //             if (!m || !m[5]) return null;
  //             return m[5];
  //           },
  //           src: "https://player.vimeo.com/video/%id%?autoplay=1",
  //         },
  //       },
  //     },
  //   });
  return (
    <>
      <div class="basic-3">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2>
                Conoce las Ventajas de las Nuevas Tecnologias en la Empresas
              </h2>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="image-container">
                <div class="video-wrapper">
                  <a
                    class="popup-youtube"
                    href="https://www.youtube.com/watch?v=qbGugMBhzGg"
                    data-effect="fadeIn"
                  >
                    <img class="img-fluid" src={videoFrame} alt="alternative" />
                    <span class="video-play-button">
                      <span></span>
                    </span>
                  </a>
                </div>
              </div>

              <p class="text-justify">
                En este video podras conocer las ventajas que trae consigo el
                uso de nuevas tecnologias de la informacion a las orgamizaciones
                de hoy en dia y que hoy muchos profesionales capacitados aportan
                a sus organizacion e implementan innovacion en cada una de ellas
                generando competividad en el mercado empresarial asi que estare
                preparado con nuestros cursos de entrenamiento en Tecnologias de
                la Informacion <strong> </strong>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
