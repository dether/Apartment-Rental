import React from "react";
import Slider from "./Slider";
import deptos from "../../utils/deptos.png";
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
						<p>¡Bienvenido/a al lugar perfecto para encontrar tu próximo hogar! Nuestros departamentos en alquiler ofrecen comodidad y conveniencia a precios excepcionales. Disfruta de la libertad de vivir en un espacio monoambiente o biambiente diseñados para satisfacer tus necesidades básicas y estilo de vida.
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
