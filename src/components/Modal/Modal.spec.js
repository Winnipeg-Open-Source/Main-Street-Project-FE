import React from 'react';
import renderWithTheme from 'tests/helpers/renderWithTheme';
import Modal from './Modal';

describe ('Modal', () => {
    it ('renders without crashing', () => {
        const { asFragment } = renderWithTheme(<Modal />);

        expect(asFragment()).toMatchSnapshot();
    });
});
