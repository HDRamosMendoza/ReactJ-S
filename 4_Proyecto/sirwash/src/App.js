
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import About from './pages/About';
import Home from './pages/Home';
import Default from './pages/Default';
import Dashboard from './pages/Dashboard';
/* Lista de Encuestas */
import ListaMedicionCloroResidual from './modulos/Medicion-Cloro-Residual/ListaMedicionCloroResidual';
import ListaContinuidadServicio from './modulos/Continuidad-Servicio/ListaContinuidadServicio';
import ListaLimpiezaDesinfeccionComponenteSAP from './modulos/Limpieza-Desinfeccion-Componente-SAP/ListaLimpiezaDesinfeccionComponenteSAP';
import ListaCloracion from './modulos/Cloracion/ListaCloracion';
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
          <Route path="ListaDeEncuestas/ContinuidadServicio" element={<ListaContinuidadServicio />}/>
          <Route path="ListaDeEncuestas/LimpiezaDesinfeccionComponenteSAP" element={<ListaLimpiezaDesinfeccionComponenteSAP />}/>
          <Route path="ListaDeEncuestas/Cloracion" element={<ListaCloracion />}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;