import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './ReceiptPage.css';

function ReceiptPage() {
  const [receiptData, setReceiptData] = useState(null);

  useEffect(() => {
    // Retrieve receipt data from local storage
    const storedReceiptData = localStorage.getItem('receiptData');
    if (storedReceiptData) {
      setReceiptData(JSON.parse(storedReceiptData));
    }
  }, []);

  const shareReceiptData = () => {
    if (navigator.share && receiptData) {
      navigator.share({
        title: 'Receipt',
        text: `Here is your receipt:\n\n${generateReceiptText(receiptData)}`,
        url: window.location.href
      })
      .then(() => console.log('Share successful'))
      .catch((error) => console.log('Share failed', error));
    } else {
      alert('Sharing is not supported on this browser.');
    }
  };

  const generateReceiptText = (data) => {
    const { cartItems, subTotal, cgst, sgst, total, deliveryType, deliveryLocation, preferredTime, paymentMethod } = data;
    let receiptText = `Items:\n`;
    cartItems.forEach(item => {
      receiptText += `${item.name} (${item.quantity} x ₹${item.price}) = ₹${item.price * item.quantity}\n`;
    });
    receiptText += `\nSub Total: ₹${subTotal}\nCGST (2.5%): ₹${cgst}\nSGST (2.5%): ₹${sgst}\nTotal: ₹${total}\n`;
    receiptText += `\nDelivery Type: ${deliveryType}`;
    if (deliveryType === 'delivery') {
      receiptText += `\nDelivery Location: ${deliveryLocation}`;
    }
    receiptText += `\nPreferred Delivery Time: ${preferredTime || "No preferred time selected"}`;
    receiptText += `\nPayment Method: ${paymentMethod === 'cod' ? 'Cash On Delivery' : 'Online Payment'}`;
    return receiptText;
  };

  if (!receiptData) {
    return (
      <>
        <Header />
        <div className="receipt-page">
          <header className="receipt-header">
            <h1>Receipt</h1>
          </header>
          <div className="receipt-content">
            <p>No receipt data found.</p>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  const { cartItems, subTotal, cgst, sgst, total, deliveryType, deliveryLocation, preferredTime, paymentMethod } = receiptData;

  return (
    <>
      <Header />
      <div className="receipt-page">
        <header className="receipt-header">
          <h1>Receipt</h1>
        </header>
        <div className="receipt-content">
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
          <div className="delivery-details">
            <h2>Delivery Details</h2>
            <div className="delivery-type">
              <span className='b'>Type: {deliveryType}</span>
            </div>
            {deliveryType === 'delivery' && (
              <div className="delivery-location">
                <span className='b'>Location: {deliveryLocation}</span>
              </div>
            )}
          </div>
          <div className="delivery-option">
            <h2>Preferred Delivery Time</h2>
            <span className='b'>{preferredTime || "No preferred time selected"}</span>
          </div>
          <div className="payment-method">
            <h2>Payment Method</h2>
            <span className='b'>{paymentMethod === 'cod' ? 'Cash On Delivery' : 'Online Payment'}</span>
          </div>
          <div className="button-group" style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
            {/* <button className="clear-button" onClick={clearReceiptData} style={{ marginRight: '10px' }}>Clear</button> */}
            <button className="share-button" onClick={shareReceiptData}>Share</button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ReceiptPage;
