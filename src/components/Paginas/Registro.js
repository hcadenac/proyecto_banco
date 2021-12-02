import React from "react";
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

const Registro = () => {
    return (
    <div>
        <Container id="container-reg">
            <Card>
            <Card.Body>
                <Form>
                <Row className="mb-2">
                    <Form.Group as={Col} controlId="formGridNombre" id="text-label">
                    <Form.Label>Nombres</Form.Label>
                    <Form.Control type="text" placeholder="" />
                    </Form.Group>
                </Row>
                <Row className="mb-2">
                    <Form.Group as={Col} controlId="formGridApellio" id="text-label">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control type="text" placeholder="" />
                    </Form.Group>
                </Row>

                <Row className="mb-2">
                    
                    <Form.Group as={Col} controlId="formGridTipdoc" id="text-label">
                    <Form.Label>Tipo Documento</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Seleccione...</option>
                        <option>Cedula de Ciudadania</option>
                        <option>Pasaporte</option>
                        <option>Cedula de Extranjeria</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGriNumdoc" id="text-label">
                    <Form.Label>Numero Documento</Form.Label>
                    <Form.Control type="text" placeholder="" />
                    </Form.Group>

                </Row>

                <Row className="mb-2">
                    <Form.Group as={Col} controlId="formGridZip" id="text-label">
                    <Form.Label>Fecha Nacimiento</Form.Label>
                    <Form.Control type="date" placeholder="" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip" id="text-label">
                    <Form.Label>Fecha Expedicion</Form.Label>
                    <Form.Control type="date" placeholder="" />
                    </Form.Group>
                </Row>

                <Row className="mb-2">
                    
                    <Form.Group as={Col} controlId="formGridTipdoc" id="text-label">
                    <Form.Label>Valor Ingresos</Form.Label>
                    <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGriNumdoc" id="text-label">
                    <Form.Label>Valor Egresos</Form.Label>
                    <Form.Control type="text" placeholder="" />
                    </Form.Group>
                </Row>
                <div className="d-grid gap-2">
                <Button variant="success" type="submit">Registrarse</Button>
                </div>
                </Form>
            </Card.Body>
            </Card>
        </Container>
    </div>
    )
}

export default Registro