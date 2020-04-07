import React from 'react';
import { Message } from '../Components/Message.jsx';
import '../../node_modules/fiori-fundamentals/dist/fiori-fundamentals.css';

export const List = ({ items }) => {
    return (
        <ul className="fd-list">
            {
                items.length > 0
                    ? items.map(({id, name}) => {
                        const link = `#/productDetail/${id}`;

                        return (
                            <li tabIndex={id}  className="fd-list__item" key={id}>
                                <a href={link} className="fd-link fd-link--emphasized">{ name }</a>
                            </li>
                        )
                    })
                : <Message term="There is no available product at this moment." />
            }
        </ul>
    );
};