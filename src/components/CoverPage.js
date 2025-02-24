import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import image from '../images/coupon.jpg';  
import './CoverPage.css';
import store from '../images/store-logo.jpg';
import ImageSlider from './ImageSlider';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function CoverPage() {
  return (
    <div>
      <Header />
      <div className='ad container text-center'>
        <img src={image} className="img-fluid" alt="Main" />
      </div>

      <br />

      <ImageSlider />

      <h1 className="text-center mt-4 mb-3">Stores Near You</h1>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <Link to="/store/madhapur" className="card">
              <img src={store} className="card-img-top" alt="Store 1" />
              <div className="card-body text-center">
                <h2 className="card-title">My Store - Madhapur</h2>
                <span className="rating-label">Customer Rating: </span>
                <div className="stars">
                  <span className="bi bi-star-fill large-icon"></span>
                  <span className="bi bi-star-fill large-icon"></span>
                  <span className="bi bi-star-fill large-icon"></span>
                  <span className="bi bi-star large-icon"></span>
                  <span className="bi bi-star large-icon"></span>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <Link to="/store/kondapur" className="card">
              <img src={store} className="card-img-top" alt="Store 2" />
              <div className="card-body text-center">
                <h2 className="card-title">My Store - Kondapur</h2>
                <span className="rating-label">Customer Rating: </span>
                <div className="stars">
                  <span className="bi bi-star-fill large-icon"></span>
                  <span className="bi bi-star-fill large-icon"></span>
                  <span className="bi bi-star-fill large-icon"></span>
                  <span className="bi bi-star-fill large-icon"></span>
                  <span className="bi bi-star large-icon"></span>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <Link to="/store/sainikpuri" className="card">
              <img src={store} className="card-img-top" alt="Store 3" />
              <div className="card-body text-center">
                <h2 className="card-title">My Store - Sainikpuri</h2>
                <span className="rating-label">Customer Rating: </span>
                <div className="stars">
                  <span className="bi bi-star-fill large-icon"></span>
                  <span className="bi bi-star-fill large-icon"></span>
                  <span className="bi bi-star-fill large-icon"></span>
                  <span className="bi bi-star-fill large-icon"></span>
                  <span className="bi bi-star large-icon"></span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CoverPage;
