import React from "react";
import { useForm } from "../../hooks/useForm";
import "../../css/fontawesome-all.css";
import "../../css/magnific-popup.css";
import "../../css/styles.css";
import "../../css/swiper.css";
import "./informacion.css";

export const Informacion = () => {
  const initialForm = {
    name: "",
    email: "",
    phone: "",
    courses: "",
    terms: "",
  };
  const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexPhone = /^[0-9]+$/;

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

    if (!form.phone.trim()) {
      errors.phone = "Ingrese su numero de celular";
    } else if (!regexPhone.test(form.phone.trim())) {
      errors.phone = "Este campo solo acepta numeros";
    }

    if (!form.courses.trim()) {
      errors.courses = "Se requiere seleccionar un curso a llevar";
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
    <div id="request" class="form-1">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="text-container">
              <h2>
                Formulario Solicitud de Informacion para Cursos de Entrenamiento
              </h2>
              <p>
                Conoce mas de los cursos con nuestros Asesores de tecnologia que
                contactaran con usted o escribenos a&nbsp;
                <strong>informes@itcenterlearning.onmicrosoft.com</strong>&nbsp;
                y te podran enviar informacion sobre los cursos de
                especializacion con los que contamos actualmente
              </p>
              <ul class="list-unstyled li-space-lg">
                <li class="media">
                  <i class="fas fa-check"></i>
                  <div class="media-body">
                    <strong class="blue">
                      Conoce nuestro sistemas de pago
                    </strong>
                  </div>
                </li>
                <li class="media">
                  <i class="fas fa-check"></i>
                  <div class="media-body">
                    <strong class="blue">
                      Conoce las proximas fecha de inicio de los cursos
                    </strong>
                  </div>
                </li>
                <li class="media">
                  <i class="fas fa-check"></i>
                  <div class="media-body">
                    <strong class="blue">
                      Conoce las tipos de entrenamiento que tenemos para ti
                    </strong>
                  </div>
                </li>
                <li class="media">
                  <i class="fas fa-check"></i>
                  <div class="media-body">
                    <strong class="blue">
                      Conoce los beneficios de los curso de entrenamiento con
                      nosotros
                    </strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-container">
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
                    placeHolder="Nombres y Apellidos"
                  />
                  {/* <label class="label-control" htmlFor="name">
                    Nombres y Apellidos
                  </label> */}
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
                    placeHolder="Correo"
                  />
                  {/* <label class="label-control" htmlFor="email">
                    Email
                  </label> */}
                  {errors.email && <p style={styles}>{errors.email}</p>}
                </div>
                <div class="form-group">
                  <input
                    class="form-control-input"
                    type="tel"
                    id="phone"
                    name="phone"
                    onBlur={handleBlur}
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="Numero de celular"
                  />
                  {/* <label class="label-control" htmlFor="phone">
                    Phone Number{" "}
                  </label> */}
                  {errors.phone && <p style={styles}>{errors.phone}</p>}
                </div>
                <div class="form-group">
                  <select
                    class="form-control-select"
                    name="courses"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.courses}
                    required
                  >
                    <option class="select-option" value="">
                      Interesado en...
                    </option>
                    <option class="select-option" value="Azure Fundamentals">
                      Azure Fundamentals
                    </option>
                    <option class="select-option" value="Azure Admin">
                      Azure Administrator
                    </option>
                    <option class="select-option" value="Windows server">
                      Administration Windows Server 2019
                    </option>
                    <option class="select-option" value="CCNA">
                      CCNA version 7.0
                    </option>
                  </select>
                  {errors.courses && <p style={styles}>{errors.courses}</p>}
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
                  I agree with stated
                  <a href="privacy-policy.html">Privacy Policy </a> and
                  <a href="terms-conditions.html">Terms & Conditions</a>
                  {!form.terms && <p style={styles}>{errors.terms}</p>}
                </div>
                <div class="form-group">
                  <button type="submit" class="form-control-submit-button">
                    Enviar
                  </button>
                </div>
                {/* <div class="form-message">
                  <div id="rmsgSubmit" class="h3 text-center hidden"></div>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
