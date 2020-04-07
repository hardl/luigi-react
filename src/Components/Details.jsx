import React from 'react';
import '../../node_modules/fiori-fundamentals/dist/fiori-fundamentals.css';

export const Details = ({ item }) => {
    const { name, price, stock, description } = item;

    return (
        <div className="fd-tile">
            <div className="fd-tile__media">
                <span className="fd-identifier fd-identifier--m sap-icon--product fd-has-background-color-accent-3"></span>
            </div>
            <div className="fd-tile__content">
                <h1 className="fd-tile__title">{ name }</h1>
                <div>Price: €{ price }</div>
                <div>Stock: { stock }</div>
                <br/>
                <p>{ description }</p>
            </div>
        </div>
    )
}