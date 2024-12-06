import React, { useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin';
import Checkout from './components/Checkout';
import ProductDetail from './components/ProductDetail';
import ManageProducts from './components/ManageProducts';
import ManageUsers from './components/ManageUsers';
import OrderConfirmation from './components/OrderConfirmation';
import Cart from './components/Cart';
import CartIcon from './components/CartIcon';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';
import products from './data/products';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [productList, setProductList] = useState(products);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const handleCheckout = (total) => {
    if (isLoggedIn) {
      console.log('Tổng tiền:', total);
      clearCart();
      navigate('/order-confirmation'); // Nếu đã đăng nhập, chuyển tới trang xác nhận đơn hàng
    } else {
      navigate('/checkout'); // Nếu chưa đăng nhập, chuyển tới trang thanh toán
    }
  };

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: product.quantity || 1 }]);
    }
  };

  const updateQuantity = (id, quantity) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const showProductDetail = (product) => {
    setCurrentProduct(product);
    navigate('/product-detail');
  };

  const handleSearch = (query) => {
    if (query === '') {
      setProductList(products);
    } else {
      setProductList(
        products.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  return (
    <div>
      <ErrorBoundary>
        <Header currentUser={currentUser} onSearch={handleSearch} handleLogout={handleLogout} />
        <CartIcon cart={cart} />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home productList={productList} setCurrentProduct={setCurrentProduct} currentUser={currentUser} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} users={users} setCurrentUser={setCurrentUser} />} />
          <Route path="/register" element={<Register addUser={addUser} />} />
          <Route path="/admin" element={<Admin productList={productList} setProductList={setProductList} users={users} setUsers={setUsers} />} />
          <Route path="/admin/products" element={<ManageProducts productList={productList} setProductList={setProductList} />} />
          <Route path="/admin/users" element={<ManageUsers users={users} setUsers={setUsers} />} />
          <Route path="/checkout" element={<Checkout cart={cart} userInfo={userInfo} setUserInfo={setUserInfo} clearCart={clearCart} />} />
          <Route path="/cart" element={<Cart cart={cart} productList={productList} updateQuantity={updateQuantity} removeFromCart={removeFromCart} handleCheckout={handleCheckout} addToCart={addToCart} isLoggedIn={isLoggedIn} />} />
          <Route path="/product-detail" element={currentProduct ? <ProductDetail product={currentProduct} addToCart={addToCart} /> : <Navigate to="/home" />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
};

export default App;
