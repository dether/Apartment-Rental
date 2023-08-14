import React, { useState } from "react";
import departmentsData from "../utils/departments.json";

interface GeneralDepartments {
	types: string[];
	location: string;
	name: string;
	servicesIcon: string[];
	services: string[];
	description: string;
	dimensions: string[];
	img: string;
	mapEmbedUrl: string;
}

const Departamentos: React.FC = () => {
	const [selectedFilter, setSelectedFilter] = useState("Ubicación");

	const filteredDepartments =
		selectedFilter === "Ubicación"
			? departmentsData.departmentST.concat(departmentsData.departmentSM)
			: selectedFilter === "Santa Teresita"
			? departmentsData.departmentST
			: departmentsData.departmentSM;

	return (
		<section className="departamentos" id="departamentos">
			<div className="departamentos-filter">
				<h2>Filtrar por Ubicación:</h2>
				<select
					value={selectedFilter}
					onChange={(e) => setSelectedFilter(e.target.value)}
				>
					<option value="Ubicación">Todos</option>
					<option value="Santa Teresita">Santa Teresita</option>
					<option value="Santa Monica">Santa Monica</option>
				</select>
				<button className="btn" onClick={() => setSelectedFilter("Ubicación")}>
					Borrar Filtro
				</button>
			</div>

			{filteredDepartments.map(
				(department: GeneralDepartments, index: number) => (
					<div key={index} className="departamentos-option">
						<div key={index} className="departamentos-container">
							<div className="departamentos-img">
								<img src={department.img} alt={department.name}></img>
							</div>

							<div className="departamentos-info">
								<h2>{department.name}</h2>
								<h1>Descripción:</h1>
								<p>{department.description}</p>
								<h1>Tipos:</h1>
								<p>{department.types.join(" y ")}</p>
								<h1>Servicios:</h1>
								<p>{department.services.join(" - ")}</p>
								<div className="services-icons">
									{department.servicesIcon.map((icon, index) => (
										<img
											key={index}
											src={icon}
											alt={`Icono de ${department.services[index]}`}
										/>
									))}
								</div>
								<button className="btn"> Ver los departamentos </button>
							</div>
						</div>

						<div className="departamentos-ubicacion">
							<h2>Ubicación</h2>
							<p>{department.location}</p>

							<iframe
								src={department.mapEmbedUrl}
								width="600"
								height="450"
								style={{ border: "0" }}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</div>
				)
			)}
		</section>
	);
};

export default Departamentos;
