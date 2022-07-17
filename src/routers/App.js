import { Header } from "../components/Header/Header";
import { Home } from "../pages/Home/Home";
import { Customer } from "../components/Customer/Customer";
import { Servicio } from "../pages/Servicio/Servicio";
import { Details1 } from "../components/Details1/Details1";
import { Details2 } from "../components/Details2/Details2";
import { Cursos } from "../pages/Cursos/Cursos";
import { Informacion } from "../pages/Informacion/Informacion";
import { VideoTecnologico } from "../components/VideosTecnologico/VideoTecnologico";
import { Testimonios } from "../components/Testimonios/Testimonios";
import { About } from "../components/About/About";
import { Contactanos } from "../pages/Contactanos/Contactanos";
import { Footer } from "../components/Footer/Footer";
import { ExtraPages } from "../pages/ExtraPages/ExtraPages";
import { Copyrigth } from "../components/Copyrigth/Copyrigth";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Customer />
      <Servicio />
      <Details1 />
      <Details2 />
      <Cursos />
      <Informacion />
      <VideoTecnologico />
      <Testimonios />
      <About />
      <Contactanos />
      <Footer />
      <ExtraPages />
      <Copyrigth />
    </>
  );
}

export default App;
