import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import FilterMenu from './FilterMenu';
import './Home.css';

const Home = ({ productList = [], setCurrentProduct, currentUser }) => {
  const [filteredProducts, setFilteredProducts] = useState(productList);
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredProducts(productList);
  }, [productList]);

  const handleProductDetail = (product) => {
    setCurrentProduct(product);
    navigate('/product-detail');
  };

  const handleFilter = ({ category, priceRange }) => {
    let filtered = productList;
    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }
    if (priceRange) {
      const priceNum = parseInt(priceRange);
      if (priceNum === 15000000) {
        filtered = filtered.filter(product => product.price === 15000000);
      } else if (priceNum === 14000000) {
        filtered = filtered.filter(product => product.price >= 14000000 && product.price <= 15000000);
      } else if (priceNum === 13999999) {
        filtered = filtered.filter(product => product.price < 14000000);
      }
    }
    setFilteredProducts(filtered);
  };

  return (
    <div className="home-container">
      <FilterMenu onFilter={handleFilter} />
      <main className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <img src={product.image} alt={product.name} onClick={() => handleProductDetail(product)} />
              <p>{product.price} USD</p>
              <button onClick={() => handleProductDetail(product)}>
                Xem chi tiết
                <div className="button-sparkle sparkle"></div>
                <div className="button-sparkle sparkle"></div>
              </button>
            </div>
          ))
        ) : (
          <p>Không có sản phẩm nào phù hợp với bộ lọc.</p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
