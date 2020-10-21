import React from 'react';
import renderWithThemeAndRouter from 'tests/helpers/renderWithThemeAndRouter';
import DonationCard from './DonationCard';

describe('DonationCard', () => {
    it('renders without crashing', () => {
        const { asFragment } = renderWithThemeAndRouter(<DonationCard />);

        expect(asFragment()).toMatchSnapshot();
    });

    it('renders with a donation date', () => {
        const { getByText } = renderWithThemeAndRouter(
            <DonationCard donationDate='2020 February 20' />
        );

        expect(getByText('Donated: 2020 February 20')).toBeInTheDocument();
    });
});
