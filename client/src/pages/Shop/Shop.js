import React, { Component } from 'react';
// import ProductView from './../../components/ProductView/productview'
// import ProductCard from './../../components/ProductView/productview'
// import About from '../About/About'

// import React from 'react';
// import {TshirtList } from "./TshirtList";
// import './App.css';

import '../../components/App/App.css';

// import { CartProvider } from './CartContext';
// import { Cart } from '../Cart/Cart';
import { CartProvider } from '../../contexts/CartContext';
// import { TshirtList } from '../Tshirt/TshirtList';
import { Cart } from '../../components/Cart/Cart';
import { TshirtList } from '../../components/Tshirt/TshirtList';
// import App from '../../components/App/App';
import API from '../../lib/API';
import AuthContext from '../../contexts/AuthContext';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Shop extends Component {
  static contextType = AuthContext;

  state = {
    isLoading: true,
    error: ""
  }

  componentDidMount() {
    API.Secrets.getAll(this.context.authToken)
      .then(response => response.data)
      .then(secrets => this.setState({ secrets }))
      .catch(err => {
        if (err.response.status === 401) {
          return this.setState({ error: "Unauthorized. Please login." });
        }

        console.log(err);
      })
      .finally(() => this.setState({ isLoading: false }));
  }


  render() {
    return (
      <div>

        <div className="jumbotron text-center">
        <h1>Our Products <i class="fas fa-shield-virus"></i></h1>
            <p className="trust max-width">Please browse our exclusive products below. Just press checkout whenever you're done shopping. </p>
        </div>

        <CartProvider>
          <div>
            <Row>
            <Col md={8}>
            <TshirtList />
            </Col>
            <Col md={4}>
            <div className="blue1">
              <Cart />
            </div>
              
            </Col>
            </Row>
          </div>
        </CartProvider>
        {/* </row> */}
      </div>
    );
  }
}

export default Shop;