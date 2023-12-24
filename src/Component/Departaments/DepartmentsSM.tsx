import React, { useState } from "react";
import apartmentData from "../../utils/apartmentData";
import light from "../../utils/icon/Light bulb.svg";
import water from "../../utils/icon/Tap Water Drink.svg";
import cable from "../../utils/icon/cable tv.svg";
import Bed from "../../utils/icon/Bed.svg";

interface Department {
	type: string;
	name: string;
	available: boolean;
	services: string[];
	description: string;
	dimensions: string;
	img: string;
}

const DepartmentsSM: React.FC = () => {
	const [filterType, setFilterType] = useState<
		"todos" | "monoambiente" | "dosPersonas"
	>("todos");
	const [filterAvailability, setFilterAvailability] = useState<
		"todos" | "disponible" | "noDisponible"
	>("todos");

	const filteredDepartments = apartmentData.departmentsSantaMonica.filter(
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
		<section className="departmentsSm" id="departmentsSm">
			<h2>Departamentos Santa Monica</h2>
			<div className="filterSm-container">
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
				</select>

				<label htmlFor="availabilityFilter">Filtrar por Disponibilidad:</label>
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

			{filteredDepartments.map((department: Department, index: number) => (
				<div key={index} className="departmentSm-cards">
					<div key={index} className="departmentSm-card">
						<div className="departmentSm-img" key={index}>
							<img src={department.img} alt={department.name} />
						</div>

						<div className="departmentSm-content">
							<h2>{department.name}</h2>

							<h1>Descripción: </h1>

							<p>{department.description}</p>

							<h1>Tipo: </h1>
							<p>{department.type}</p>

							<h1>Disponibilidad: </h1>
							<p>
								{department.available === true ? "Disponible" : "No disponible"}
							</p>

							<h1>Dimensiones: </h1>
							<p>{department.dimensions}</p>

							<h1>Servicios: </h1>
							<ul className="servicesSm-list">
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
				</div>
			))}
		</section>
	);
};

export default DepartmentsSM;
