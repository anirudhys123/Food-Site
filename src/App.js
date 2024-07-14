import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CoverPage from './components/CoverPage';
import StorePage from './components/StorePage';
import OrdersPage from './components/OrdersPage';
import OrdersDetailsPage from './components/OrdersDetailsPage';
import ReceiptPage from './components/ReceiptPage';
import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CoverPage />} />
          <Route path="/store/:storeId" element={<StorePage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/order-details" element={<OrdersDetailsPage />} />
          <Route path="/receipt" element={<ReceiptPage />} />
          <Route path="/item/:itemId" element={<ItemDetail />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
