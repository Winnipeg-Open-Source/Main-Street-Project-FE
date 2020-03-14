import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithThemeAndRouter from 'tests/helpers/renderWithThemeAndRouter';
import DonorsPage from './Donors';
import useDonors from 'hooks/useDonors';
import { DONORS_PATH, DONOR_NEW_PATH } from 'constants/paths';

jest.mock('hooks/useDonors');

const singleDonorProps = {
    donors: [
        {
            id: 1,
            name: 'Costco',
            lastDonationDate: '2019 December 20',
        },
    ],
};

const multipleDonorsProps = {
    donors: [
        {
            id: 1,
            name: 'Costco',
            lastDonationDate: '2019 December 20',
        },
        {
            id: 2,
            name: 'Sobeys',
            lastDonationDate: '2019 December 21',
        },
    ],
};

describe ('Donors Page', () => {
    beforeEach(() => {
        useDonors.mockImplementation(() => []);
    });

    it ('renders without crashing', () => {
        const { asFragment } = renderWithThemeAndRouter(<DonorsPage />);

        expect(asFragment()).toMatchSnapshot();
    });

    it ('has no donors', () => {
        const { queryByText } = renderWithThemeAndRouter(<DonorsPage />);

        const noDonorsText = queryByText('No donors yet...');
        const title = queryByText(/Costco/i);

        expect(noDonorsText).toBeInTheDocument();
        expect(title).not.toBeInTheDocument();
    });

    it ('has single donor', () => {
        useDonors.mockImplementation(() => singleDonorProps);
        
        const { queryByText } = renderWithThemeAndRouter(<DonorsPage />);

        const noDonorsText = queryByText('No donors yet...');
        const title = queryByText(/Costco/i);
        const secondTitle = queryByText(/Sobeys/i);

        expect(noDonorsText).not.toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(secondTitle).not.toBeInTheDocument();
    });

    it ('has multiple donors', () => {
        useDonors.mockImplementation(() => multipleDonorsProps);

        const { queryByText } = renderWithThemeAndRouter(<DonorsPage />);

        const noDonorsText = queryByText('No donors yet...');
        const title = queryByText(/Costco/i);
        const secondTitle = queryByText(/Sobeys/i);

        expect(noDonorsText).not.toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(secondTitle).toBeInTheDocument();
    });

    it ('can navigate to new donor page', () => {
        const { getByText, history } = renderWithThemeAndRouter(<DonorsPage />, { route: DONORS_PATH });
        const newDonorButton = getByText('New Donor');

        expect(history.location.pathname).toBe(DONORS_PATH);
        fireEvent.click(newDonorButton);
        expect(history.location.pathname).toBe(DONOR_NEW_PATH);
    });
});
