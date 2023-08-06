import React from "react";
import img from "../../public/deptos.png";
import "../styles/home.css";

const Home: React.FC = () => {
	return (
		<section className="home" id="home">

			<div className="container-home">
				<h1>Bienvenido a Departamentos Vargas</h1>
				<p>
					Se encuentra en la zona de Presidencia Roque Sáenz Peña. Ofrecemos
					departamentos monoambiente y biambiente. El alojamiento dispone de
					cable, luz y agua.
				</p>
			</div>

			<div className="home-img">
				<img src={img} alt="logo"></img>
			</div>

		</section>
	);
};

export default Home;
