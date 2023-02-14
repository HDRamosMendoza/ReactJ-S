import {Outlet, Link} from "react-router-dom";

const Layout = () => {
    return <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/ListaDeEncuestas/MedicionCloroResidual">Lista de Medición de Cloro Residual</Link>
                </li>
                <li>
                    <Link to="/ListaDeEncuestas/ContinuidadServicio">Lista de Continuidad del Servicio</Link>
                </li>
                <li>
                    <Link to="/ListaDeEncuestas/LimpiezaDesinfeccionComponenteSAP">Lista de Limpieza y Desinfección de Componente del SAP</Link>
                </li>
                <li>
                    <Link to="/ListaDeEncuestas/Cloracion">Lista de Cloración</Link>
                </li>
            </ul>
        </nav>
        <hr/>
        <Outlet/>
    </div>
};

export default Layout;