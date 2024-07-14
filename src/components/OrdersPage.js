import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './OrdersPage.css';

function OrdersPage() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    setCartItems(items);
  }, []);

  const calculateSubTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateCGST = () => {
    return (calculateSubTotal() * 0.025).toFixed(2); // CGST is 2.5%
  };

  const calculateSGST = () => {
    return (calculateSubTotal() * 0.025).toFixed(2); // SGST is 2.5%
  };

  const calculateTotal = () => {
    const subTotal = calculateSubTotal();
    const cgst = parseFloat(calculateCGST());
    const sgst = parseFloat(calculateSGST());
    return (subTotal + cgst + sgst).toFixed(2);
  };

  const handleIncrement = (index) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity++;
    setCartItems(updatedItems);
    sessionStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const handleDecrement = (index) => {
    const updatedItems = [...cartItems];
    if (updatedItems[index].quantity > 1) {
      updatedItems[index].quantity--;
      setCartItems(updatedItems);
      sessionStorage.setItem('cartItems', JSON.stringify(updatedItems));
    }
  };

  const handleClearCart = () => {
    sessionStorage.removeItem('cartItems');
    setCartItems([]);
  };

  const handleNext = () => {
    navigate('/order-details', {
      state: {
        cartItems,
        subTotal: calculateSubTotal(),
        cgst: calculateCGST(),
        sgst: calculateSGST(),
        total: calculateTotal(),
      },
    });
  };

  return (
    <>
      <Header />
      <div className="orders-page">
        <header className="orders-header">
          <h1>Order Summary</h1>
        </header>
        <div className="orders-content">
          {cartItems.length === 0 ? (
            <p>No items in the cart</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <span className="cart-item-name">{item.name}</span>
                </div>
                <div className="cart-item-quantity">
                  <button onClick={() => handleDecrement(index)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrement(index)}>+</button>
                </div>
                <span className="cart-item-total">₹{item.price * item.quantity}</span>
              </div>
            ))
          )}
        </div>
        <div className="order-summary">
          <div className="summary-details">
            <span>Order details</span>
            <span>{cartItems.length} Items</span>
          </div>
          <div className="summary-costs">
            <div className="cost-row">
              <span>Sub Total</span>
              <span className='value'>₹{calculateSubTotal()}</span>
            </div>
            <div className="cost-row">
              <span>CGST (2.5%)</span>
              <span className='value'>₹{calculateCGST()}</span>
            </div>
            <div className="cost-row">
              <span>SGST (2.5%)</span>
              <span className='value'> ₹{calculateSGST()}</span>
            </div>
          </div>
          <div className="total-row">
            <span>Total payable amount</span>
            <span>₹{calculateTotal()}</span>
          </div>
        </div>
        <div className="order-footer">
          <button className="clear-button" onClick={handleClearCart}>Clear</button>
          <button className="next-button" onClick={handleNext}>Next</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OrdersPage;
