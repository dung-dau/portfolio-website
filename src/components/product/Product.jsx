import React from 'react';
import './product.css';

const Product = ({img, link, title}) => {
  return (
    <div className='p'>
        <h2 className="p-title">{title}</h2>
        <div className="p-container">
          <div className="p-browser">
              <div className="p-circle"></div>
              <div className="p-circle"></div>
              <div className="p-circle"></div>
          </div>
          <a href={link} target="_blank" rel="noreferrer">
            <img src={img} alt="" className="p-img" />
          </a>
        </div>
    </div>
  )
}

export default Product;