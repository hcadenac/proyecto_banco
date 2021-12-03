import React from "react";
import { Tab, ListGroup, Col, Row, Table, Form, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Productos = () => {
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
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                        Ingrese el valor solicitado
                        </Form.Label>
                        <Col sm="7">
                        <Form.Control type="text" placeholder="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                        Ingrese el Numero de cuotas
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
                <Tab.Pane eventKey="#link2">
                <h2 id="titulo1">Solicitud de Prorroga del credito</h2>
                <hr />
                <Form>
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
                    <Button id="boton-opcion" variant="success" type="submit">
                        Enviar Solicitud
                    </Button>
                </Form>
                </Tab.Pane>
                <Tab.Pane eventKey="#link3">
                <h2 id="titulo1">Generar historial de pagos</h2>
                <hr />
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