import "./styles/index.scss";
import { Routes, Route } from "react-router-dom";
import Home from './Component/Home/Home'
import Navbar from './Component/Navbar';
import Departments from './Component/Departaments/Departments';
import DepartmentsST from './Component/Departaments/DepartmentsST';
import DepartmentsSM from './Component/Departaments/DepartmentsSM';
import Contact from './Component/Contact';
import Location from './Component/Location';

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/departments' element={<Departments/>} />
      <Route path='/departments/santa-teresita' element={<DepartmentsST />} />
      <Route path='/departments/santa-monica' element={<DepartmentsSM />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/locations' element={<Location />} />
    </Routes>
    </>
  )
}

export default App
