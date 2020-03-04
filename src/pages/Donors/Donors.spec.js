import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithThemeAndRouter from 'tests/helpers/renderWithThemeAndRouter';
import DonorsPage from './Donors';
import { DONORS_PATH, DONOR_NEW_PATH } from 'constants/paths';

describe ('Donors Page', () => {
    it ('renders without crashing', () => {
        const { asFragment } = renderWithThemeAndRouter(<DonorsPage />);

        expect(asFragment()).toMatchSnapshot();
    });

    it ('has no donors', () => {

    });

    it ('has single donor', () => {

    });

    it ('has multiple donors', () => {

    });

    it ('can navigate to new donor page', () => {
        const { getByText, history } = renderWithThemeAndRouter(<DonorsPage />, { route: DONORS_PATH });
        const newDonorButton = getByText('New Donor');

        expect(history.location.pathname).toBe(DONORS_PATH);
        fireEvent.click(newDonorButton);
        expect(history.location.pathname).toBe(DONOR_NEW_PATH);
    });
});
