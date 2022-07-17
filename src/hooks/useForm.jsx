import { useState } from "react";
import { helpHttp } from "../../src/helpers/helpHttp";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleChecked = (e) => {
    const { name, checked } = e.target;
    setForm({
      ...form,
      [name]: checked,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      alert("Su mensaje se a enviado correctamente");
      setLoading(true);
      helpHttp()
        .post("https://formsubmit.co/ajax/ivanmartinezm@hotmail.com", {
          body: {
            Nombre: form.name,
            Email: form.email,
            Phone: form.phone,
            Curso: form.courses,
            Comentario: form.comments,
          },
          headers: {
            "Content-Type": "applitacion/json",
            Accept: "applitacion/json",
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
          setForm(initialForm);
          setTimeout(() => setResponse(false), 5000);
        });
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    handleChecked,
  };
};
