// import logo from './logo.svg';
// import './App.css';
import 'bootstrap';
import React, { useState } from 'react';
// import { Modal, Button, Label, FormGroup} from 'react-bootstrap';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';

function GestionCliente() {

  const dataClientes = [
    { id: 1, nombre: "Mario Garcia", documento: "Cedula", numero: 123456, nacimiento: '01-01-1990', expedicion: '01-01-2008', ingresos: 5000000, egresos: 1500000 },
    { id: 2, nombre: "Julia Paez", documento: "Cedula", numero: 232345, nacimiento: '01-10-1995', expedicion: '01-01-2012', ingresos: 7000000, egresos: 2000000 },
    { id: 3, nombre: "Pedro Perez", documento: "Cedula", numero: 323245, nacimiento: '01-10-1980', expedicion: '01-01-2000', ingresos: 3000000, egresos: 1000000 },
  ];

  const [data, setData] = useState(dataClientes);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [selectCliente, setselectCliente] = useState({
    id: '',
    nombre: '',
    documento: '',
    numero: '',
    nacimiento: '',
    expedicion: '',
    ingresos: '',
    egresos: ''
  });

  const clienteSelect=(elemento, caso)=>{
    setselectCliente(elemento);
(caso==='Editar')?setModalEditar(true):setModalEliminar(true)
  }

  const handleChange=e=>{
    const {name, value}=e.target;
    setselectCliente((prevState)=>({
      ...prevState,
      [name]: value
    }));
  }

  const editar=()=>{
    var dataNueva=data;
    dataNueva.map(cliente=>{
      if(cliente.id===selectCliente.id){
        cliente.nombre=selectCliente.nombre;
        cliente.documento=selectCliente.documento;
        cliente.numero=selectCliente.numero;
        cliente.nacimiento=selectCliente.nacimiento;
        cliente.expedicion=selectCliente.expedicion;
        cliente.ingresos=selectCliente.ingresos;
        cliente.egresos=selectCliente.egresos;
      }
    });
    setData(dataNueva);
    setModalEditar(false);
  }

  const eliminar =()=>{
    setData(data.filter(cliente=>cliente.id!==selectCliente.id));
    setModalEliminar(false);
  }

  const abrirModalInsertar=()=>{
    setselectCliente(null);
    setModalInsertar(true);
  }

  const insertar =()=>{
    var valorInsertar=selectCliente;
    valorInsertar.id=data[data.length-1].id+1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  }

  return (
    <div className="App">
      <br />
      <h2 id="titulo1">Gestion de Clientes Banco Popular</h2>
      <br />
   {/*  <button id="boton-insert"className="btn btn-success" onClick={()=>abrirModalInsertar()}>Insertar</button>
    <br /><br /> */}
    <div className="Container-tabla">
    <button id="boton-insert"className="btn btn-success" onClick={()=>abrirModalInsertar()}>Registrar Cliente</button>
    <br /><br />
    <div class="table-responsive">
      <table className="table table-bordered border-Secondary table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Documento</th>
            <th>Numero</th>
            <th>Nacimiento</th>
            <th>Expedicion</th>
            <th>Ingresos</th>
            <th>Egresos</th>
            <th>Acciones</th>
           
          </tr>
        </thead>
        <tbody>
          {data.map(elemento=>(
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.nombre}</td>
              <td>{elemento.documento}</td>
              <td>{elemento.numero}</td>
              <td>{elemento.nacimiento}</td>
              <td>{elemento.expedicion}</td>
              <td>{elemento.ingresos}</td>
              <td>{elemento.egresos}</td>
              <td><button className="btn btn-primary" onClick={()=>clienteSelect(elemento, 'Editar')}>Editar</button> {"   "} 
              <button className="btn btn-danger" onClick={()=>clienteSelect(elemento, 'Eliminar')}>Eliminar</button></td>
            </tr>
          ))
          }
         </tbody>
      </table>
      </div>
    </div>
      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Cliente</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={selectCliente && selectCliente.id}
            />
            <br />

            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={selectCliente && selectCliente.nombre}
              onChange={handleChange}
            />
            {/* <br /> */}

            <label>Documento</label>
            <input
              className="form-control"
              type="text"
              name="documento"
              value={selectCliente && selectCliente.documento}
              onChange={handleChange}
            />
            {/* <br /> */}
            <label>Numero</label>
            <input
              className="form-control"
              type="text"
              name="numero"
              value={selectCliente && selectCliente.numero}
              onChange={handleChange}
            />
            <label>Fecha Nacimiento</label>
            <input
              className="form-control"
              type="text"
              name="nacimiento"
              value={selectCliente && selectCliente.nacimiento}
              onChange={handleChange}
            />
            <label>Fecha expedicion</label>
            <input
              className="form-control"
              type="text"
              name="expedicion"
              value={selectCliente && selectCliente.expedicion}
              onChange={handleChange}
            />
            <label>Ingresos</label>
            <input
              className="form-control"
              type="text"
              name="ingresos"
              value={selectCliente && selectCliente.ingresos}
              onChange={handleChange}
            />
            <label>Egresos</label>
            <input
              className="form-control"
              type="text"
              name="egresos"
              value={selectCliente && selectCliente.egresos}
              onChange={handleChange}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={()=>editar()}>
            Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalEditar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>


      <Modal isOpen={modalEliminar}>
        <ModalBody>
          Estás Seguro que deseas eliminar el cliente {selectCliente && selectCliente.nombre}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>eliminar()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=>setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>


        <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Agregar Cliente</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={data[data.length-1].id+1}
            />
            <br />
            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={selectCliente ? selectCliente.nombre: ''}
              onChange={handleChange}
            />
            <label>Tipo de Documento</label>
            <input
              className="form-control"
              type="text"
              name="documento"
              value={selectCliente ? selectCliente.documento: ''}
              onChange={handleChange}
            />
            <label>Numero</label>
            <input
              className="form-control"
              type="text"
              name="numero"
              value={selectCliente && selectCliente.numero}
              onChange={handleChange}
            />
            <label>Fecha Nacimiento</label>
            <input
              className="form-control"
              type="date"
              name="nacimiento"
              value={selectCliente && selectCliente.nacimiento}
              onChange={handleChange}
            />
            <label>Fecha expedicion</label>
            <input
              className="form-control"
              type="date"
              name="expedicion"
              value={selectCliente && selectCliente.expedicion}
              onChange={handleChange}
            />
            <label>Ingresos</label>
            <input
              className="form-control"
              type="text"
              name="ingresos"
              value={selectCliente && selectCliente.ingresos}
              onChange={handleChange}
            />
            <label>Egresos</label>
            <input
              className="form-control"
              type="text"
              name="egresos"
              value={selectCliente && selectCliente.egresos}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary"
          onClick={()=>insertar()}>
            Insertar
          </button>
          <button
            className="btn btn-danger"
            onClick={()=>setModalInsertar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default GestionCliente