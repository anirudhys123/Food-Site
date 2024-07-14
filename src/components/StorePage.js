import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import store from '../images/store-logo.jpg';
import idly from '../images/idly.jpeg';
import dosa from '../images/dosa.jpeg';
import poori from '../images/poori.jpeg';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './StorePage.css';

function StorePage() {
  const { storeId } = useParams();

  // State to manage quantities of items
  const [quantities, setQuantities] = useState({
    idly: 0,
    dosa: 0,
    poori: 0,
  });

  // State to manage visibility of quantity controls
  const [showControls, setShowControls] = useState({
    idly: false,
    dosa: false,
    poori: false,
  });

  // State to manage filter selection using tabs
  const [filter, setFilter] = useState(0); // 0 for All, 1 for Idly, 2 for Dosa, 3 for Poori

  // State to manage total items in the cart
  const [totalItems, setTotalItems] = useState(0);

  // Scroll to top when storeId changes
  useEffect(() => {
    // Ensure the scroll bar is at the top
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [storeId]);

  // Load initial quantities from sessionStorage
  useEffect(() => {
    const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
    const newQuantities = { idly: 0, dosa: 0, poori: 0 };
    let newTotalItems = 0;

    cartItems.forEach((item) => {
      newQuantities[item.name] = item.quantity;
      newTotalItems += item.quantity;
    });

    setQuantities(newQuantities);
    setTotalItems(newTotalItems);
  }, []);

  // Function to handle incrementing quantity
  const handleIncrement = (item) => {
    setQuantities((prevQuantities) => {
      const newQuantities = {
        ...prevQuantities,
        [item]: prevQuantities[item] + 1,
      };
      updateSessionStorage(newQuantities);
      setTotalItems(totalItems + 1);
      return newQuantities;
    });
  };

  // Function to handle decrementing quantity
  const handleDecrement = (item) => {
    setQuantities((prevQuantities) => {
      const newQuantities = {
        ...prevQuantities,
        [item]: Math.max(prevQuantities[item] - 1, 0),
      };
      updateSessionStorage(newQuantities);
      setTotalItems(totalItems - 1);
      return newQuantities;
    });

    setShowControls((prevShowControls) => {
      if (quantities[item] === 1) {
        return {
          ...prevShowControls,
          [item]: false,
        };
      }
      return prevShowControls;
    });
  };

  // Function to handle adding an item
  const handleAdd = (item) => {
    handleIncrement(item);
    setShowControls((prevShowControls) => ({
      ...prevShowControls,
      [item]: true,
    }));
  };

  // Function to handle tab change
  const handleTabChange = (event, newValue) => {
    setFilter(newValue);
  };

  // Function to update sessionStorage with current quantities
  const updateSessionStorage = (newQuantities) => {
    const items = [
      { name: 'idly', quantity: newQuantities.idly, price: 105, image: idly },
      { name: 'dosa', quantity: newQuantities.dosa, price: 120, image: dosa },
      { name: 'poori', quantity: newQuantities.poori, price: 150, image: poori },
    ].filter(item => item.quantity > 0);

    sessionStorage.setItem('cartItems', JSON.stringify(items));
  };

  // Function to render items based on filter selection
  const renderItems = () => {
    switch (filter) {
      case 0: // All
        return (
          <>
            {renderItem('idly')}
            {renderItem('dosa')}
            {renderItem('poori')}
          </>
        );
      case 1: // Idly
        return renderItem('idly');
      case 2: // Dosa
        return renderItem('dosa');
      case 3: // Poori
        return renderItem('poori');
      default:
        return null;
    }
  };

  // Helper function to render individual item
  const renderItem = (item) => {
    return (
      <div className="store-item" key={item}>
        <div className="item-info">
          <div className="item-header">
            <span className="item-name">{item === 'idly' ? 'Idly' : item === 'dosa' ? 'Dosa' : 'Poori'}</span>
          </div>
          <div className="item-price">{item === 'idly' ? '₹105' : item === 'dosa' ? '₹120' : '₹150'}</div>
          <div className="item-rating">
            <span className="rating-star">★</span>
            <span className="rating-value">4.5 (5219)</span>
          </div>
          <div className="item-description">
            {item === 'idly'
              ? 'Idli is made from ground rice or rice flour mixed with ground urad dal, salt.'
              : item === 'dosa'
              ? 'Fermented rice & black gram lentil batter for a thin, crispy South Indian crepe.'
              : 'Deep-fried whole wheat flatbread, typically served puffed and crispy.'}
          </div>
        </div>
        <div className="item-image-container">
          <Link to={`/item/${item}`}>
            <img src={item === 'idly' ? idly : item === 'dosa' ? dosa : poori} alt={item} className="item-image" />
          </Link>
          {!showControls[item] ? (
            <button className="add-button" onClick={() => handleAdd(item)}>
              ADD
            </button>
          ) : (
            <div className="quantity-controls">
              <button className="quantity-button" onClick={() => handleDecrement(item)}>
                -
              </button>
              <span className="quantity">{quantities[item]}</span>
              <button className="quantity-button" onClick={() => handleIncrement(item)}>
                +
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="store-page">
      <Header totalItems={totalItems} /> {/* Pass totalItems to Header */}
      <h1 className="store-title">{`My Store - ${storeId.charAt(0).toUpperCase() + storeId.slice(1)}`}</h1>
      <div className="store-details">
        <img src={store} alt="Food" className="store-image" />
      </div>
      <div className="filter-section">
        <Tabs value={filter} onChange={handleTabChange} centered>
          <Tab label="All" style={{ fontSize: '18px', fontWeight: 'bold' }} />
          <Tab label="Idly" style={{ fontSize: '18px', fontWeight: 'bold' }} />
          <Tab label="Dosa" style={{ fontSize: '18px', fontWeight: 'bold' }} />
          <Tab label="Poori" style={{ fontSize: '18px', fontWeight: 'bold' }} />
        </Tabs>
      </div>
      <div className="store-details">
        {renderItems()}
      </div>
      <Footer />
    </div>
  );
}

export default StorePage;
