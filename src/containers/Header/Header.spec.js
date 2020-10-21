import React from 'react';
import renderWithTheme from 'tests/helpers/renderWithTheme';
import HeaderContainer from './Header';

describe('HeaderContainer', () => {
    it('renders without crashing', () => {
        const { asFragment } = renderWithTheme(<HeaderContainer />);

        expect(asFragment()).toMatchSnapshot();
    });
});
