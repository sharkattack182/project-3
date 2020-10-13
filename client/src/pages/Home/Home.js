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
        <div className="jumbotron text-center">

        <h1>Welcome to EquiPPE <i class="fas fa-shield-virus"></i></h1>
            <p className="mission max-width">Here at Equippe we strive to make life saving equipment easy to access. We assure our products are tested to the highest standards and are always in stock. During this unprecedented time you can be certain that EquiPPE is here to ensure your saftey. Please browse our product types below and login or create an account to facilitate an order. </p>
        </div>
        <Row>
          <Col lg={10} className="center max-width">
          <div className="card card4 mb-3 homeCard">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="https://bgr.com/wp-content/uploads/2020/08/kn95-face-masks-coronavirus.jpg?quality=70&strip=all" class="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title title"><strong className="orange">Masks</strong></h5>
                <p className="card-text">We have a wide array of masks available for purchase. We carry N95 respirator masks for medical personnel. We also carry CDC recommended cloth face coverings as well as surgical masks that are regulated under 21 CFR 878.4040.</p>
              </div>
            </div>
          </div>
        </div>
          </Col>
        </Row>
        <Row>
          <Col lg={10} className="center max-width">
          <div className="card card2 mb-3 homeCard margin-top">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="https://assets.theedgemarkets.com/medical-staff-hands-in-blue-rubber-gloves-PPE_20200722030204_bloomberg.jpg?null" class="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title title"><strong className="orange">Gloves</strong></h5>
                <p className="card-text text">EquiPPE has you "covered" when it comes to gloves. We offer a variety of products. We have surgical grade latex gloves as well as non latex options available. All products are in compliance with Regulation 2016/425</p>
              </div>
            </div>
          </div>
        </div>
          </Col>
        </Row>
        <Row>
          <Col lg={10} className="center max-width ">
          <div className="card card4 mb-3 homeCard">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="https://www.gannett-cdn.com/presto/2020/05/06/USAT/559b7bee-8d49-4496-b4d4-06dded69fcb0-hand-sanitizer.jpg?crop=2021,1137,x9,y0&width=1600&height=800&fit=bounds" class="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title title"><strong className="orange">Hygeine Products</strong></h5>
                <p className="card-text">Everything you need to survive the COVID-19 pandemic. We maintain a steady supply of hand sanitizer, cleaning solutions, and sterilization products. Everything from wipes to sprays. </p>
              </div>
            </div>
          </div>
        </div>
          </Col>
        </Row>
        <Row>
          <Col lg={10} className="center max-width">
          <div className="card card2 mb-3 homeCard margin-top">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="https://static6.depositphotos.com/1117454/628/i/950/depositphotos_6285835-stock-photo-toilet-paper.jpg" class="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title title"><strong className="orange">Supplies</strong></h5>
                <p className="card-text text">While these items may not be PPE, here at EquiPPE we realize that the pandemic has created a demand for supplies that was unforeseen in the market. As such we have decided to produce some of the harder-to-get materials necessary for the pandemic.</p>
              </div>
            </div>
          </div>
        </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomePage;