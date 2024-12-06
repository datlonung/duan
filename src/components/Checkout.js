import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = ({ cart, userInfo, setUserInfo, clearCart }) => {
  const [name, setName] = useState(userInfo.name || '');
  const [address, setAddress] = useState(userInfo.address || '');
  const [email, setEmail] = useState(userInfo.email || '');
  const [phone, setPhone] = useState(userInfo.phone || '');
  const [phoneError, setPhoneError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length !== 9) {
      setPhoneError('Số điện thoại phải là 9 chữ số');
      return;
    }
    setPhoneError('');
    setUserInfo({ name, address, email, phone });
    clearCart();
    navigate('/order-confirmation'); // Chuyển hướng đến trang xác nhận đơn hàng sau khi thanh toán
  };

  return (
    <div className="checkout-container">
      <h2>Thông Tin Thanh Toán</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Tên:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Địa chỉ:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Số điện thoại:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength="9"
            style={{ borderColor: phoneError ? 'red' : '' }}
            required
          />
          {phoneError && <p>{phoneError}</p>}
        </div>
        <button type="submit">Xác nhận thanh toán</button>
      </form>
    </div>
  );
};

export default Checkout;
