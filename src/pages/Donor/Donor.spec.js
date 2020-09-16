import React from 'react';
import renderWithThemeAndRouter from 'tests/helpers/renderWithThemeAndRouter';
import DonorPage from './Donor';
import useDonor from 'hooks/context/useDonor';
import { donor } from 'tests/mocks/donors';

jest.mock('hooks/context/useDonor');

describe ('DonorPage', () => {
    it ('renders without crashing', () => {
        useDonor.mockImplementation(() => ({
            isLoading: true,
            donor,
        }));

        const { asFragment } = renderWithThemeAndRouter(<DonorPage />);

        expect(asFragment()).toMatchSnapshot();
    });

    it ('renders loading state', () => {
        useDonor.mockImplementation(() => ({
            isLoading: true,
        }));
        
        const { asFragment } = renderWithThemeAndRouter(<DonorPage />);

        expect(asFragment()).toMatchSnapshot();
    });

    it ('has a donor', async () => {
        useDonor.mockImplementation(() => ({
            isLoading: false,
            donor,
        }));

        const { getByText } = renderWithThemeAndRouter(<DonorPage />);

        expect(getByText('Costco')).toBeInTheDocument();
        expect(getByText('22 Road Lane')).toBeInTheDocument();
        expect(getByText('Winnipeg, MB')).toBeInTheDocument();
        expect(getByText('email@email.com')).toBeInTheDocument();
        expect(getByText('email@email.com')).toBeInTheDocument();
        expect(getByText('204-555-5555')).toBeInTheDocument();
        expect(getByText('Donated: 2019 December 20')).toBeInTheDocument();
        expect(getByText('Donated: 2019 November 20')).toBeInTheDocument();
    });

    it ('does not find a donor', () => {
        useDonor.mockImplementation(() => ({
            isLoading: false,
            donor: null,
        }));

        const { getByText } = renderWithThemeAndRouter(<DonorPage />);

        expect(getByText('Donor Not Found')).toBeInTheDocument();
    });
});
