import React from "react";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { faHome, faListAlt, faUserAlt, faHeadset, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  
const Barnav = () =>{
    const titleProducto = <span><FontAwesomeIcon icon={faListAlt}/>  Producto</span>
    const titlePersonas = <span><FontAwesomeIcon icon={faUserAlt}/>  Banca Personas</span>

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
                            <Nav.Link as={Link} to={"/Home"} id="basic-nav-dropdown"><FontAwesomeIcon icon={faHome} />  Home</Nav.Link>
                            <NavDropdown title={titleProducto} id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to={"/Productos"}>Cuenta Ahorros </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Cuenta Corriente</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/Productos"}>Creditos</NavDropdown.Item>
                                </NavDropdown>
                            <Nav.Link as={Link} to={"/Login"} id="basic-nav-dropdown"><FontAwesomeIcon icon={faHeadset} />  Atencion al cliente</Nav.Link>
                            <NavDropdown title={titlePersonas} id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to={"/GestionCliente"}>Gestion Clientes </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Gestion Creditos</NavDropdown.Item>
                                </NavDropdown>
                            {/* <Nav.Link as={Link} to={"/Login"} id="basic-nav-dropdown"><FontAwesomeIcon icon={faUserAlt} />  Banca Personas</Nav.Link> */}
                        </Nav>
                    </Container>  
                </Navbar>
            </>
        </div>
    );
}

export default Barnav