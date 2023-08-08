import React from "react";
import { Link } from "react-router-dom";
import ST from "../../../public/ST/ST.png";
import SM from "../../../public/SM/SM.png";
import "../../styles/departments.css";
import departmentsSM from "../../utils/departmentsSM.json";
import departmentsST from "../../utils/departmentsST.json";

interface Department {
	type: string;
	name: string;
	available: boolean;
	services: string[];
	description: string;
	dimensions: string;
	img: string;
}

const Departments: React.FC = () => {
	const countAvailableST = departmentsST.departmentsSantaTeresita.filter(
		(department: Department) => department.available === true
	).length;
	const countNotAvailableST = departmentsST.departmentsSantaTeresita.filter(
		(department: Department) => department
	).length;

	const countAvailableSM = departmentsSM.departmentsSantaMonica.filter(
		(department: Department) => department.available === true
	).length;
	const countNotAvailableSM = departmentsSM.departmentsSantaMonica.filter(
		(department: Department) => department
	).length;

	return (
		<div>
			<section className="departments" id="departments">
					<h2 className="heading">Departamentos</h2>

				<div className="card-container">
					<div className="card">
						<Link to="/departments/santa-teresita" className="custom-link">
							<div className="first-content">
								<img src={ST} alt="Santa Teresita" className="card-img" />
								<span>Departamentos en Santa Teresita</span>
								<p>
									Estás buscando un departamento en Santa Teresita? Te
									presentamos estas excelentes opciones...
								</p>
								<p>Departamentos disponibles: <strong>{countAvailableST}</strong>/{countNotAvailableST}</p>
							</div>
						</Link>
					</div>

					<div className="card">
						<Link to="/departments/santa-monica" className="custom-link">
							<div className="first-content">
								<img src={SM} alt="Santa Monica" className="card-img" />
								<span>Departamentos en Santa Monica</span>
								<p>
									Estás buscando un departamento en Santa Monica? Te presentamos
									estas excelentes opciones...
								</p>
								<p>Departamentos disponibles: <strong>{countAvailableSM}</strong>/{countNotAvailableSM}</p>
							</div>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Departments;

/* import React from "react";
import { Link } from "react-router-dom";
import ST from "../../../public/ST/ST.png";
import SM from "../../../public/SM/SM.png";
import Bed from "../../../public/iconos/Bed.svg";
import bath from "../../../public/iconos/bath.svg";

const Departments: React.FC = () => {
	return (
		<div>
			<section className="departments" id="departments">
				<h2>Departamentos</h2>

				<div className="card">
					<Link to="/departments/santa-teresita">
						<div className="first-content">
							<img src={ST} alt="Santa Teresita"></img>
							<span>Departamentos en Santa Teresita</span>
							<p>
								Estas buscando un departamento sobre Santa Teresita? Te
								presentamos estas excelentes opciones...
							</p>
							<ul>
								<li>
									<img src={Bed} alt="Bed"></img>
									<p>1</p>
								</li>
								<li>
									<img src={bath} alt="bath"></img>
									<p>1</p>
								</li>
							</ul>
						</div>
						<div className="second-content">
							<img src={ST} alt="Santa Teresita"></img>
							<span>Departamentos en Santa Teresita</span>
						</div>
					</Link>
				</div>

        <div className="card">
					<Link to="/departments/santa-monica">
						<div className="first-content">
							<img src={SM} alt="Santa Monica"></img>
							<span>Departamentos en Santa Monica</span>
							<p>
								Estas buscando un departamento sobre Santa Monica? Te
								presentamos estas excelentes opciones...
							</p>
							<ul>
								<li>
									<img src={Bed} alt="Bed"></img>
									<p>1</p>
								</li>
								<li>
									<img src={bath} alt="bath"></img>
									<p>1</p>
								</li>
							</ul>
						</div>
						<div className="second-content">
							<img src={SM} alt="Santa Monica"></img>
							<span>Departamentos en Santa Monica</span>
						</div>
					</Link>
				</div>

			</section>
		</div>
	);
};

export default Departments;
 */
