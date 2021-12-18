//import React from "react";
import React, { useState, useEffect } from 'react';
import { Button, Col, Form, ListGroup, Row, Tab, Table } from 'react-bootstrap';
const axios = require('axios');

const Productos = () => {

    const [creditos, setCreditos] = useState({
        documento: '',
        valor: '',
        tiempo:''
    })

    const [prorrogas, setProrrogas] = useState({
        documento: '',
        fecha: '',
        referencia:'',
        valor:''
    })
    const [pagos, setPagos] = useState({
        documento: '',
        valor: '',
        cuotas:'',
        razon:''
    })

    const [list, setList] = useState([]);
    
    async function getUser() {
        try {
          const response = await axios.get('http://localhost:9000/api/pagos');
          console.log(response);
          const datas = response.data
          setList(datas)
          console.log(response)
        } catch (error) {
          console.error(error);
        }
      }

    const obtenerDatos = async (event) =>{
        event.preventDefault()
        await getUser()
       
    } 
    const [data, setData] = useState();

    /* useEffect(() =>{
        getUser()
    }, []) */

    
    const handleInputChangeP = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setProrrogas({
            ...prorrogas,
            [event.target.name] : event.target.value
        })
    }
    const handleInputChange = (event) => {
        //console.log(event.target.name)
        //console.log(event.target.value)
        setCreditos({
            ...creditos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatosC = async (event) => {
        event.preventDefault()
        await axios.post('http://localhost:9000/api/solicituds', {
            "documento": creditos.documento,
            "valor": creditos.valor,
            "tiempo": creditos.cuotas
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log('enviando datos...' + creditos.nombre + ' ' + creditos.apellido)
    }

    const enviarDatosP = async (event) => {
        event.preventDefault()
        await axios.post('http://localhost:9000/api/prorrogas', {
            "documento": prorrogas.documento,
            "valor": prorrogas.valor,
            "cuotas": prorrogas.cuotas,
            "razon": prorrogas.razon
            })
            .then(function (response) {
            console.log(response);
            })
            .catch(function (error) {
            console.log(error);
            });
        console.log('enviando datos...' + creditos.nombre + ' ' + creditos.apellido)
        /* if (creditos.nombre == 'carlos'){
            window.location.href="./GestionCliente";
      } */    
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
                Solicitar Credito
                </ListGroup.Item>
                <ListGroup.Item action variant="secondary" href="#link2">
                Solicitar prorroga de Credito
                </ListGroup.Item>
                <ListGroup.Item action variant="secondary" href="#link3">
                Generar Historial de Pagos
                </ListGroup.Item>
                <ListGroup.Item action variant="secondary" href="#link4">
                Generar Certificado de Pagos
                </ListGroup.Item>
                <ListGroup.Item action variant="secondary" href="#link5">
                Simular pago de una Cuota
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
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                        <Form.Label column sm="3">
                        Documento
                        </Form.Label>
                        <Col sm="7">
                        <Form.Control 
                        type="text" 
                        placeholder="" 
                        onChange={handleInputChange} 
                        name="documento"
                        />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                        <Form.Label column sm="3">
                        Ingrese el valor solicitado
                        </Form.Label>
                        <Col sm="7">
                        <Form.Control 
                        type="text" 
                        placeholder="" 
                        onChange={handleInputChange} 
                        name="valor"
                        />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                        <Form.Label column sm="3">
                        Ingrese el Numero de cuotas
                        </Form.Label>
                        <Col sm="7">
                        <Form.Control 
                        type="text" 
                        placeholder=""
                        onChange={handleInputChange} 
                        name="cuotas"
                        />
                        </Col>
                    </Form.Group>
                    <Button id="boton-opcion" variant="success" type="submit">
                        Enviar Solicitud
                    </Button>
                    <li>{creditos.documento}</li>
                    <li>{creditos.valor}</li>
                    <li>{creditos.cuotas}</li>
                </Form>
                </Tab.Pane>
                <Tab.Pane eventKey="#link2">
                <h2 id="titulo1">Solicitud de Prorroga del credito</h2>
                <hr />
                <Form onSubmit={enviarDatosP}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                        <Form.Label column sm="3">
                        Documento
                        </Form.Label>
                        <Col sm="7">
                        <Form.Control 
                        type="text" 
                        placeholder="" 
                        onChange={handleInputChangeP} 
                        name="documento"
                        />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                        <Form.Label column sm="3">
                        Valor del Credito
                        </Form.Label>
                        <Col sm="7">
                        <Form.Control 
                        type="text" 
                        placeholder="" 
                        onChange={handleInputChangeP} 
                        name="valor"
                        />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
                        <Form.Label column sm="3">
                        Numero de cuotas a aplazar
                        </Form.Label>
                        <Col sm="7">
                        <Form.Control 
                        type="text" 
                        placeholder=""
                        onChange={handleInputChangeP} 
                        name="cuotas"
                         />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="Form.ControlTextarea">
                        <Form.Label column sm="3">Razon para prorrogar
                        </Form.Label>
                        <Col sm="7">
                        <Form.Control 
                        as="textarea" 
                        rows={3} 
                        onChange={handleInputChangeP}
                        name="razon" 
                        />
                        </Col>
                    </Form.Group>
                    <Button id="boton-opcion" variant="success" type="submit">
                        Enviar Solicitud
                    </Button>
                    <li>{prorrogas.documento}</li>
                    <li>{prorrogas.valor}</li>
                    <li>{prorrogas.cuotas}</li>
                    <li>{prorrogas.razon}</li>
                </Form>
                </Tab.Pane>
                <Tab.Pane eventKey="#link3">
                <h2 id="titulo1">Generar historial de pagos</h2>
                <hr />

               {  <ul>
                        {
                            list.map(item =>(
                                <li>key ={item.id} {item.documento}</li>
                            ))
                        }
                    </ul> }

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
                    {list.map(elemento=>(
                        <tr>
                        <td>{elemento.id}</td>
                        {/* <td>{elemento.documento}</td> */}
                        <td>{elemento.fecha}</td>
                        <td>{elemento.referencia}</td>
                        <td>{elemento.valor}</td>
                        </tr>
                        ))
                    }
                    </tbody>
                </Table>
                <Form onSubmit={obtenerDatos}>
                    <Button id="boton-opcion" variant="success" type="submit">
                        Generar Reporte
                    </Button>
                </Form>
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
                <h2 id="titulo1">Simulacion pago de cuota</h2>
                <hr />
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                        Valor del credito
                        </Form.Label>
                        <Col sm="7">
                        <Form.Control type="text" placeholder="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                        Valor de la cuota
                        </Form.Label>
                        <Col sm="7">
                        <Form.Control type="text" placeholder="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                        Saldo
                        </Form.Label>
                        <Col sm="7">
                        <Form.Control type="text" placeholder="" />
                        </Col>
                    </Form.Group>
                    <Button id="boton-opcion" variant="success" type="submit">
                        Enviar Solicitud
                    </Button>
                </Form>
                </Tab.Pane>
            </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
        </div>
    )
}

export default Productos