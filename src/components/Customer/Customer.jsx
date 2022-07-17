import React from "react";
import customerOne from "../../image/customer-logo-1.png";
import customerTwo from "../../image/customer-logo-2.png";
import customerThree from "../../image/customer-logo-3.png";
import customerFour from "../../image/customer-logo-4.png";
import customerFive from "../../image/customer-logo-5.png";
import customerSix from "../../image/customer-logo-6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
// import "../../css/boostrap.css";
import "../../css/fontawesome-all.css";
import "../../css/magnific-popup.css";
import "../../css/styles.css";
// import "../../css/swiper.css";
import "./customer.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const data = [
  {
    id: 1,
    img: customerOne,
  },
  {
    id: 2,
    img: customerTwo,
  },
  {
    id: 3,
    img: customerThree,
  },
  {
    id: 4,
    img: customerFour,
  },
  {
    id: 5,
    img: customerFive,
  },
  {
    id: 6,
    img: customerSix,
  },
];
const image = [];
export const Customer = () => {
  return (
    <div class="slider-1">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h5>Empresas Reconocidas en Tecnologia a Nivel Mundial</h5>

            <div class="slider-container">
              <div class="swiper-container image-slider">
                <div class="swiper-wrapper">
                  <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    // navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    {data.map((user) => (
                      <SwiperSlide key={user.id} className="swiper-slide">
                        <div className="image-container">
                          <img
                            src={user.img}
                            alt=""
                            className="img-responsive"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  {/* <div class="swiper-slide">
                    <div class="image-container">
                      <img
                        class="img-responsive"
                        src={customerOne}
                        alt="alternative"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="image-container">
                      <img
                        class="img-responsive"
                        src={customerTwo}
                        alt="alternative"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="image-container">
                      <img
                        class="img-responsive"
                        src={customerThree}
                        alt="alternative"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="image-container">
                      <img
                        class="img-responsive"
                        src={customerFour}
                        alt="alternative"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="image-container">
                      <img
                        class="img-responsive"
                        src={customerFive}
                        alt="alternative"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="image-container">
                      <img
                        class="img-responsive"
                        src={customerSix}
                        alt="alternative"
                      />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
