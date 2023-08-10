import React from "react";
import Slider from "./Slider";
import deptos from "../../../public/deptos.png";
import AvailableDepartments from "./AvailableDepartments";

const Home: React.FC = () => {
	return (
		<div id="home">
			<Slider />
			<section className="home">
				<div className="blocks">
          
					<div className="block1">
						<h3>Bienvenidos a</h3>
						<h3>Departamentos Vargas</h3>
						<p>
							Se encuentra en la zona de Presidencia Roque Sáenz Peña. Ofrecemos
							habitaciones con aire acondicionado, baño privado y conexión de
							wifi gratis. El alojamiento dispone de spa, bañera de hidromasaje
							y pileta al aire libre. Todas las habitaciones del hotel están
							equipadas con TV de pantalla plana con canales por cable.
						</p>
					</div>

					<div className="block2">
						<img src={deptos} alt=""></img>
					</div>
				</div>
			</section>
			<AvailableDepartments />
		</div>
	);
};

export default Home;
