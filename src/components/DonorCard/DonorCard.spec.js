import React from 'react';
import renderWithTheme from 'tests/helpers/renderWithTheme';
import DonorCard from './DonorCard';

const props = {
    name: 'Costco',
    lastDonationDate: '2019 December 20',
};

describe ('DonorCard', () => {
    it ('renders without crashing', () => {
        const { asFragment } = renderWithTheme(<DonorCard />);

        expect(asFragment()).toMatchSnapshot();
    });

    it ('has not donated', async () => {
        const { getByText } = renderWithTheme(<DonorCard name='Costco' />);

        const name = await getByText('Costco');
        const lastDonation = await getByText('Last Donation: -');

        expect(name.textContent).toBe('Costco');
        expect(lastDonation.textContent).toBe('Last Donation: -');
    });

    it ('has donated', async () => {
        const { getByText } = renderWithTheme(<DonorCard {...props} />);

        const name = await getByText('Costco');
        const lastDonation = await getByText('Last Donation: 2019 December 20');

        expect(name.textContent).toBe('Costco');
        expect(lastDonation.textContent).toBe('Last Donation: 2019 December 20');
    });
});
