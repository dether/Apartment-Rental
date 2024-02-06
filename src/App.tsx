import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Nav from "./Component/Nav/Nav";
import DepartmentsST from "./Component/Departaments/DepartmentsST";
import DepartmentsSM from "./Component/Departaments/DepartmentsSM";
import Contact from "./Component/Contact/Contact";
import Location from "./Component/Location";
import Footer from "./Component/Footer/Footer";
import Services from "./Component/Services/Services";
import Departaments from "./Component/Departaments/Departments";

function App() {
	return (
		<div className="app">
			<Nav />
			<div className="content">
				<Routes>
					<Route path="/Apartment-Rental" element={<Home />} />
					<Route
						path="/Apartment-Rental/departments"
						element={<Departaments />}
					/>
					<Route
						path="/Apartment-Rental/departments/santa-teresita"
						element={<DepartmentsST />}
					/>
					<Route
						path="/Apartment-Rental/departments/santa-monica"
						element={<DepartmentsSM />}
					/>
					<Route path="/Apartment-Rental/contact" element={<Contact />} />
					<Route path="/Apartment-Rental/locations" element={<Location />} />
					<Route path="/Apartment-Rental/services" element={<Services />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
