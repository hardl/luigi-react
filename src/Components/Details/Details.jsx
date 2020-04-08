import React from 'react';
import { Tile } from 'fundamental-react/Tile';
import { Identifier } from 'fundamental-react/Identifier';

export const Details = ({ item }) => {
    const { name, price, stock, description, icon    } = item;

    return (
        <Tile
            onClick={function S(){}}
        >
            <Tile.Media>
                <Identifier
                    color={1}
                    glyph={icon}
                    size="m"
                />
            </Tile.Media>
            <Tile.Content title={name} headingLevel={2} productTile>
                 <div className="fd-has-type-1">Price: €{ price }</div>
                 <div className="fd-has-type-1">Stocks: { stock }</div>
                 <br/>
                 <p className="fd-has-type-1">{ description }</p>
            </Tile.Content>
        </Tile>
    )
}