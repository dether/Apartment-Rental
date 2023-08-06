import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './Component/Home'
import Navbar from './Component/Navbar';
import Departments from './Component/Departaments/Departments';
import DepartmentsST from './Component/Departaments/DepartmentsST';
function App() {
  

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/departments' element={<Departments/>} />
      <Route path='/departments/santa-teresita' element={<DepartmentsST />} />
    </Routes>
    </>
  )
}

export default App
