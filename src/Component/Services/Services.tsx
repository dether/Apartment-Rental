import React from "react";
import electricity from "../../utils/services/service-electricity.jpg";
import cable from "../../utils/services/service-cable.jpg";
import water from "../../utils/services/service-water.jpg";

const Services: React.FC = () => {
	return (
		<section className="services" id="services">
			<h2>Servicios</h2>
			<p>
				En los departamentos podras encontrar algunos de estos servicios
				adheridos al monto mensual. Si le interesa algun departamento en
				especial, revisar los servicios que brinda el departamento, los
				servicios pueden variar dependiendo de la ubicación.
			</p>
			<div className="cards">
				<div className="card">
					<div className="card-img">
						<img src={electricity} alt="electricidad" />
					</div>
					<div className="card-info">
						<h2>Luz</h2>
					</div>
				</div>

				<div className="card">
					<div className="card-img">
						<img src={cable} alt="cable" />
					</div>
					<div className="card-info">
						<h2>Cable TV</h2>
					</div>
				</div>

				<div className="card">
					<div className="card-img">
						<img src={water} alt="Agua" />
					</div>
					<div className="card-info">
						<h2>Agua potable</h2>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
