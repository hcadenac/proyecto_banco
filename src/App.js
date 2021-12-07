import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barnav from './components/navegacion/Barnav'; 
import Home from './components/Paginas/Home';
import Personas from './components/Paginas/Personas';
import AtencionCliente from './components/Paginas/AtencionCliente';
import Registro from './components/Paginas/Registro';
import Productos from './components/Paginas/Productos';
import Login from './components/Paginas/Login';
import GestionCliente from './components/Paginas/GestionCliente';
import GestionSolicitudes from './components/Paginas/GestionSolicitudes';


function App() {
  return (
    <div className="App">
     <Router>
        <Barnav />
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Productos' element={<Productos />} /> 
          <Route path='/Registro' element={<Registro />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/GestionCliente' element={<GestionCliente />} />
          <Route path='/GestionSolicitudes' element={<GestionSolicitudes />} />
          <Route path='/AtencionCliente' element={<AtencionCliente />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
