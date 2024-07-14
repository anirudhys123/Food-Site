

import React, { useEffect } from 'react';

function RazorpayPayment({ total, storeName }) {
  useEffect(() => {
    const loadRazorpayScript = () => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);
    };
    
    loadRazorpayScript();
  }, []);

  const handleRazorpayPayment = () => {
    const options = {
      key: 'rzp_test_k3e3fimeByvpbP',
      amount: total * 100, // Amount in paise
      currency: 'INR',
      name: storeName,
      description: 'Order Payment',
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        // Redirect to the receipt page or show a success message
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999'
      },
      theme: {
        color: '#3399cc'
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button id="razorpay-button" style={{ display: 'none' }} onClick={handleRazorpayPayment}>
      Pay with Razorpay
    </button>
  );
}

export default RazorpayPayment;
