import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProductsPage from './pages/AllProductPages'; // Corrected import path
import ProductDetailPage from './pages/ProductPageDetails'; // Corrected import path

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/" element={<AllProductsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
