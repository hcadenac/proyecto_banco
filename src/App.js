import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barnav from './components/navegacion/Barnav'; 
import Home from './components/Paginas/Home';
import Personas from './components/Paginas/Personas';
import AtencionCliente from './components/Paginas/AtencionCliente';

function App() {
  return (
    <div className="App">
     <Router>
        <Barnav />
        <Routes>
          <Route path='/Home' element={<Home />} />
          {/* <Route path='/Productos' element={<Productos />} /> */}
          <Route path='/Personas' element={<Personas />} />
          <Route path='/AtencionCliente' element={<AtencionCliente />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
