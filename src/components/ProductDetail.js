import React, { useState } from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div className="product-detail-container">
      {product ? (
        <>
          <div className="product-detail-left">
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-detail-right">
            <p>Giá: {product.price} USD</p>
            <p>Mô tả: {product.description}</p>
            <div>
              <label htmlFor="quantity">Số lượng:</label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                min="1"
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              />
            </div>
            <button onClick={handleAddToCart}>
              Thêm vào giỏ hàng
              <div className="button-sparkle sparkle"></div>
              <div className="button-sparkle sparkle"></div>
              <div className="button-sparkle sparkle"></div>
            </button>
            <ul>
              {product.reviews ? (
                product.reviews.map((review, index) => (
                  <li key={index}>{review}</li>
                ))
              ) : (
                <p>Không có đánh giá nào cho sản phẩm này.</p>
              )}
            </ul>
          </div>
        </>
      ) : (
        <p>Không tìm thấy sản phẩm.</p>
      )}
    </div>
  );
};

export default ProductDetail;
