import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { mockProducts } from '../../common/constants.js';
import ProductDetail from './ProductDetail.js';

afterEach(cleanup);

const match= {
    params: { 
        id: '3'
    }
};

describe('Basic Render', () => {
    test('should render the ProducteDetail component with title', () => {
        const { container } = render(<ProductDetail match={match} />);
        const selector = container.querySelector('.fd-section__title');
        const expected = 'Product Detail';

        expect(selector.textContent).toEqual(expected);
    });

    test('should render the ProducteDetail component with link', () => {
        const { container } = render(<ProductDetail match={match} />);
        const selector = container.querySelector('.fd-link');
        const expected = 'Back To Products';

        expect(selector.textContent).toEqual(expected);
    });
});
