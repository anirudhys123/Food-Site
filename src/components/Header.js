// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../images/logo.png';
// import './Header.css';
// import { FaLocationDot } from "react-icons/fa6";

// const Header = () => {
//   const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
//   const totalItems = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

//   return (
//     <header>
//       <div className='logo-wrapper'>
//         <img src={logo} alt="Salon Logo" className="logo" />
//         <div className='current-location'>
//           <span style={{ fontSize: '20px', marginRight: '10px', marginLeft: '10px' }}>Current Location</span>
//           <FaLocationDot className="location-icon" />
//         </div>
//         <div className='search-container'>
//           <select style={{ fontSize: '20px' }}>
//             <option>SR Nagar</option>
//           </select>
//           <input type="search" className='form-control' placeholder='Search your store' style={{ fontSize: '20px' }} />
//           <button>Search</button>
//         </div>
//         <Link to="/" className='home'>
//           <span className='bi bi-house-door-fill'>Home</span>
//         </Link>
//         <Link to="/orders" className='orders'>
//           <span className='bi bi-bag-fill'>Cart items</span>
//           {totalItems > 0 && <span className='order-count'>{totalItems}</span>}
//         </Link>
//         <Link to="/receipt" className='receipt'>
//           <span className="bi bi-receipt">Receipts</span>
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/ani-new.png';
import './Header.css';
import { FaLocationDot } from "react-icons/fa6";

const Header = () => {
  const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
  const totalItems = cartItems.length;
  // const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
  // const totalItems = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <header>
      <div className='logo-wrapper'>
      <img src={logo} alt="Salon Logo" style={{ width: '200px', height: '100px', marginRight: '20px' }} />
        <div className='current-location'>
          <span style={{ fontSize: '20px', marginRight: '10px', marginLeft: '10px' }}>Current Location</span>
          <FaLocationDot className="location-icon" />
        </div>
        <div className='search-container'>
          <select style={{ fontSize: '20px' }}>
            <option>SR Nagar</option>
          </select>
          <input type="search" className='form-control' placeholder='Search your store' style={{ fontSize: '20px' }} />
          <button>Search</button>
        </div>
        <Link to="/" className='home'>
          <span className='bi bi-house-door-fill'>Home</span>
        </Link>
        <Link to="/orders" className='orders'>
          <span className='bi bi-bag-fill'>Orders</span>
          {totalItems > 0 && <span className='order-count'>{totalItems}</span>}
        </Link>
        <Link to="/receipt" className='receipt'>
          <span className="bi bi-receipt">Receipts</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
