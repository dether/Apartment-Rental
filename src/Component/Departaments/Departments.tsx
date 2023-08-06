import React from "react";
import { Link } from "react-router-dom";
import ST from "../../../public/ST/ST.png";
import SM from "../../../public/SM/SM.png";
import Bed from "../../../public/iconos/Bed.svg";
import Bath from "../../../public/iconos/bath.svg";
import "../../styles/departments.css";

const Departments: React.FC = () => {
	return (
		<div>
			<section className="departments" id="departments">
				<div className="heading">
					<h2>Departamentos</h2>
				</div>
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
								<ul>
									<li>
										<img src={Bed} alt="Bed" className="card-icon" />
										<span>1</span>
									</li>
									<li>
										<img src={Bed} alt="Bed" className="card-icon" />
										<span>2</span>
									</li>
									<li>
										<img src={Bath} alt="Bath" className="card-icon" />
										<span>1</span>
									</li>
								</ul>
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
								<ul>
									<li>
										<img src={Bed} alt="Bed" className="card-icon" />
										<span>1</span>
									</li>
									<li>
										<img src={Bed} alt="Bed" className="card-icon" />
										<span>2</span>
									</li>
									<li>
										<img src={Bath} alt="Bath" className="card-icon" />
										<span>1</span>
									</li>
								</ul>
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
