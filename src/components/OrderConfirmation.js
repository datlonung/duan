//check out khi hanh toán thành công
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const [animationClass, setAnimationClass] = useState('animate__animated animate__fadeIn');

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationClass('animate__animated animate__fadeOut'); // Thêm lớp hiệu ứng thoát
    }, 2000); // Thêm hiệu ứng sau 2 giây

    const navigationTimer = setTimeout(() => {
      navigate('/home');
    }, 3000); // Chuyển hướng về trang chủ sau 3 giây

    return () => {
      clearTimeout(timer);
      clearTimeout(navigationTimer);
    };
  }, [navigate]);

  const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });

  return (
    <animated.div className={`order-confirmation-container ${animationClass}`} style={props}>
      <h1>Đặt hàng thành công!</h1>
      <p>Cảm ơn bạn đã đặt hàng. Bạn sẽ được chuyển hướng về trang chủ ngay bây giờ...</p>
    </animated.div>
  );
};

export default OrderConfirmation;
