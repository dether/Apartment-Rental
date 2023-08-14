import React, { useState } from "react";
import departments from "../../utils/departmentsST.json";
import light from "../../../public/icon/Light bulb.svg";
import water from "../../../public/icon/Tap Water Drink.svg";
import cable from "../../../public/icon/cable tv.svg";
import Bed from "../../../public/icon/Bed.svg";

interface Department {
	type: string;
	name: string;
	available: boolean;
	services: string[];
	description: string;
	dimensions: string;
	img: string;
}

const DepartmentsST: React.FC = () => {
	const [filterType, setFilterType] = useState<
		"todos" | "monoambiente" | "dosPersonas" | "tienda"
	>("todos");
	const [filterAvailability, setFilterAvailability] = useState<
		"todos" | "disponible" | "noDisponible"
	>("todos");

	const filteredDepartments = departments.departmentsSantaTeresita.filter(
		(department: Department) => {
			const matchesType =
				filterType === "todos" || department.type === filterType;
			const matchesAvailability =
				filterAvailability === "todos" ||
				(filterAvailability === "disponible" && department.available) ||
				(filterAvailability === "noDisponible" && !department.available);

			return matchesType && matchesAvailability;
		}
	);

	return (
			<div className="departmentsSt" id="departmentsSt">

				<div className="filterSt-container">
					<div className="filters">
						<label htmlFor="typeFilter">Filtrar por Tipo:</label>
						<select
							id="typeFilter"
							value={filterType}
							onChange={(event) =>
								setFilterType(event.target.value as typeof filterType)
							}
						>
							<option value="todos">Todos</option>
							<option value="Monoambiente">Monoambiente</option>
							<option value="Para dos personas">Para dos personas</option>
							<option value="Tienda">Tienda</option>
						</select>

						<label htmlFor="availabilityFilter">
							Filtrar por Disponibilidad:
						</label>
						<select
							id="availabilityFilter"
							value={filterAvailability}
							onChange={(event) =>
								setFilterAvailability(
									event.target.value as typeof filterAvailability
								)
							}
						>
							<option value="todos">Todos</option>
							<option value="disponible">Disponible</option>
							<option value="noDisponible">No disponible</option>
						</select>
						</div>
						<button
							onClick={() => {
								setFilterType("todos");
								setFilterAvailability("todos");
							}}
							className="btn"
						>
							Limpiar Filtros
						</button>
					
				</div>

				<div className="departmentSt-cards">
				{filteredDepartments.map((department: Department, index: number) => (
					<div key={index} className="departmentSt-card">
						<div className="departmentSt-img">
							<img src={department.img} alt={department.name} />
						</div>

						<div className="departmentSt-content">
							<h2 className="heading">{department.name}</h2>
							<p>{department.description}</p>
							<p>
								<strong>Tipo:</strong> {department.type}
							</p>
							<p>
								<strong>Disponibilidad:</strong>{" "}
								{department.available === true ? "Disponible" : "No disponible"}
							</p>
							<p>
								<strong>Dimensiones:</strong> {department.dimensions}
							</p>
							<ul className="servicesSt-list">
								{department.services.map((service, i) => (
									<li key={i}>
										{service === "Luz" && <img src={light} alt="Luz" />}
										{service === "Agua" && <img src={water} alt="Agua" />}
										{service === "Cable" && <img src={cable} alt="Cable" />}
										<span>{service}</span>
									</li>
								))}
								{department.type === "Monoambiente" ? (
									<li>
										<img src={Bed} alt="Bed" />
										<p>1</p>
									</li>
								) : (
									<li>
										<img src={Bed} alt="Bed" />
										<p>2</p>
									</li>
								)}
							</ul>
						</div>
					</div>
				))}
				</div>
		</div>
	);
};

export default DepartmentsST;

/* import React from "react";
import departments from "../../utils/departmentsST.json";
import light from "../../../public/iconos/Light bulb.svg";
import water from "../../../public/iconos/Tap Water Drink.svg";
import cable from "../../../public/iconos/cable tv.svg";
import "../../styles/departmentsSt.css";
import Bed from "../../../public/iconos/Bed.svg";

interface Department {
	type: string;
	name: string;
	available: string;
	services: string[];
	description: string;
	dimensions: string;
	img: string;
}

const DepartmentsST: React.FC = () => {

	

	return (
		<div>
			<section className="departments" id="departments">
				{departments.departmentsSantaTeresita.map(
					(department: Department, index: number) => (
						<div key={index} className="department-card">
							<div className="department-img" key={index}>
								<img src={department.img} alt={department.name} />
							</div>

							<div className="department-content">
								<h2 className="heading">{department.name}</h2>
								<p>{department.description}</p>
								<p><strong>Tipo:</strong> {department.type}</p>
              <p><strong>Disponibilidad:</strong> {department.available === "true" ? "Disponible" : "No disponible"}</p>
              <p><strong>Dimensiones:</strong> {department.dimensions}</p>
								<ul className="services-list">
									{department.services.map((service, i) => (
										<li key={i}>
											{service === "Luz" && <img src={light} alt="Luz" />}
											{service === "Agua" && <img src={water} alt="Agua" />}
											{service === "Cable" && <img src={cable} alt="Cable" />}
											<span>{service}</span>
										</li>
									))} 
									{department.type === "Monoambiente" ? (
										<li>
											<img src={Bed} alt="Bed" />
											<p>1</p>
										</li>
									) : (
										<li>
											<img src={Bed} alt="Bed" />
											<p>2</p>
										</li>
									)}
								</ul>
							</div>
						</div>
					)
				)}
			</section>
		</div>
	);
};

export default DepartmentsST; */
