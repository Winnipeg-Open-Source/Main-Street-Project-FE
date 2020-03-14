import React from 'react';
import { render } from '@testing-library/react';
import Providers from './Providers';

describe ('Providers', () => {
    it ('renders without crashing', () => {
        const { asFragment } = render(<Providers />);

        expect(asFragment()).toMatchSnapshot();
    });
});
