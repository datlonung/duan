import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cart, productList, updateQuantity, removeFromCart, handleCheckout, addToCart, isLoggedIn }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    handleCheckout(total);
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Lấy danh sách các sản phẩm ngẫu nhiên không có trong giỏ hàng
  const getRandomProducts = (count) => {
    const productsNotInCart = productList.filter(product => 
      !cart.some(item => item.id === product.id)
    );
    return productsNotInCart.sort(() => 0.5 - Math.random()).slice(0, count);
  };

  const relatedProducts = getRandomProducts(6);

  const handleBuyNow = (product) => {
    if (isLoggedIn) {
      setSelectedProduct(product);
      setShowConfirmation(true);
    } else {
      navigate('/checkout');
    }
  };

  const confirmPurchase = () => {
    addToCart(selectedProduct);
    removeFromCart(selectedProduct.id); // Xóa sản phẩm khỏi giỏ hàng
    setShowConfirmation(false);
    navigate('/order-confirmation');
  };

  return (
    <div className="cart-container">
      <h2>Giỏ hàng</h2>
      {cart.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>Giá: {item.price} USD</p>
                <p>Số lượng: <input type="number" value={item.quantity} onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))} /></p>
                <button onClick={() => removeFromCart(item.id)}>Xóa</button>
              </div>
            </div>
          ))}
          <h3 className="cart-total">Tổng tiền: {totalAmount} USD</h3>
          <button className="checkout-button" onClick={handleCheckoutClick}>Thanh toán</button>
        </div>
      )}
      {relatedProducts.length > 0 && (
        <div className="related-products">
          <h3>Sản phẩm khác</h3>
          <div className="product-list">
            {relatedProducts.map((product) => (
              <div key={product.id} className="product-card">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <p>{product.price} USD</p>
                <button onClick={() => handleBuyNow(product)}>Mua ngay</button>
              </div>
            ))}
          </div>
        </div>
      )}
      {showConfirmation && (
        <div className="confirmation-dialog">
          <p>Bạn có muốn mua sản phẩm này?</p>
          <button onClick={confirmPurchase}>Đồng ý</button>
          <button onClick={() => setShowConfirmation(false)}>Hủy</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
