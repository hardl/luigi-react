import React from 'react';
import '../../node_modules/fiori-fundamentals/dist/fiori-fundamentals.css';

export const List = ({ items }) => {
    return (
        <ul className="fd-list">
            {  
                (items.length > 0) && items.map(({id, name, price}) => 
                    (
                        <li tabIndex={id}  className="fd-list__item" key={id}>
                            <a href={id} className="fd-link fd-link--emphasized">{ name }</a>
                        </li>
                    )
                )
            }
        </ul>
    );
};