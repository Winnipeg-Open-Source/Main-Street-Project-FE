import React from 'react';
import renderWithTheme from 'tests/helpers/renderWithTheme';
import DonorsList from './DonorsList';
import DonorsListSkeleton from './DonorsListSkeleton';

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

describe('DonorsList', () => {
    it('renders without crashing', () => {
        const { asFragment } = renderWithTheme(<DonorsList />);

        expect(asFragment()).toMatchSnapshot();
    });

    it('skeleton renders without crashing', () => {
        const { asFragment } = renderWithTheme(<DonorsListSkeleton />);

        expect(asFragment()).toMatchSnapshot();
    });

    it('has no donors', () => {
        const { queryByText } = renderWithTheme(<DonorsList />);

        const noDonorsText = queryByText('No donors yet...');
        const title = queryByText(/Costco/i);

        expect(noDonorsText).toBeInTheDocument();
        expect(title).not.toBeInTheDocument();
    });

    it('has single donor', () => {
        const { queryByText } = renderWithTheme(
            <DonorsList {...singleDonorProps} />
        );

        const noDonorsText = queryByText('No donors yet...');
        const title = queryByText(/Costco/i);
        const secondTitle = queryByText(/Sobeys/i);

        expect(noDonorsText).not.toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(secondTitle).not.toBeInTheDocument();
    });

    it('has multiple donors', () => {
        const { queryByText } = renderWithTheme(
            <DonorsList {...multipleDonorsProps} />
        );

        const noDonorsText = queryByText('No donors yet...');
        const title = queryByText(/Costco/i);
        const secondTitle = queryByText(/Sobeys/i);

        expect(noDonorsText).not.toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(secondTitle).toBeInTheDocument();
    });
});
