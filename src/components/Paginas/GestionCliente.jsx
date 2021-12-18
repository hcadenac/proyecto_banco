
import { faPenSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
const axios = require('axios');


function GestionCliente() {

  const [list, setList] = useState([]);
    
  async function getUser() {
      try {
        const response = await axios.get('http://localhost:9000/api/users');
        console.log(response);
        // const datas = response.data
        setList(response.data)
      } catch (error) {
        console.error(error);
      }
    }

  useEffect(() =>{
      getUser()
  }, [])

  const dataClientes = [
    { id: 1, nombre: "Mario Garcia", documento: "Cedula", numero: 123456, nacimiento: '01-01-1990', expedicion: '01-01-2008', ingresos: 5000000, egresos: 1500000 },
    { id: 2, nombre: "Julia Paez", documento: "Cedula", numero: 232345, nacimiento: '01-10-1995', expedicion: '01-01-2012', ingresos: 7000000, egresos: 2000000 },
    { id: 3, nombre: "Pedro Perez", documento: "Cedula", numero: 323245, nacimiento: '01-10-1980', expedicion: '01-01-2000', ingresos: 3000000, egresos: 1000000 },
  ];

  const [data, setData] = useState(list);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [selectCliente, setselectCliente] = useState({
    //id: '',
    nombre: '',
    tipodoc: '',
    documento: '',
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
    var valorEditar=selectCliente;
    dataNueva.map(cliente=>{
      if(cliente.id===selectCliente._id){
        cliente.nombre=selectCliente.nombre;
        cliente.tipodoc=selectCliente.tipodoc;
        cliente.documento=selectCliente.documento;
        cliente.nacimiento=selectCliente.nacimiento;
        cliente.expedicion=selectCliente.expedicion;
        cliente.ingresos=selectCliente.ingresos;
        cliente.egresos=selectCliente.egresos;
      }
    });
    setData(dataNueva);
    console.log(valorEditar)
    console.log(valorEditar._id)
    axios.put('http://localhost:9000/api/users/'+valorEditar._id, valorEditar)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    getUser()
    setModalEditar(false);
  }

  const eliminar =()=>{
    var valorEditar=selectCliente;
    axios.delete('http://localhost:9000/api/users/'+valorEditar._id, valorEditar)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    getUser()
    // setData(data.filter(cliente=>cliente.id!==selectCliente.id));
    setModalEliminar(false);
  }

  const abrirModalInsertar=()=>{
    setselectCliente(null);
    setModalInsertar(true);
  }

  const insertar =()=>{
    var valorInsertar=selectCliente;
    axios.post('http://localhost:9000/api/users', valorInsertar)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    //valorInsertar.id=data[data.length-1].id+1;
    //var dataNueva = data;
    //dataNueva.push(valorInsertar);
    //setData(dataNueva);
    getUser()
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
    <div className="table-responsive">
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
          {list.map(elemento=>(
            <tr>
              <td>{elemento._id}</td>
              <td>{elemento.nombre}</td>
              <td>{elemento.tipodoc}</td>
              <td>{elemento.documento}</td>
              <td>{elemento.nacimiento}</td>
              <td>{elemento.expedicion}</td>
              <td>{elemento.ingresos}</td>
              <td>{elemento.egresos}</td>
              <td><button className="btn btn-primary" onClick={()=>clienteSelect(elemento, 'Editar')}><FontAwesomeIcon icon={faPenSquare}/></button> {"   "} 
              <button className="btn btn-danger" onClick={()=>clienteSelect(elemento, 'Eliminar')}><FontAwesomeIcon icon={faTrashAlt} /></button></td>
            </tr>
          ))
          }
         </tbody>
      </table>
      </div>
    </div>

     {/* /////editar clientes//// */}
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
              value={selectCliente && selectCliente._id}
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

            <label>Tipo Documento</label>
            <input
              className="form-control"
              type="text"
              name="tipodoc"
              value={selectCliente && selectCliente.tipodoc}
              onChange={handleChange}
            />
            {/* <br /> */}
            <label>Numero</label>
            <input
              className="form-control"
              type="text"
              name="documento"
              value={selectCliente && selectCliente.documento}
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

 {/* /////eliminar clientes//// */}
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

    {/* /////insertar clientes//// */}
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
              // value={data[data.length-1].id+1}
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
              name="tipodoc"
              value={selectCliente ? selectCliente.tipodoc: ''}
              onChange={handleChange}
            />
            <label>Numero</label>
            <input
              className="form-control"
              type="text"
              name="documento"
              value={selectCliente && selectCliente.documento}
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