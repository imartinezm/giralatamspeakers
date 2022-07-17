import React from "react";
// import "../../css/boostrap.css";
import "../../css/fontawesome-all.css";
import "../../css/magnific-popup.css";
import "../../css/styles.css";
import "../../css/swiper.css";
import "./header.css";
export const Header = () => {
  return (
    // <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      {/* <!-- Text Logo - Use this if you don't have a graphic logo -->
        <!-- <a class="navbar-brand logo-text page-scroll" href="index.html">Evolo</a> -->

        <!-- Image Logo --> */}
      <a class="navbar-brand logo-image" href="index.html"></a>

      {/* <!-- Mobile Menu Toggle Button --> */}
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-awesome fas fa-bars"></span>
        <span class="navbar-toggler-awesome fas fa-times"></span>
      </button>
      {/* <!-- end of mobile menu toggle button --> */}

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link page-scroll" href="#home">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link page-scroll" href="#services">
              Servicios
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link page-scroll" href="#pricing">
              Cursos de Entrenamiento
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link page-scroll" href="#request">
              Solicita Informacion
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link page-scroll" href="#fundamentals">
              &nbsp;
            </a>
          </li>

          {/* <!-- Dropdown Menu -->          
                
                <!-- end of dropdown menu --> */}

          <li class="nav-item">
            <a class="nav-link page-scroll" href="#contact">
              Contactenos
            </a>
          </li>
        </ul>
        <span class="nav-item social-icons">
          <span class="fa-stack">
            <a href="https://www.facebook.com/It-Center-Learning-101791619001539">
              <i class="fas fa-circle fa-stack-2x facebook"></i>
              <i class="fab fa-facebook-f fa-stack-1x"></i>
            </a>
          </span>
          <span class="fa-stack">
            <a href="https://www.facebook.com/It-Center-Learning-101791619001539">
              <i class="fas fa-circle fa-stack-2x twitter"></i>
              <i class="fab fa-twitter fa-stack-1x"></i>
            </a>
          </span>
        </span>
      </div>
    </nav>
    // <!-- end of navbar -->
    // <!-- end of navigation -->
  );
};
