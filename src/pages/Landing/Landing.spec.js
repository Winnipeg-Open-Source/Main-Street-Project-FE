import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithThemeAndRouter from 'tests/helpers/renderWithThemeAndRouter';
import LandingPage from './Landing';
import { LANDING_PATH, DONATIONS_NEW_PATH, REQUISITION_NEW_PATH } from 'constants/paths';

describe('LandingPage', () => {
    it ('renders as expected', () => {
        const { asFragment } = renderWithThemeAndRouter(<LandingPage />);

        expect(asFragment()).toMatchSnapshot();
    });

    it ('new donation button works as expected', () => {
        const { getByText, history } = renderWithThemeAndRouter(<LandingPage />, { route: LANDING_PATH });
        const newDonationButton = getByText('New Donation');

        expect(history.location.pathname).toBe(LANDING_PATH);
        fireEvent.click(newDonationButton);
        expect(history.location.pathname).toBe(DONATIONS_NEW_PATH);
    });

    it ('new requisition button works as expected', () => {
        const { getByText, history } = renderWithThemeAndRouter(<LandingPage />, { route: LANDING_PATH });
        const newRequisitionButton = getByText('New Requisition');

        expect(history.location.pathname).toBe(LANDING_PATH);
        fireEvent.click(newRequisitionButton);
        expect(history.location.pathname).toBe(REQUISITION_NEW_PATH);
    });
});
