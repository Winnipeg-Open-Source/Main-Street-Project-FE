import React from 'react';
import renderWithTheme from 'tests/helpers/renderWithTheme';
import ModalFooter from './ModalFooter';

describe ('ModalFooter', () => {
    it ('renders without crashing', () => {
        const { asFragment } = renderWithTheme(<ModalFooter />);

        expect(asFragment()).toMatchSnapshot();
    });
});
