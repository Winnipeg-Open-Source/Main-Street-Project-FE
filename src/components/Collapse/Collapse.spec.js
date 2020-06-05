import React from 'react';
import renderWithTheme from 'tests/helpers/renderWithTheme';
import Collapse from './Collapse';

describe ('Collapse', () => {
    it ('renders without crashing', () => {
        const { asFragment } = renderWithTheme(<Collapse />);
        expect(asFragment()).toMatchSnapshot();
    });
});
