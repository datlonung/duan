//thêm logo giỏ hàng
import React from 'react';
import { Link } from 'react-router-dom';
import './CartIcon.css';

const CartIcon = ({ cart }) => {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-icon">
      <Link to="/cart">
        <img src="/images/user/giohang.png" alt="" />
        {totalItems > 0 && <span>{totalItems}</span>}
      </Link>
    </div>
  );
};

export default CartIcon;
