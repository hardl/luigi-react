import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { mockProducts } from '../../common/constants.js';
import { List } from './List';

afterEach(cleanup);

describe('Basic Render', () => {
    test('should render the List component with number of items', () => {
        const { container, queryAllByTestId } = render(<List items={mockProducts} />);
        const selector = queryAllByTestId('productDetail');
        const expected = mockProducts.length;

        expect(selector.length).toEqual(expected);
    });

    test('should not render any element if the `items` is empty', () => {
        const { container, queryAllByTestId } = render(<List items={[]} />);
        const selector = queryAllByTestId('productDetail');
        const expected = 0;

        expect(selector.length).toEqual(expected);
    });
});
