import React from "react";
import departments from "../../utils/departmentsST.json";
import light from "../../../public/iconos/Light bulb.svg";
import water from "../../../public/iconos/Tap Water Drink.svg";
import cable from "../../../public/iconos/cable tv.svg";
import "../../styles/departments.css";

interface DepartmentMonoambiente {
	type: string;
	name: string;
	"Quantity Available": string;
	available: string;
	services: string[];
	description: string;
	img: string;
}

const MonoDepartments: React.FC = () => {
	return (
		<div>
			{/* Departamentos Monoambiente */}
			<section className="departments" id="departments">
				{departments.departmentsSantaTeresita.map(
					(departamento: DepartmentMonoambiente, index: number) => (
						<div key={index} className="department-card">
							<div className="department-img" key={index}>
								<img src={departamento.img} alt={departamento.name} />
							</div>

							<div className="department-content">
								<h2 className="heading">{departamento.name}</h2>
                <h1>Descripción: </h1>
								<p>{departamento.description}</p>
                <h1>Disponibilidad: </h1>
								<ul className="services-list">
									{departamento.services.map((service, i) => (
										<li key={i}>
											{service === "Luz" && <img src={light} alt="Luz" />}
											{service === "Agua" && <img src={water} alt="Agua" />}
											{service === "Cable" && <img src={cable} alt="Cable" />}
											<span>{service}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					)
				)}

			</section>
		</div>
	);
};

export default MonoDepartments;