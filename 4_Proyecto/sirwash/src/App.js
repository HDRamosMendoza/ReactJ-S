
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import About from './pages/About';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

/* Lista de Encuestas */
import ListaMedicionCloroResidual from './modulos/Medicion-Cloro-Residual/ListaMedicionCloroResidual';
import NuevaMedicionCloroResidual from './modulos/Medicion-Cloro-Residual/NuevaMedicionCloroResidual';
//import EditarMedicionCloroResidual from './modulos/Medicion-Cloro-Residual/EditarMedicionCloroResidual';
import DetalleMedicionCloroResidual from './modulos/Medicion-Cloro-Residual/DetalleMedicionCloroResidual';

import ListaContinuidadServicio from './modulos/Continuidad-Servicio/ListaContinuidadServicio';
import NuevaContinuidadServicio from './modulos/Continuidad-Servicio/NuevaContinuidadServicio';
//import EditarContinuidadServicio from './modulos/Continuidad-Servicio/EditarContinuidadServicio';
import DetalleContinuidadServicio from './modulos/Continuidad-Servicio/DetalleContinuidadServicio';

import ListaLimpiezaDesinfeccionComponenteSAP from './modulos/Limpieza-Desinfeccion-Componente-SAP/ListaLimpiezaDesinfeccionComponenteSAP';
import NuevaLimpiezaDesinfeccionComponenteSAP from './modulos/Limpieza-Desinfeccion-Componente-SAP/NuevaLimpiezaDesinfeccionComponenteSAP';
//import EditarLimpiezaDesinfeccionComponenteSAP from './modulos/Limpieza-Desinfeccion-Componente-SAP/EditarLimpiezaDesinfeccionComponenteSAP';
import DetalleLimpiezaDesinfeccionComponenteSAP from './modulos/Limpieza-Desinfeccion-Componente-SAP/DetalleLimpiezaDesinfeccionComponenteSAP';

import ListaCloracion from './modulos/Cloracion/ListaCloracion';
import NuevaCloracion from './modulos/Cloracion/NuevaCloracion';
//import EditarCloracion from './modulos/Cloracion/EditarCloracion';
import DetalleCloracion from './modulos/Cloracion/DetalleCloracion';

/* Nuevo Registro */

//<Route path="ListaDeEncuestas/LimpiezaDesinfeccionComponenteSAP" element={<ListaLimpiezaDesinfeccionComponenteSAP />}/>

function App() {
  return (
    <div className="App">
      <h1>SIRWASH</h1>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="About" element={<About />}/>
          <Route path="/" element={<Home />}/>
          <Route path="Dashboard" element={<Dashboard />}/>

          <Route path="ListaDeEncuestas/MedicionCloroResidual" element={<ListaMedicionCloroResidual />}/>
          <Route path="ListaDeEncuestas/MedicionCloroResidual/NuevaMedicionCloroResidual" element={<NuevaMedicionCloroResidual />}/>
          <Route path="ListaDeEncuestas/MedicionCloroResidual/DetalleMedicionCloroResidual" element={<DetalleMedicionCloroResidual />}/>

          <Route path="ListaDeEncuestas/ContinuidadServicio" element={<ListaContinuidadServicio />}/>
          <Route path="ListaDeEncuestas/ContinuidadServicio/NuevaContinuidadServicio" element={<NuevaContinuidadServicio />}/>
          <Route path="ListaDeEncuestas/ContinuidadServicio/DetalleContinuidadServicio" element={<DetalleContinuidadServicio />}/>

          <Route path="ListaDeEncuestas/LimpiezaDesinfeccionComponenteSAP" element={<ListaLimpiezaDesinfeccionComponenteSAP />}/>
          <Route path="ListaDeEncuestas/LimpiezaDesinfeccionComponenteSAP/NuevaLimpiezaDesinfeccionComponenteSAP" element={<NuevaLimpiezaDesinfeccionComponenteSAP />}/>
          <Route path="ListaDeEncuestas/LimpiezaDesinfeccionComponenteSAP/DetalleLimpiezaDesinfeccionComponenteSAP" element={<DetalleLimpiezaDesinfeccionComponenteSAP />}/>

          <Route path="ListaDeEncuestas/Cloracion" element={<ListaCloracion />}/>
          <Route path="ListaDeEncuestas/Cloracion/NuevaCloracion" element={<NuevaCloracion />}/>
          <Route path="ListaDeEncuestas/Cloracion/DetalleCloracion" element={<DetalleCloracion />}/>

        </Route>
      </Routes>
      
    </div>
  );
}

export default App;