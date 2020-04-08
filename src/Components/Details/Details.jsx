import React from 'react';
import '../../../node_modules/fiori-fundamentals/dist/fiori-fundamentals.css';

export const Details = ({ item }) => {
    const { name, price, stock, description } = item;

    return (
        <div className="fd-product-tile">
            <div className="fd-tile__media">
                <span className="fd-identifier fd-identifier--m sap-icon--product fd-has-background-color-accent-1"></span>
            </div>
            <div className="fd-tile__content">
                <h1 className="fd-has-type-2">{ name }</h1>
                <div className="fd-has-type-1">Price: €{ price }</div>
                <div className="fd-has-type-1">Stocks: { stock }</div>
                <br/>
                <p className="fd-has-type-1">{ description }</p>
            </div>
        </div>
    )
}