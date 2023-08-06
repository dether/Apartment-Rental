import React from "react";
import departments from "../../utils/departmentsST.json";
import light from "../../../public/iconos/Light bulb.svg";
import water from "../../../public/iconos/Tap Water Drink.svg";
import cable from "../../../public/iconos/cable tv.svg";
import "../../styles/departmentsSt.css";

interface DepartmentMonoambiente {
	type: string;
	name: string;
	"Quantity Available": string;
	available: string;
	services: string[];
	description: string;
	img: string;
}

const BiDepartments: React.FC = () => {
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

export default BiDepartments;

/* 
{data.departments.map((departamento, index) => (
        <div className="departments-img" key={index}>
        <img src={departamento.img} alt={departamento.name} style={{ maxWidth: '300px' }} />
        </div>
        <div className="departments-content">
          <h2 className="heading">{departamento.name}</h2>
          <p>Tipo: {departamento.type}</p>
          <p>Disponibilidad: {departamento.available ? 'Disponible' : 'No disponible'}</p>
          <p>Descripción: {departamento.description}</p>
          <p>Servicios: {departamento.services.join(', ')}</p>
        </div>
      ))}
*/

/* 
import "../styles/departments.css"
import data from "../utils/departments.json";

const Departments = () => {

  return (
		<section className="departments" id="departments">
			<div className="departments-img">
				<img
					src="https://www.buenacuerdo.com.ar/ws/image.php?img=https%3A%2F%2Fstatic.kiteprop.com%2Fkp%2Fproperties%2F12122%2F1f12c1%2Flg%2F1f12c12082114357a52a3d8df5458626.jpg"
					alt="photo"
				></img>
			</div>

			<div className="departments-content">
				<h2 className="heading">Departamento Monoambiente</h2>
				<p>Mesada, Baño, Habitación, Patio</p>
				<p>Cable</p>
				<p>Luz</p>
				<p>Agua</p>
			</div>
		</section>
	);
};
export default Departments;
*/
