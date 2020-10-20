import React from 'react';
import renderWithTheme from 'tests/helpers/renderWithTheme';
import DonorInformation from './DonorInformation';

const address = '123 Test Street';
const city = 'Winnipeg';
const province = 'MB';
const email = '123@test.com';
const phoneNumber = '2045555555';

const commonProps = {
    address,
    city,
    province,
    email,
    phoneNumber,
};

describe('DonorInformation', () => {
    it('renders without province', () => {
        const fullAddress = `${address}, ${city}`;

        const { queryByText } = renderWithTheme(
            <DonorInformation {...commonProps} province={null} />
        );

        expect(queryByText(fullAddress)).toBeInTheDocument();
        expect(queryByText(email)).toBeInTheDocument();
        expect(queryByText(phoneNumber)).toBeInTheDocument();
    });

    it('renders with province', () => {
        const fullAddress = `${address}, ${city}, ${province}`;

        const { queryByText } = renderWithTheme(
            <DonorInformation {...commonProps} province={province} />
        );

        expect(queryByText(fullAddress)).toBeInTheDocument();
    });
});
