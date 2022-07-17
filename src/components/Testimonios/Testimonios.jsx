import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import testimonioTalking from "../../image/testimonials-2-men-talking.svg";
import testimonioOne from "../../image/testimonial-1.svg";
import testimonioTwo from "../../image/testimonial-2.svg";
import testimonioThree from "../../image/testimonial-3.svg";
import "../../css/fontawesome-all.css";
import "../../css/magnific-popup.css";
import "../../css/styles.css";
// import "../../css/swiper.css";
import "./testimonios.css";
// import "swiper/css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const data = [
  {
    id: 1,
    username: "Julia Armas Vega - Supervisora TI",
    testimonial:
      "Los instructores explican cada una de las clases con ejemplos practicos que me permitieron lograr la certificacion ccna muchas gracias por el apoyo . ",
    img: testimonioOne,
  },
  {
    id: 2,
    username: "Maria Torres Vidal - Administradora de Redes",
    testimonial:
      "Los cursos Nube tiene el nivel adecuado en cada una de las sesiones y con los laboratorios practicos he aprendido a dominar la nube desde el nivel basico y ahora ya estoy certificada",
    img: testimonioTwo,
  },
  {
    id: 3,
    username: "Roy almeyda - Jefe TI",
    testimonial:
      "En los cursos de redes y Nube puede aprender a integrar los dos mundos y poder reforzar mi conocimiento y lograr implementarla en la empresa donde laboro muchas gracias.",
    img: testimonioThree,
  },
];
const image = [];
export const Testimonios = () => {
  return (
    <>
      <div class="slider-2">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="image-container">
                <img
                  class="img-fluid"
                  src={testimonioTalking}
                  alt="alternative"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <h2>Testimonios de nuestros alumnos</h2>

              <div className="slider-container">
                <div className="swiper-container card-slider">
                  <div className="swiper-wrapper">
                    <Swiper
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      spaceBetween={50}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}
                      // scrollbar={{ draggable: true }}
                      onSlideChange={() => console.log("slide change")}
                      onSwiper={(swiper) => console.log(swiper)}
                    >
                      {data.map((user) => (
                        <SwiperSlide key={user.id} className="swiper-slide">
                          <div className="card">
                            <div className="card-image">
                              <img
                                src={user.img}
                                alt=""
                                className="user-photo"
                              />
                            </div>
                            <div className="card-body">
                              <h5 className="testimonial-author">
                                {user.username}
                              </h5>
                              <p className="testimonial-text">
                                "<i> {user.testimonial}</i>
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
