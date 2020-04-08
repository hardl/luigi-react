import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { Message } from './Message';

afterEach(cleanup);

describe('Basic Render', () => {
    test('should render the Message component', () => {
        const { container } = render(<Message term="foo" />);
        const selector = container.querySelector('div');

        expect(selector).not.toBeNull();
    });

    test('should render the Message component when `term` is provided', () => {
        const { container } = render(<Message term="foo" />);
        const selector = container.querySelector('div');
        const expected = 'foo';

        expect(selector.textContent).toEqual(expected);
    });
});
