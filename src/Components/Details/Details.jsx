import React from 'react';
import { Tile } from 'fundamental-react/Tile';
import { Image } from 'fundamental-react/Image';
import { Identifier } from 'fundamental-react/Identifier';

export const Details = ({ item }) => {
    const { name, price, stock, description } = item;

    return (
        <Tile>
            <Tile.Media>
                <Identifier
                    color={1}
                    glyph="product"
                    size="m"
                />
            </Tile.Media>
            <Tile.Content>
                <h1 className="fd-has-type-2">{ name }</h1>
                  <div className="fd-has-type-1">Price: €{ price }</div>
                 <div className="fd-has-type-1">Stocks: { stock }</div>
                 <br/>
                 <p className="fd-has-type-1">{ description }</p> 
            </Tile.Content>
        </Tile>
    )
}