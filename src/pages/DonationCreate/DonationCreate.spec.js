import React from 'react';
import renderWithThemeAndRouter from 'tests/helpers/renderWithThemeAndRouter';
import DonationCreate from './DonationCreate';
import useDonors from 'hooks/context/useDonors';
import useItems from 'hooks/context/useItems';

jest.mock('hooks/context/useDonors');
jest.mock('hooks/context/useItems');

describe ('DonationCreate', () => {
    it ('renders without crashing', () => {
        const mockLoadDonors = jest.fn();
        const mockLoadItems = jest.fn();

        useDonors.mockImplementation(() => ({ isLoading: true, onLoadDonors: mockLoadDonors }));
        useItems.mockImplementation(() => ({ isLoading: true, onLoadItems: mockLoadItems }));

        const { asFragment } = renderWithThemeAndRouter(<DonationCreate />);

        expect(mockLoadDonors).toHaveBeenCalledTimes(1);
        expect(mockLoadItems).toHaveBeenCalledTimes(1);
        expect(asFragment()).toMatchSnapshot();
    });

    it ('does not load already loaded resources', () => {
        const mockLoadDonors = jest.fn();
        const mockLoadItems = jest.fn();

        useDonors.mockImplementation(() => ({ isLoading: false, onLoadDonors: mockLoadDonors }));
        useItems.mockImplementation(() => ({ isLoading: false, onLoadItems: mockLoadItems }));

        renderWithThemeAndRouter(<DonationCreate />);

        expect(mockLoadDonors).toHaveBeenCalledTimes(0);
        expect(mockLoadItems).toHaveBeenCalledTimes(0);
    });
});
