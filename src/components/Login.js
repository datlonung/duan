//đăng nhập
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setIsLoggedIn, users, setCurrentUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user);
      navigate('/home'); // Điều hướng đến trang chủ
    } else if (username === 'admin' && password === 'admin123') {
      setIsLoggedIn(true);
      setCurrentUser({ username: 'admin' });
      navigate('/admin'); // Điều hướng đến trang admin
    } else {
      alert('Tên đăng nhập hoặc mật khẩu không đúng');
    }
  };

  return (
    <div className="login-container">
      <h1>Đăng nhập</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Tên đăng nhập:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Mật khẩu:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">
          Đăng nhập
          <div className="button-sparkle sparkle"></div>
          <div className="button-sparkle sparkle"></div>
          <div className="button-sparkle sparkle"></div>
          <div className="button-sparkle sparkle"></div>
        </button>
      </form>
    </div>
  );
};

export default Login;
