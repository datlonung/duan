import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { TbBackground } from 'react-icons/tb';

const Register = ({ addUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [securityQuestion, setSecurityQuestion] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Mật khẩu xác nhận không khớp');
      return;
    }
    if (phone.length !== 9) {
      setPhoneError('Số điện thoại phải là 9 chữ số');
      return;
    }
    setPhoneError('');
    addUser({ id: new Date().getTime(), fullName, dateOfBirth, gender, address, username, password, phone, email, securityQuestion, securityAnswer, captcha });
    navigate('/login'); 
  };

  return (
    <div className="register-container">
      <h1>Đăng ký</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Họ tên đầy đủ:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Ngày sinh:</label>
          <input
            type="text"
            id="dateOfBirth"
            value={dateOfBirth}
            placeholder="dd/mm/yyyy"
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="gender">Giới tính:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Chọn giới tính</option>
            <option value="male">Nam</option>
            <option value="female">Nữ</option>
            <option value="other">Không xác định</option>
          </select>
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
        <div>
          <label htmlFor="confirmPassword">Xác nhận mật khẩu:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          <label htmlFor="securityQuestion">Câu hỏi bảo mật:</label>
          <input
            type="text"
            id="securityQuestion"
            value={securityQuestion}
            onChange={(e) => setSecurityQuestion(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="securityAnswer">Câu trả lời bảo mật:</label>
          <input
            type="text"
            id="securityAnswer"
            value={securityAnswer}
            onChange={(e) => setSecurityAnswer(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="captcha">Mã xác nhận:</label>
          <input
            type="text"
            id="captcha"
            value={captcha}
            onChange={(e) => setCaptcha(e.target.value)}
            required
          />
        </div>
        <button type="submit">
          Đăng ký
          <div className="button-sparkle sparkle"></div>
          <div className="button-sparkle sparkle"></div>
          <div className="button-sparkle sparkle"></div>
        </button>
      </form>
    </div>
  );
};

export default Register;
