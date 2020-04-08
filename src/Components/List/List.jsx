import React from 'react';
import { Message } from '../../Components/Message/Message.jsx';
import { NO_AVAILABLE_PRODUCT_MSG } from '../../common/constants.js';
import '../../../node_modules/fiori-fundamentals/dist/fiori-fundamentals.css';

export const List = ({ items }) => (
        (items.length === 0) ? <Message term={NO_AVAILABLE_PRODUCT_MSG} /> 
        : items.map(({id, name, price, icon}) => {
                const link = `#/productDetail/${id}`;

                return (
                    <div className="fd-col--3" key={id} data-testid="productDetail">
                        <div className="fd-tile">
                            <div className="fd-tile__media">
                                <span className={`fd-identifier fd-identifier--m sap-icon--${icon} fd-has-background-color-accent-1`}></span>
                            </div>
                            <div className="fd-tile__content">
                                <h3 className="fd-tile__title">
                                    <a href={link} className="fd-link">{name}</a>
                                </h3>
                                <p>
                                    <span className="fd-badge fd-badge--success fd-badge--filled fd-sap-icon--accept">
                                        €{price}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })
);
