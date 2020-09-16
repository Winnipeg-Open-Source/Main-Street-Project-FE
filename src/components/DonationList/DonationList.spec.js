import React from 'react';
import renderWithTheme from 'tests/helpers/renderWithTheme';
import DonationList from './DonationList';

jest.mock('components/DonationCard', () => () => 'Donation Card');

describe ('DonationList', () => {
    it ('renders without crashing', () => {
        const { asFragment } = renderWithTheme(<DonationList />);

        expect(asFragment()).toMatchSnapshot();
    });

    it ('renders with donation cards', () => {
        const { getByText } = renderWithTheme(<DonationList donations={[{}]} />);

        expect(getByText('Donation Card')).toBeInTheDocument();
    });

    it ('renders without donation cards', () => {
        const { getByText } = renderWithTheme(<DonationList />);

        expect(getByText('No donations yet...')).toBeInTheDocument();
    });
});
