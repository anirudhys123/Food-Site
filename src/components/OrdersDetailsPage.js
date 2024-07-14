import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OrdersDetailsPage.css';
import Header from './Header';
import Footer from './Footer';
import RazorpayPayment from './RazorpayPayment'; // Import the RazorpayPayment component

function OrderDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, subTotal, cgst, sgst, total } = location.state || { cartItems: [], subTotal: 0, cgst: 0, sgst: 0, total: 0 };

  const [deliveryType, setDeliveryType] = useState('delivery');
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [preferredTime, setPreferredTime] = useState('');
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const [deliveryLocation, setDeliveryLocation] = useState('');
  const [locations] = useState(['SR Nagar', 'Madhapur', 'Banjara Hills', 'Gachibowli']);

  const dropdownRefs = useRef([]);

  const toggleDropdown = (dropdown) => {
    setVisibleDropdown(visibleDropdown === dropdown ? null : dropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRefs.current.every(ref => ref && !ref.contains(event.target))) {
      setVisibleDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleConfirmOrder = () => {
    const receiptData = {
      cartItems,
      subTotal,
      cgst,
      sgst,
      total,
      deliveryType,
      deliveryLocation,
      preferredTime,
      paymentMethod
    };

    // Save receipt data to local storage
    localStorage.setItem('receiptData', JSON.stringify(receiptData));

    if (paymentMethod === 'online') {
      // Trigger Razorpay payment
      document.getElementById('razorpay-button').click();
    } else {
      // Cash on Delivery
      alert('Order successfully placed!');
      navigate('/receipt');
    }
  };

  return (
    <>
      <Header />
      <div className="order-details-page">
        <header className="details-header">
          <h1>Order Details</h1>
        </header>
        <div className="details-content">
          <div className="dropdown-section">
            <div className="dropdown" ref={el => dropdownRefs.current[0] = el}>
              <button
                className={`dropdown-button ${visibleDropdown === 'orderSummary' ? 'active' : ''}`}
                onClick={() => toggleDropdown('orderSummary')}
              >
                <span className='a'>Order Summary</span>
                <span className={`arrow ${visibleDropdown === 'orderSummary' ? 'up' : 'down'}`}></span>
              </button>
              {visibleDropdown === 'orderSummary' && (
                <div className="dropdown-content">
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
                          <span>{item.quantity} x ₹{item.price}</span>
                        </div>
                        <span className="cart-item-total">₹{item.price * item.quantity}</span>
                      </div>
                    ))
                  )}
                  <div className="order-summary">
                    <div className="summary-costs">
                      <div className="cost-row">
                        <span>Sub Total</span>
                        <span className='value'>₹{subTotal}</span>
                      </div>
                      <div className="cost-row">
                        <span>CGST (2.5%)</span>
                        <span className='value'>₹{cgst}</span>
                      </div>
                      <div className="cost-row">
                        <span>SGST (2.5%)</span>
                        <span className='value'>₹{sgst}</span>
                      </div>
                    </div>
                    <div className="total-row">
                      <span>Total payable amount</span>
                      <span>₹{total}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="dropdown" ref={el => dropdownRefs.current[1] = el}>
              <button
                className={`dropdown-button ${visibleDropdown === 'delivery' ? 'active' : ''}`}
                onClick={() => toggleDropdown('delivery')}
              >
                <span className='a'>Delivery</span>
                <span className={`arrow ${visibleDropdown === 'delivery' ? 'up' : 'down'}`}></span>
              </button>
              {visibleDropdown === 'delivery' && (
                <div className="dropdown-content">
                  <fieldset>
                    <legend>Delivery Options</legend>
                    <dl>
                      <div className="option-container">
                        <dt>
                          <label>
                            <input
                              type="checkbox"
                              checked={deliveryType === 'delivery'}
                              onChange={() => setDeliveryType('delivery')}
                            />
                            <span>Delivery to: {deliveryLocation || "SR Nagar"}</span>
                          </label>
                        </dt>
                        <dd>
                          <select
                            value={deliveryLocation}
                            onChange={(e) => setDeliveryLocation(e.target.value)}
                          >
                            <option value="" disabled>Change delivery location</option>
                            {locations.map((location, index) => (
                              <option key={index} value={location}>
                                {location}
                              </option>
                            ))}
                          </select>
                        </dd>
                      </div>
                      <div className="option-container">
                        <dt>
                          <label>
                            <input
                              type="checkbox"
                              checked={deliveryType === 'takeaway'}
                              onChange={() => setDeliveryType('takeaway')}
                            />
                            <span>Takeaway</span>
                          </label>
                        </dt>
                      </div>
                    </dl>
                  </fieldset>
                </div>
              )}
            </div>
            <div className="dropdown" ref={el => dropdownRefs.current[2] = el}>
              <button
                className={`dropdown-button ${visibleDropdown === 'deliveryOption' ? 'active' : ''}`}
                onClick={() => toggleDropdown('deliveryOption')}
              >
                <span className='a'>Delivery Option</span>
                <span className={`arrow ${visibleDropdown === 'deliveryOption' ? 'up' : 'down'}`}></span>
              </button>
              {visibleDropdown === 'deliveryOption' && (
                <div className="dropdown-content">
                  <label>Preference Time</label>
                  <input
                    type="time"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    style={{marginLeft:'30px',display:'flex'}}
                  />
                  {preferredTime && <p style={{fontSize:'20px',fontWeight:'bold'}}>Selected Time: {preferredTime}</p>}
                </div>
              )}
            </div>
            <div className="dropdown" ref={el => dropdownRefs.current[3] = el}>
              <button
                className={`dropdown-button ${visibleDropdown === 'paymentMethod' ? 'active' : ''}`}
                onClick={() => toggleDropdown('paymentMethod')}
              >
                <span className='a'>Payment Method</span>
                <span className={`arrow ${visibleDropdown === 'paymentMethod' ? 'up' : 'down'}`}></span>
              </button>
              {visibleDropdown === 'paymentMethod' && (
                <div className="dropdown-content">
                  <label>
                    <input
                      type="checkbox"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                    />
                    <span>Cash On Delivery</span>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={paymentMethod === 'online'}
                      onChange={() => setPaymentMethod('online')}
                    />
                    <span>Online Payment</span>
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="order-footer">
          <span className="total-amount">₹{total}</span>
          <button className="confirm-button" onClick={handleConfirmOrder}>Confirm Order</button>
        </div>
        {paymentMethod === 'online' && (
          <RazorpayPayment
            total={total}
            storeName="Anirudh Solutions" // Pass the store name here
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export default OrderDetailsPage;
