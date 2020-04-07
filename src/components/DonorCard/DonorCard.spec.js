import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithTheme from 'tests/helpers/renderWithTheme';
import DonorCard from './DonorCard';
import DonorCardSkeleton from './DonorCardSkeleton';

const props = {
    name: 'Costco',
    lastDonationDate: '2019 December 20',
};

describe ('DonorCard', () => {
    it ('renders without crashing', () => {
        const { asFragment } = renderWithTheme(<DonorCard />);

        expect(asFragment()).toMatchSnapshot();
    });

    it ('skeleton renders without crashing', () => {
        const { asFragment } = renderWithTheme(<DonorCardSkeleton />);

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

    it ('is clickable', () => {
        const mockClick = jest.fn();
        const { getByTestId } = renderWithTheme(<DonorCard onClick={mockClick} />);

        const Card = getByTestId('donor-card');
        expect(mockClick).toHaveBeenCalledTimes(0);
        fireEvent.click(Card);
        expect(mockClick).toHaveBeenCalledTimes(1);
    });
});
