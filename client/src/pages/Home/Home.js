import React, { Component } from 'react';
import '../../components/App/App.css';
import CSS from '../../pages/Home/Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Img1 from './imgs/mask1.jpg';
import Img2 from './imgs/sanitizer2.jpg';


class HomePage extends Component {

  render() {
    return (
      <div>

        <div className="jumbotron text-left"></div>

        <Row>
          <Col>
            <h1>Welcome to EquiPPE <i class="fas fa-shield-virus"></i></h1>
            <p className="mission">Here at Equippe we strive to make live saving requipment easy to access. We assure our products are tested to the highest standards and are always available. During this uncertain time you can be certain that EquiPPE is here to ensure your saftey. Please browse our product types below. Please login or create an account to facilitate an order. </p>
          </Col>
        </Row>
        <Row>
          <Col md={10} className="center">
            <div className="card bg-dark text-white">
              <img src={Img1} className="card-img" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">Masks</h5>
                <p className="card-text">We supply masks of all kinds. From n95 masks to gators and face shields.All of our products are quality tested and approved by the CDC.</p>
                <p className="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={10} className="center">
            <div className="card category-card bg-dark text-white">
              <img src={Img2} className="card-img" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">Sanitizer</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomePage;