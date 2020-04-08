import React, { Component } from 'react';
import { List } from '../../Components/List/List.jsx';
import { mockProducts } from '../../common/constants.js';
import '../../../node_modules/fiori-fundamentals/dist/fiori-fundamentals.css';

class Products extends Component {
    render() {
        return (
            <section className="fd-section">
                <div className="fd-panel">
                    <div className="fd-panel__header">
                        <h3 className="fd-panel__title">
                            Items ({mockProducts.length})
                        </h3>
                    </div>
                    <div className="fd-panel__body fd-panel__body--bleed">
                        <div className="fd-container fd-container--fluid">
                            <List items={mockProducts} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Products;