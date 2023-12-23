import React, { useState } from "react";
import departmentsData from "../../utils/departments.json";
import location from "../../../public/icon/location.svg"
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
	redirection: string;
}

const Departaments: React.FC = () => {
	const [selectedFilter, setSelectedFilter] = useState("Location");

	const filteredDepartments =
		selectedFilter === "Location"
			? departmentsData.departmentST.concat(departmentsData.departmentSM)
			: selectedFilter === "Santa Teresita"
			? departmentsData.departmentST
			: departmentsData.departmentSM;

	return (
		<section className="departaments" id="departaments">
			<h2>Departamentos</h2>
			<div className="departaments-filter">
				<h2>Filtrar por Ubicación:</h2>
				<select
					value={selectedFilter}
					onChange={(e) => setSelectedFilter(e.target.value)}
				>
					<option value="Location">Todos</option>
					<option value="Santa Teresita">Santa Teresita</option>
					<option value="Santa Monica">Santa Monica</option>
				</select>
				<button className="btn" onClick={() => setSelectedFilter("Location")}>
					Borrar Filtro
				</button>
			</div>

			{filteredDepartments.map(
				(department: GeneralDepartments, index: number) => (
					<div key={index} className="departaments-option">
						<div key={index} className="departaments-container">
							<div className="departaments-img">
								<img src={department.img} alt={department.name}></img>
							</div>

							<div className="departaments-info">
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
								<h1>Ubicación:</h1>
								<p><img src={location}></img><a href={department.mapEmbedUrl} target="_blank"
										rel="noopener noreferrer">{department.location}</a></p>
								<button className="btn">
									{" "}
									<a href={department.redirection}>
										Ver los departamentos
									</a>{" "}
								</button>
							</div>
						</div>

						{/* <div className="departamentos-ubicacion">
							<div className="ubicacion-info">
								<h2>Ubicación</h2>
								<p>{department.location}</p>
								<button className="btn">
									<a
										href="https://www.google.com/maps/place/F.+Canteros+1420,+S%C3%A1enz+Pe%C3%B1a,+Chaco/@-26.782146,-60.427665,18z/data=!4m5!3m4!1s0x94412d11169108f7:0x62a632a76bc4ef04!8m2!3d-26.7821464!4d-60.4276653?hl=es&entry=ttu"
										target="_blank"
										rel="noopener noreferrer"
									>
										Ir Google Maps
									</a>
								</button>
								<button className="btn">
									<a href="/contact">Contactar</a>
								</button>
							</div>

							<iframe
								src={department.mapEmbedUrl}
								width="500"
								height="400"
								style={{ border: "0" }}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div> */}
					</div>
				)
			)}
		</section>
	);
};

export default Departaments;
