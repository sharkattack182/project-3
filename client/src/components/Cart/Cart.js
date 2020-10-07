import React, { useState, useEffect } from 'react';
import './App.css';
// import Cart from './components/Cart';
// import Example from './components/Example';


function Cart() {
    // const [products, setProducts] = useState([]);
    // const [cartItems, setCartItems] = useState([]);
var count1 = 0;
// let count2 = 0;
// let count3 = 0;

    const [item1, setItem1State] = useState(
        {
            id: 1,
            name: "Mask",
            count: 0,
            price: 10.00,
            inCart: false
        });
    const [item2, setItem2State] = useState(
        {
            id: 2,
            name: "Gown",
            count: 0,
            price: 10.00,
            inCart: false
        });
    const [item3, setItem3State] = useState(
        {
            id: 3,
            name: "Gloves",
            count: 0,
            price: 10.00,
            inCart: false
        });

    const items = [item1, item2, item3]

    const cartItems = items.filter(item => item.inCart)

    // useEffect(() => {
    //     // Set cartItems to cart items local storage

    // });

    return (
        <div>
            <h1>EquiPPE</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                {/* <div><h1>Mask</h1> <button onClick={() => setItem1State(count1++ { ...item1, inCart: true, count: count1 })}>Add to Cart</button></div> */}
                <div><h1>Mask</h1><button onClick={() => setItem1State({ ...item1, inCart: true, count: count1 })}>Add to Cart</button></div>
                <div><h1>Gown</h1><button onClick={() => setItem2State({ ...item2, inCart: true, count: 1 })}>Add to Cart</button></div>
                <div><h1>Gloves</h1><button onClick={() => setItem3State({ ...item3, inCart: true, count: 1 })}>Add to Cart</button></div>
                <div>
                    <h5>Shopping Cart</h5>
                    {cartItems.map(item => (
                        <p key={item.id} value={item.id} >{item.name} {" Qty " + item.count + " x "} {"$" + item.price.toFixed(2)}
                            {/* <button onClick={() => setItem1State({ ...item1, inCart: false, count: 0 })}>Remove</button> */}
                            <button onClick={() => setItem1State({ ...item1, count: count1 + 2})}>Increase</button>
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <Cart className="cart" />
        </div>
    );
}

export default App;
