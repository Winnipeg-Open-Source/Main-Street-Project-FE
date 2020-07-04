import React from 'react';
import renderWithThemeAndRouter from 'tests/helpers/renderWithThemeAndRouter';
import DonationCreate from './DonationCreate';
import useDonors from 'hooks/context/useDonors';

jest.mock('hooks/context/useDonors');

describe ('DonationCreate', () => {
    it ('renders without crashing', () => {
        const mockLoadDonors = jest.fn();

        useDonors.mockImplementation(() => ({ isLoading: true, onLoadDonors: mockLoadDonors }));

        const { asFragment } = renderWithThemeAndRouter(<DonationCreate />);

        expect(mockLoadDonors).toHaveBeenCalledTimes(1);
        expect(asFragment()).toMatchSnapshot();
    });

    it ('does not load already loaded resources', () => {
        const mockLoadDonors = jest.fn();

        useDonors.mockImplementation(() => ({ isLoading: false, onLoadDonors: mockLoadDonors }));

        renderWithThemeAndRouter(<DonationCreate />);

        expect(mockLoadDonors).toHaveBeenCalledTimes(0);
    });
});
