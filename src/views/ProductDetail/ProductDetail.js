import React, { useState, useEffect } from 'react';
import { Details } from '../../Components/Details/Details.jsx';
import { Message } from '../../Components/Message/Message.jsx';
import { mockProducts, NO_MATCH_PRODUCT_MSG } from '../../common/constants.js';
import '../../../node_modules/fiori-fundamentals/dist/fiori-fundamentals.css';
import { linkManager } from '../../../node_modules/@kyma-project/luigi-client';

const ProductDetail = ({ match }) => {
  const itemId = parseInt(match.params.id);
  const [item, setItem] = useState(null);

  useEffect(()=> {
      setItem(mockProducts.find(product => product.id === itemId));
  }, [itemId]);

  return (
    <div className="fd-page__content">
      <section className="fd-section">
        <a href="#/products" className="fd-link" onClick={() => linkManager().withoutSync().navigate('/home/products/')}>
            <span className="sap-icon--slim-arrow-left sap-icon--s"></span>
            Back To Products
        </a>
        <div className="fd-section__header">
          <h1 className="fd-section__title">Product Detail</h1>
        </div>
        {item
          ? <Details item={item} />
          : <Message term={NO_MATCH_PRODUCT_MSG} />
        }
      </section>
    </div>
  );
};

export default ProductDetail;