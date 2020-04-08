import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Home from './Home';

afterEach(cleanup);

describe('Basic Render', () => {
    test('should render the Home component with P element', () => {
        const { container } = render(<Home />);
        const selector = container.querySelector('p');

        expect(selector).not.toBeNull();
    });
});
