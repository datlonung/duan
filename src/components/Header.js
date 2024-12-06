import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'

const Header = ({ currentUser, handleLogout }) => {
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    handleLogout();
    navigate('/login'); // Điều hướng đến trang đăng nhập sau khi đăng xuất
  };

  return (
    <header>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/images/user/logo.png" alt="Logo" style={{ width: '50px', height: '50px', marginRight: '10px',borderRadius:'50%' }} />
        <h1>Cửa Hàng Đồ Hiệu</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/contact">Liên hệ</Link></li>
          {!currentUser && <li><Link to="/login">Đăng nhập</Link></li>}
          {!currentUser && <li><Link to="/register">Đăng ký</Link></li>}
          {currentUser && currentUser.username === 'admin' && <li><Link to="/admin">Quản lí sản phẩm</Link></li>}
        </ul>
      </nav>
      {currentUser && (
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer',}} onClick={handleAvatarClick}>
          <span>{currentUser.username === 'admin' ? 'admin' : currentUser.username}</span>
          <img 
            src={currentUser.username === 'admin' ? '/images/user/admin.png' : '/images/user/user.png'} 
            alt="Avatar" 
            style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '90px' }} 
          />
        </div>
      )}
    </header>
  );
};

export default Header;
