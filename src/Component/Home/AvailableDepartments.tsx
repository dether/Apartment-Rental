import React from "react";
import departmentsSM from "../../utils/departmentsSM.json";
import departmentsST from "../../utils/departmentsST.json";
import { Link } from "react-router-dom";

const AvailableDepartments: React.FC = () => {
	const availableCountST = departmentsST.departmentsSantaTeresita.filter(
		(department) => department.available
	).length;

	const availableCountSM = departmentsSM.departmentsSantaMonica.filter(
		(department) => department.available
	).length;

	const isAnyAvailable = availableCountST > 0 || availableCountSM > 0;
	console.log(isAnyAvailable);
	const title = isAnyAvailable
		? "Hay departamentos libres!"
		: "No hay departamentos libres";

	return (
		<section className="available" id="available">
			<h2 >Disponibilidad</h2>
			<div className={`card-available ${isAnyAvailable ? "green" : "red"}`}>
				<p className="card-title-available">{title}</p>
				{isAnyAvailable ? (
					<>
						<Link to="/departments/santa-teresita">
							<p className="small-desc-availableST">
								{`Departamentos en Santa Teresita: ${availableCountST}/10`}
							</p>
						</Link>
						<Link to="/departments/santa-monica">
							<p className="small-desc-availableSM">
								{`Departamentos en Santa Monica: ${availableCountSM}/10`}
							</p>
						</Link>
						{/* <div
							className={`go-corner-available ${
								isAnyAvailable ? "green" : "red"
							}`}
						>
							<div
								className={`go-arrow-available ${
									isAnyAvailable ? "green" : "red"
								}`}
							>
								→
							</div>
						</div> */}
					</>
				) : (
					<p className="no-departments">
						No hay departamentos disponibles en este momento.
					</p>
				)}
			</div>
		</section>
	);
};

export default AvailableDepartments;
