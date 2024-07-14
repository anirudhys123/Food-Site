import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import image from '../images/coupon.jpg';  // Adjust image paths as neededcls
import './CoverPage.css';
import store from '../images/store-logo.jpg';
import ImageSlider from './ImageSlider';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function CoverPage() {
  return (
    <div>
      <Header />
      <div className='ad' style={{ marginLeft: '180px', marginTop: '20px' }}>
        <img src={image} width={1200} height={400} alt="Main" />
      </div>
      <br />
      
      <ImageSlider/>
      
      <h1 style={{ margin: '10px', marginLeft: '640px',marginTop:'40px',marginBottom:'30px' }}>Stores Near You</h1>
      
      <div className="d-flex justify-content-around">
        <Link to="/store/madhapur" className="card" style={{border:'3px solid gray',borderRadius:'15px'}} >
          <img src={store} className="card-img-top" alt="Store 1" style={{ marginTop: '10px' }} />
          <div className="card-body">
            <h2 className="card-title">My Store - Madhapur</h2>
            <div className='card-body'>
            <span style={{ fontSize: '25px' }}> Customer Rating: </span>
            <span className="bi bi-star-fill large-icon"></span>
            <span className="bi bi-star-fill large-icon"></span>
        <span className="bi bi-star-fill large-icon"></span>
        <span className="bi bi-star large-icon"></span>
        <span className="bi bi-star large-icon"></span>
        {/* <span class="bi bi-star-half large-icon"></span> */}

            </div>
          </div>
          
        </Link>
        <Link to="/store/kondapur" className="card" style={{border:'3px solid gray',borderRadius:'15px'}}>
          <img src={store} className="card-img-top" alt="Store 2" style={{ marginTop: '10px' }} />
          <div className="card-body">
            <h2 className="card-title">My Store - Kondapur</h2>
            <div className='card-body'>
            <span style={{ fontSize: '25px' }}> Customer Rating: </span>
            <span className="bi bi-star-fill large-icon"></span>
            <span className="bi bi-star-fill large-icon"></span>
        <span className="bi bi-star-fill large-icon"></span>
        <span className="bi bi-star-fill large-icon"></span>
        <span className="bi bi-star large-icon"></span>
        {/* <span class="bi bi-star-half large-icon"></span> */}

            </div>
          </div>
        </Link>
        <Link to="/store/sainikpuri" className="card" style={{border:'3px solid gray',borderRadius:'15px'}}
        >
          <img src={store} className="card-img-top" alt="Store 3" style={{ marginTop: '10px' }} />
          <div className="card-body">
            <h2 className="card-title">My Store - Sainikpuri</h2>
            <div className='card-body'>
            <span style={{ fontSize: '25px' }}> Customer Rating: </span>
            <span className="bi bi-star-fill large-icon"></span>
            <span className="bi bi-star-fill large-icon"></span>
        <span className="bi bi-star-fill large-icon"></span>
        <span className="bi bi-star-fill large-icon"></span>
        <span className="bi bi-star large-icon"></span>
        {/* <span class="bi bi-star-half large-icon"></span> */}

            </div>
          </div>
        </Link>
      </div>
      
      <Footer />
    </div>
  );
}

export default CoverPage;
