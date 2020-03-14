import React from 'react';
import { render } from '@testing-library/react';
import HeaderContainer from './Header';

describe ('HeaderContainer', () => {
    it ('renders without crashing', () => {
        const { asFragment } = render(<HeaderContainer />);

        expect(asFragment()).toMatchSnapshot();
    });
});
