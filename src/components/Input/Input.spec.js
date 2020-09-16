import React from 'react';
import renderWithTheme from 'tests/helpers/renderWithTheme';
import Input from './Input';

describe ('Input', () => {
    it ('renders without crashing', () => {
        const { asFragment } = renderWithTheme(<Input />);
        expect(asFragment()).toMatchSnapshot();
    });
});
