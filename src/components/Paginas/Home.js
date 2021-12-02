import React from "react";
import { Carousel, Col, Container, Row } from 'react-bootstrap';

const Home = () => {
    return (
      <div>
        <h2 id="titulo1">Servicios y productos destacados del banco popular</h2>
        <Container fluid="md" style={{ width: 500}}>
          <Row>
          <Col></Col>
            <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./bancoP.jpg"
                alt="First slide"
              />
            <Carousel.Caption>
              <h3 id ="tituloC">Credito Libre Inversion</h3>
              <p>Solicita tu credito y te lo aprobamos en linea.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
              className="d-block w-100"
              src="./bancoC.png"
              alt="Second slide"
            />

              <Carousel.Caption>
              <h3 id ="tituloC">Cuenta de ahorros</h3>
                <p>Sin cuota de manejo y giros gratis.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
              className="d-block w-100"
              src="./bancoT.jpg"
              alt="Third slide"
            />
              <Carousel.Caption>
                <h3 id ="tituloC">Tarjetas de Credito</h3>
                <p>Te la aprobamos en linea y te la entregamos en tu casa.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
        </Container>
      </div> 
    )
}

export default Home