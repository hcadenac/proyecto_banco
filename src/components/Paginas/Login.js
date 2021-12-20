// import imagen from '...../public/imagen1.png';
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useState } from 'react';
//import axios from 'axios';
const axios = require('axios');


const Login = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = async (event) => {
        event.preventDefault()
        }

    return (
        <Fragment>
        <div className="container-fluid">
            <div className="row login justify-content-center">
                <div className="derecha">
                    <br />
                    <div className="row">
                    
                        <div className="card">   
                        
                            <div className="card-body">
                            <div className="col"> 
                                <img src='/imagen2.jpg' alt='Imagen logo' style={{ marginLeft: 55, paddingRight: 5, width: 150, }}  /> 
                            </div>
                                <h5 className="card-title">Ingresa a tu zona transaccional</h5>
                                <br />
                                <form className="col-auto" onSubmit={enviarDatos}>
                                
                                    <label for="usuario1" className="form-label">Usuario</label>
                                    <div className="col-auto">
                                        <input 
                                        type="text" 
                                        placeholder="Usuario" 
                                        className="form-control" 
                                        onChange={handleInputChange} 
                                        name="nombre" />
                                    </div>
                                    <label for="usuario1" id="text-label" className="form-label">Contraseña</label>
                                    <div className="col-auto">
                                        <input 
                                        type="password" 
                                        placeholder="Password" 
                                        className="form-control" 
                                        onChange={handleInputChange} 
                                        name="apellido" />
                                    </div>
                                    <br />
                                
                                    <div class="form-check form-switch ">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                        <label class="form-check-label" id="text-label" for="flexSwitchCheckChecked">Recordarme</label>
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-success col-md-12"><FontAwesomeIcon icon={faSignOutAlt} size="2.5x" /> Ingresar</button>
                                </form> 
                            </div>
                        </div> 
                    </div> 
                </div>             
            </div>  
        </div>
        <ul>
            <li>{datos.nombre}</li>
            <li>{datos.apellido}</li>
        </ul>
        </Fragment>
    );
}
 
export default Login;