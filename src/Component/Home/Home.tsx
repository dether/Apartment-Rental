import React from "react";
import Slider from "./Slider";
import "../../styles/home.css";
import deptos from "../../../public/deptos.png"
import AvailableDepartments from "./AvailableDepartments";


const Home: React.FC = () => {
	return (
    <div>
			<Slider />
		<section className="home" id="home">
      <div className="home-content">
        <h3>Bienvenidos a</h3>
        <h1>Departamentos Vargas</h1>
      <p>Se encuentra en la zona de Presidencia Roque Sáenz Peña. Ofrecemos habitaciones con aire acondicionado, baño privado y conexión de wifi gratis. El alojamiento dispone de spa, bañera de hidromasaje y pileta al aire libre.
Todas las habitaciones del hotel están equipadas con TV de pantalla plana con canales por cable.</p>
      </div>
      <div className="home-img">
        <img src={deptos} alt=""></img>
      </div>
      </section>
      <AvailableDepartments />
      </div>
	);
};

export default Home;
