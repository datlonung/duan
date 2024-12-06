//Siêu trang Admin
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Admin.css';

const Admin = ({ productList, setProductList, users, setUsers }) => {
  return (
    <div className="admin-container">
      <h2>Trang Quản Admin</h2>
      <nav>
        <ul>
          <li><Link to="/admin/products">Quản Lý Sản Phẩm</Link></li>
          <li><Link to="/admin/users">Quản Lý Người Dùng</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Admin;
