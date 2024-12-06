import React from 'react';
import './ManageUsers.css';

const ManageUsers = ({ users, setUsers }) => {
  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="manage-users-container">
      <h2>Quản Lý Người Dùng</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Họ tên:</strong> {user.fullName}</p>
              <p><strong>Ngày sinh:</strong> {user.dateOfBirth}</p>
              <p><strong>Giới tính:</strong> {user.gender}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Số điện thoại:</strong> {user.phone}</p>
            </div>
            <button onClick={() => handleDeleteUser(user.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageUsers;
