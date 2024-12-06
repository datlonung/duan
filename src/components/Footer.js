import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/images/user/logo.png" alt="Logo Cửa Hàng Đồ Hiệu" />
        </div>
        <div className="footer-info">
          <p>Hotline tư vấn & mua hàng: 0582557300</p>
          <p>Góp ý & Khiếu nại: 0707888146 - 0582557300</p>
          <p>Email: bao3231@gmail.com</p>
          <p>Địa chỉ: 46 Tôn Đản tp.Đà Nẵng</p>
        </div>
        <div className="footer-social-media">
          <a href="https://www.facebook.com/groups/2088181741569884/">
            <img src="/images/user/fb.png" alt="" />
          </a>
          <a href="https://www.youtube.com/watch?v=1dVuuDTq3IM">
            <img src="/images/user/youtube.png" alt="" />
          </a>
          <a href="https://www.instagram.com/thanhly_authentic_highend_/">
            <img src="/images/user/ins.jpg" alt="" />
          </a>
          <a href="https://www.linkedin.com">
            <img src="/images/user/b2f828513f21444829a619ce563d4d4e.jpg" alt="" />
          </a>
          <a href="https://www.tiktok.com/@tamluxury.channel/video/7412870031924661509">
            <img src="/images/user/tiktok.png" alt="" />
          </a>
        </div>
        <div className="footer-columns">
          <div>
            <h4>Tài nguyên</h4>
            <ul>
              <li><Link to="/news">Tin tức thời trang</Link></li>
              <li><Link to="/new-arrivals">Sản phẩm mới</Link></li>
              <li><Link to="/sales">Khuyến mãi</Link></li>
              <li><Link to="/shop">Mua sắm</Link></li>
            </ul>
          </div>
          <div>
            <h4>Hỗ trợ</h4>
            <ul>
              <li><Link to="/support">Trung tâm hỗ trợ</Link></li>
              <li><Link to="/returns">Chính sách đổi trả</Link></li>
              <li><Link to="/faq">Câu hỏi thường gặp</Link></li>
              <li><Link to="/contact">Liên hệ</Link></li>
            </ul>
          </div>
          <div>
            <h4>Về chúng tôi</h4>
            <ul>
              <li><Link to="/about">Giới thiệu cửa hàng</Link></li>
              <li><Link to="/careers">Tuyển dụng</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/terms">Điều khoản dịch vụ</Link></li>
            </ul>
          </div>
          <div>
            <h4>Cộng đồng</h4>
            <ul>
              <li><Link to="/facebook">Facebook</Link></li>
              <li><Link to="/instagram">Instagram</Link></li>
              <li><Link to="/twitter">Twitter</Link></li>
              <li><Link to="/youtube">YouTube</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2019, ETEFT AUTHENTIC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
