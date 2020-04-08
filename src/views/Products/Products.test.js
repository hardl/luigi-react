import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { mockProducts } from '../../common/constants.js';
import Products from './Products.js';

afterEach(cleanup);

describe('Basic Render', () => {
    test('should render the Products component title with number of items', () => {
        const { container } = render(<Products />);
        const selector = container.querySelector('.fd-panel__title');
        const numOfItems = mockProducts.length;
        const expected = `Items (${numOfItems})`;

        expect(selector.textContent).toEqual(expected);
    });

    test('should render the Products based on the number of mock up items', () => {
        const { container } = render(<Products />);
        const selector = container.querySelectorAll('.fd-col--3');
        const expected = mockProducts.length;

        expect(selector.length).toEqual(expected);
    });
});
