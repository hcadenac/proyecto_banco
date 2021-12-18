//import React from "react";
import { Tab, ListGroup, Col, Row, Table, Form, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
const axios = require('axios');

const GestionSolicitudes = () => {

    const [list, setList] = useState([]);
    const [resultado, setResultado] = useState([]);
    
    const [dato, setDato] = useState({
        documento: '',
        // apellido: ''
    })
    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDato({
            ...dato,
            [event.target.name] : event.target.value
        })
    }
   
    const enviarDatosC = async (event) => {
        event.preventDefault()
        
        const response = await axios.get('http://localhost:9000/api/users');
        console.log(response);                
        setList(response.data);
        const filterResults = list.filter(item=>item.documento === 232323);
        setDato(filterResults);
        console.log(resultado);
           
    }
    

  const editar=()=>{

    axios.get('http://localhost:9000/api/users')
    .then(function (response) {
        console.log(response);
        
    })
    .catch(function (error) {
        console.log(error);
    });

  }

    return (
        <div>
        <br />
       <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">     
        <Row>   
            <Col sm={3}>
            <div id="panelOpcion">
            <h4>Opciones</h4>
            <br />      
            <ListGroup >
                <ListGroup.Item  id="boton-item" action variant="success" href="#link1">
                Aprobar o rechazar Solicitud de Credito
                </ListGroup.Item>
                <ListGroup.Item action variant="secondary" href="#link2">
                Aprobar o rechazar Solicitud prorroga de Credito
                </ListGroup.Item>
                <ListGroup.Item action variant="secondary" href="#link3">
                Generar creditos vigentes
                </ListGroup.Item>
                <ListGroup.Item action variant="secondary" href="#link5">
                General historial de pago de un cliente
                </ListGroup.Item>
            </ListGroup>
            </div>
            </Col>
            
            <Col sm={9}>
            <Tab.Content>
                <Tab.Pane eventKey="#link1">
                <h2 id="titulo1">Solicitud de credito de libre inversion </h2>
                <hr />
                <Form onSubmit={enviarDatosC}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                        Identificacion del Cliente
                        </Form.Label>
                        <Col sm="7">
                        <Form.Control 
                        type="text" 
                        placeholder=""
                        name="documento"
                        onChange={handleInputChange}  
                        />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                        Nombre del Cliente
                        </Form.Label>
                        <Col sm="7">
                        <Form.Control 
                        type="text" 
                        placeholder="" 
                        value={dato[1]}
                        />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                        Valor solicitado
                        </Form.Label>
                        <Col sm="7">
                        <Form.Control type="text" placeholder="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                        Numero de cuotas
                        </Form.Label>
                        <Col sm="7">
                        <Form.Control type="text" placeholder="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                        Valor cuota mensual
                        </Form.Label>
                        <Col sm="7">
                        <Form.Control type="text" placeholder="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                        Tasa de Interes
                        </Form.Label>
                        <Col sm="7">
                        <Form.Control type="text" placeholder="" />
                        </Col>
                    </Form.Group>
                    <Row sm="5">
                    <Button id="boton-opcion" variant="success" type="submit">
                        Gestionar  Solicitud
                    </Button>
                    <Button id="boton-opcion" variant="success" type="submit">
                        Rechazar Solicitud
                    </Button>
                    </Row>
                </Form>
                    <ul>
                        <li>{dato.documento}</li>
                    </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                <h2 id="titulo1">Solicitud de Prorroga del credito</h2>
                <hr />
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                        Identificacion del Cliente
                        </Form.Label>
                        <Col sm="7">
                        <Form.Control type="text" placeholder="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                        Valor del Credito
                        </Form.Label>
                        <Col sm="7">
                        <Form.Control type="text" placeholder="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                        Numero de cuotas a aplazar
                        </Form.Label>
                        <Col sm="7">
                        <Form.Control type="text" placeholder="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label column sm="3">Razon para prorrogar
                        </Form.Label>
                        <Col sm="7">
                        <Form.Control as="textarea" rows={3} />
                        </Col>
                    </Form.Group>
                    <Row sm="5">
                    <Button id="boton-opcion" variant="success" type="submit">
                        Aprobar Solicitud
                    </Button>
                    <Button id="boton-opcion" variant="success" type="submit">
                        Rechazar Solicitud
                    </Button>
                    </Row>
                </Form>
                </Tab.Pane>
                <Tab.Pane eventKey="#link3">
                <h2 id="titulo1">Informacion Creditos Vigentes </h2>
                <hr />
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                        Identificacion del Cliente
                        </Form.Label>
                        <Col sm="7">
                        <Form.Control type="text" placeholder="" />
                        </Col>
                    </Form.Group>
                </Form>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Referencia</th>
                        <th>Valor($)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>12345</td>
                        <td>25000</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>121245</td>
                        <td>35000</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>122230</td>
                        <td>35000</td>
                        </tr>
                    </tbody>
                </Table>
                </Tab.Pane>
                <Tab.Pane eventKey="#link4">
                <h2 id="titulo1">Certificados de pagos</h2>
                <hr />
                <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Certificado</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                    <Button id="boton-opcion" variant="success" type="submit">
                        Generar Certificado
                    </Button>
                </Form>
                </Tab.Pane>
                <Tab.Pane eventKey="#link5">
                <h2 id="titulo1">Generar historial de pagos</h2>
                <hr />
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                        Identificacion del Cliente
                        </Form.Label>
                        <Col sm="7">
                        <Form.Control type="text" placeholder="" />
                        </Col>
                    </Form.Group>
                </Form>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Fecha de Pago</th>
                        <th>Referencia</th>
                        <th>Valor($)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>05-07-2021</td>
                        <td>12345</td>
                        <td>25000</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>05-08-2021</td>
                        <td>121245</td>
                        <td>35000</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>05-09-2021</td>
                        <td>122230</td>
                        <td>35000</td>
                        </tr>
                    </tbody>
                </Table>
                </Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
        </div>
    )
}

export default GestionSolicitudes