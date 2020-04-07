import React from 'react';
import { List } from '../Components/List.jsx';
import { mockProducts } from '../common/constants.js';
import '../../node_modules/fiori-fundamentals/dist/fiori-fundamentals.css';

const Products = () => (
    <div className="fd-page__content">
      <section className="fd-section">
        <div className="fd-section__header">
          <h1 className="fd-section__title">Products</h1>
        </div>
        <List items={mockProducts} />
      </section>
    </div>
);

export default Products;