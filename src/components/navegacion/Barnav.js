import React from "react";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
  
const Barnav = () =>{
    return (
        <div>
            <>
                <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="#home" >
                        <img
                            src="./logobanco.png"
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        </Navbar.Brand>                    
                        <Nav className="mx-auto" >
                            <Nav.Link as={Link} to={"/Home"} id="basic-nav-dropdown">Home</Nav.Link>
                            <NavDropdown title="Productos" id="basic-nav-dropdown" >
                                <NavDropdown.Item href="#action/3.1">Cuenta Ahorros </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Cuenta Corriente</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Creditos</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to={"/AtencionCliente"} id="basic-nav-dropdown">Atencion al cliente</Nav.Link>
                            <Nav.Link as={Link} to={"/Personas"} id="basic-nav-dropdown">Banca Personas</Nav.Link>
                        </Nav>
                    </Container>  
                </Navbar>
            </>
        </div>
    );
}

export default Barnav