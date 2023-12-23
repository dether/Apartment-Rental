import "./styles/index.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Nav from "./Component/Nav";
import DepartmentsST from "./Component/Departaments/DepartmentsST";
import DepartmentsSM from "./Component/Departaments/DepartmentsSM";
import Contact from "./Component/Contact";
import Location from "./Component/Location";
import Footer from "./Component/Footer";
import Services from "./Component/Services";
import Departaments from "./Component/Departaments/Departments";

function App() {
	return (
		<div className="app">
			<Nav />
			<div className="content">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/departaments" element={<Departaments />} />
					<Route
						path="/departments/santa-teresita"
						element={<DepartmentsST />}
					/>
					<Route path="/departments/santa-monica" element={<DepartmentsSM />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/locations" element={<Location />} />
					<Route path="/services" element={<Services />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
