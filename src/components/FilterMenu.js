import React, { useState } from 'react';
import './FilterMenu.css';

const FilterMenu = ({ onFilter }) => {
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleFilter = () => {
    onFilter({ category, priceRange });
  };

  return (
    <div className="filter-menu">
      <h3>Bộ lọc tìm kiếm sản phẩm</h3>
      <div>
        <label htmlFor="category">Loại sản phẩm:</label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Chọn loại sản phẩm</option>
          <option value="gemstone">Đá quý</option>
          <option value="emerald">Lục bảo</option>
          <option value="ruby">Ruby</option>
          <option value="jade">Cẩm thạch</option>
          <option value="sapphire">Saphire</option>
          <option value="diamond">Kim cương</option>
        </select>
      </div>
      <div>
        <label htmlFor="priceRange">Giá sản phẩm:</label>
        <select id="priceRange" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
          <option value="">Chọn mức giá</option>
          <option value="15000000">trên 15,000,000</option>
          <option value="14000000">Từ 14,000,000 đến 15,000,000</option>
          <option value="13999999">Dưới 14,000,000</option>
        </select>
      </div>
      <button onClick={handleFilter}>
        Lọc
        <div className="button-sparkle sparkle"></div>
        <div className="button-sparkle sparkle"></div>
        <div className="button-sparkle sparkle"></div>
        <div className="button-sparkle sparkle"></div>
      </button>
    </div>
  );
};

export default FilterMenu;
