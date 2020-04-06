import React from 'react';
import { List } from '../Components/List.jsx';
import { products } from '../common/constants.js';
import '../../node_modules/fiori-fundamentals/dist/fiori-fundamentals.css';

const Product = () => (
    <div>
      <section className="fd-section">
        <div className="fd-section__header">
          <h1 className="fd-section__title">Available Products</h1>
        </div>
        <List items={products} />
      </section>
    </div>
);

export default Product;