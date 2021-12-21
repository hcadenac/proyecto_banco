//import React from "react";
import React, { useEffect, useState } from 'react';
import { Button, Col, Form, ListGroup, Row, Tab, Table } from 'react-bootstrap';
const axios = require('axios');

const GestionSolicitudes = () => {

    const [list, setList] = useState([{}]);
    const [list2, setList2] = useState([{}]);
    const [resultado, setResultado] = useState();
    

    const [nombre, setNombre] = useState(' ')
    const [valor, setValor] = useState('')
    const [tiempo, setTiempo] = useState('')
    const [ingreso, setIngreso] = useState()
    const [egreso, setEgreso] = useState('')
    const [cuota, setCuota] = useState('')
    const [int, setInt] = useState('')
    const [aprob, setAprob] = useState('')
    
    const [final, setfinal] = useState(true)
    const [disponible, setDisponible] = useState('')

    const [dato, setDato] = useState({
        documento: '',
        nombre: ''
    })
    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDato({
            ...dato,
            [event.target.name] : event.target.value
        })
    }
    
    useEffect(() => {
        axios.get('http://localhost:9000/api/users').then((response) => {
            setList(response.data);
            console.log('lista '+list);
            setfinal(true);
        });

        axios.get('http://localhost:9000/api/solicituds').then((response2) => {
            setList2(response2.data);
            console.log('lista '+list);
        });
      }, [setList]);


      console.log('ingreso '+ingreso)



    const enviarDatosC =  (event) => {
       event.preventDefault()        
        //const response = await axios.get('http://localhost:9000/api/users');
        console.log(list);                
        //setList(response.data);
        console.log('el dato '+dato.documento)
        const filterResults = list.filter(item=>item.documento == dato.documento);
        
        console.log('resultado '+filterResults);
        //console.log("dato");
        setNombre(filterResults.map(elemento=>(elemento.nombre)));
        setIngreso(filterResults.map(elemento=>(elemento.ingresos)));
        setEgreso(filterResults.map(elemento=>(elemento.egresos)));
        var i = (filterResults.map(elemento=>(elemento.ingresos)));
        var e = (filterResults.map(elemento=>(elemento.egresos)));
        setAprob((i - e)*0.3);
        /////
        //console.log('ingreso '+ingreso)
        //const response2 = await axios.get('http://localhost:9000/api/solicituds');
        //setList2(response2.data);
        //console.log(response2);   
        const filterResults2 = list2.filter(item=>item.documento == dato.documento);
        setValor(filterResults2.map(elemento=>(elemento.valor)));
        setTiempo(filterResults2.map(elemento=>(elemento.tiempo)));
               
        const vCapital = (valor/tiempo);   
        const deudaTotal = (valor - vCapital);    
        const interes = (0.02*deudaTotal);
        const tcuota  = (interes + vCapital);
        setCuota(tcuota);
        setInt('2% mensual')
        setAprob((filterResults.map(elemento=>(elemento.ingresos)) - filterResults.map(elemento=>(elemento.egresos)))*0.3);
        
       
        console.log('ingresos : '+i)
        console.log('aprobo : '+aprob)
        //setDisponible = (Disponible);
        //console.log('dispo'+fisponible);

        if  (final ){
             setResultado(' CREDITO APROBADO');
        }// }else {
        //      setResultado(' CREDITO RECHAZADO');
        // }            
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
                    <h1>{resultado}</h1>
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
                        value={nombre}
                        />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                        Valor solicitado
                        </Form.Label>
                        <Col sm="7">
                        <Form.Control 
                        type="text" 
                        placeholder="" 
                        value={valor}
                        />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                        Numero de cuotas
                        </Form.Label>
                        <Col sm="7">
                        <Form.Control 
                        type="text" 
                        placeholder="" 
                        value={tiempo}
                        />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                        Valor cuota mensual
                        </Form.Label>
                        <Col sm="7">
                        <Form.Control 
                        type="text" 
                        value={cuota}
                        placeholder="" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                        Tasa de Interes
                        </Form.Label>
                        <Col sm="7">
                        <Form.Control 
                        type="text" 
                        value={int}
                        placeholder="" />
                        </Col>
                    </Form.Group>
                   
                    <Row sm="5">
                    <Button id="boton-opcion" variant="success" type="submit">
                        Gestionar  Solicitud
                    </Button>
                    {/* <Button id="boton-opcion" variant="success" type="submit">
                        Rechazar Solicitud
                    </Button> */}
                    </Row>
                </Form>
                    {/* <ul>
                        <li>{dato.documento}</li>
                    </ul> */}
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
                        Gestionar Solicitud
                    </Button>
                    {/* <Button id="boton-opcion" variant="success" type="submit">
                        Rechazar Solicitud
                    </Button> */}
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