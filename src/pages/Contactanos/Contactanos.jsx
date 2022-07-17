import React from "react";
import { useForm } from "../../hooks/useForm";
import "../../css/fontawesome-all.css";
import "../../css/magnific-popup.css";
import "../../css/styles.css";
import "../../css/swiper.css";
import "./contactanos.css";

export const Contactanos = () => {
  const initialForm = {
    name: "",
    email: "",
    comments: "",
    terms: "",
  };
  const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if (!form.name.trim()) {
      errors.name = "Ingresar Nombres y apellidos completo";
    } else if (!regexName.test(form.name.trim())) {
      errors.name = "Este campo solo se acepta letras y espacios en blanco";
    }

    if (!form.email.trim()) {
      errors.email = "Ingrese su correo";
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = "Por favor colocar correo valido";
    }

    if (!form.comments.trim()) {
      errors.comments = "Se requiere completar este campo";
    } else if (!regexComments.test(form.comments.trim())) {
      errors.comments = "Este campo no debe de exceder de los 255 palabras";
    }
    if (!form.terms.trim()) {
      errors.terms = "Este campo es requerido";
    }

    return errors;
  };
  let styles = {
    fontWeight: "bold",
    color: "#dc3545",
  };
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    handleChecked,
  } = useForm(initialForm, validationsForm);
  return (
    <div id="contact" class="form-2">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2>Formulario de Consultas</h2>
            <ul class="list-unstyled li-space-lg">
              <li class="address">
                Cualquier duda o consulta sobre los cursos de Entrenamiento en
                lo que deseas participar estamos para ayudarte.Escribenos
              </li>
              <li>
                <i class="fas fa-map-marker-alt"></i>Lima Peru&nbsp; &nbsp;
              </li>
              <li>
                <i class="fas fa-phone"></i>
                <a class="turquoise" href="tel:003024630820">
                  +51 97047188
                </a>
              </li>
              <li>
                <i class="fas fa-envelope"></i>
                <a class="turquoise" href="mailto:office@evolo.com">
                  informes@itcenter.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.507640204439!3d37.757814996609724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sro!4v1498231462606"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="col-lg-6">
            <form id="requestForm" onSubmit={handleSubmit}>
              <div class="form-group">
                <input
                  class="form-control-input"
                  type="text"
                  id="name"
                  name="name"
                  onBlur={handleBlur}
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeHolder="Ingrese Nombres"
                />
                {errors.name && <p style={styles}>{errors.name}</p>}
              </div>
              <div class="form-group">
                <input
                  class="form-control-input"
                  type="email"
                  id="email"
                  name="email"
                  onBlur={handleBlur}
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeHolder="Ingrese su correo"
                />
                {errors.email && <p style={styles}>{errors.email}</p>}
              </div>
              <div class="form-group">
                <textarea
                  class="form-control-textarea"
                  name="comments"
                  placeholder="Escribe tu comentario"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={form.comments}
                  required
                ></textarea>
                {errors.comments && <p style={styles}>{errors.comments}</p>}
              </div>
              <div class="form-group checkbox">
                <input
                  type="checkbox"
                  name="terms"
                  onBlur={handleBlur}
                  onChange={handleChecked}
                  value={form.terms}
                  required
                />
                Leer Terminos de envio de datos{" "}
                <a href="privacy-policy.html">Politica Privacidad</a>{" "}
                <a href="terms-conditions.html">Terminos y Condiciones</a>
                {!form.terms && <p style={styles}>{errors.terms}</p>}
              </div>
              <div class="form-group">
                <button type="submit" class="form-control-submit-button">
                  Enviar Informacion
                </button>
              </div>
              {/* <div class="form-message">
                            <div id="cmsgSubmit" class="h3 text-center hidden"></div>
                        </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
