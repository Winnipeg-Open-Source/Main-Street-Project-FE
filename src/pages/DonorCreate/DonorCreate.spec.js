import React from 'react';
import renderWithThemeAndRouter from 'tests/helpers/renderWithThemeAndRouter';
import DonorCreate from './DonorCreate';

jest.mock('hooks/useSaveResource', () => () => ({ handleSave: jest.fn() }));

describe('DonorCreate', () => {
    it('renders without crashing', () => {
        const { asFragment } = renderWithThemeAndRouter(<DonorCreate />);

        expect(asFragment()).toMatchSnapshot();
    });
});
