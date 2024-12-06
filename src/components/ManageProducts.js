import React, { useState } from 'react';
import './ManageProducts.css';

const ManageProducts = ({ productList, setProductList }) => {
  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    category: '',
    price: '',
    image: '',
    description: '',
  });
  const [editProduct, setEditProduct] = useState(null);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProductWithId = { ...newProduct, id: new Date().getTime().toString() };
    setProductList([...productList, newProductWithId]);
    setNewProduct({
      id: '',
      name: '',
      category: '',
      price: '',
      image: '',
      description: '',
    });
  };

  const handleEditProduct = (e) => {
    e.preventDefault();
    setProductList(
      productList.map((product) =>
        product.id === editProduct.id ? editProduct : product
      )
    );
    setEditProduct(null);
  };

  const handleDeleteProduct = (id) => {
    setProductList(productList.filter((product) => product.id !== id));
  };

  return (
    <div className="manage-products-container">
      <h2>Quản Lý Sản Phẩm</h2>
      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Tên sản phẩm"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Loại sản phẩm"
          value={newProduct.category}
          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Giá sản phẩm"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="URL hình ảnh"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          required
        />
        <textarea
          placeholder="Mô tả sản phẩm"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          required
        />
        <button type="submit">Thêm sản phẩm</button>
      </form>

      {editProduct && (
        <form onSubmit={handleEditProduct}>
          <input
            type="text"
            placeholder="Tên sản phẩm"
            value={editProduct.name}
            onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Loại sản phẩm"
            value={editProduct.category}
            onChange={(e) => setEditProduct({ ...editProduct, category: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Giá sản phẩm"
            value={editProduct.price}
            onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="URL hình ảnh"
            value={editProduct.image}
            onChange={(e) => setEditProduct({ ...editProduct, image: e.target.value })}
            required
          />
          <textarea
            placeholder="Mô tả sản phẩm"
            value={editProduct.description}
            onChange={(e) => setEditProduct({ ...editProduct, description: e.target.value })}
            required
          />
          <button type="submit">Cập nhật sản phẩm</button>
          <button type="button" onClick={() => setEditProduct(null)}>Hủy</button>
        </form>
      )}

      <h2>Danh sách sản phẩm</h2>
      <ul className="product-list">
        {productList.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} className="product-image" />
            <p>{product.price} USD</p>
            <button onClick={() => setEditProduct(product)}>Chỉnh sửa</button>
            <button onClick={() => handleDeleteProduct(product.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageProducts;
