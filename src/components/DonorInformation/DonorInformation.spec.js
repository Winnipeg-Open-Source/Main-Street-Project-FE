import React from 'react';
import renderWithTheme from 'tests/helpers/renderWithTheme';
import DonorInformation from './DonorInformation';

const address = '123 Test Street';
const city = 'Winnipeg';
const email = '123@test.com';
const phoneNumber = '2045555555';
const province = 'MB';

const commonProps = {
    address,
    city,
    email,
    phoneNumber,
};

describe ('DonorInformation', () => {
    it ('renders without province', () => {
        const { queryByText } = renderWithTheme(<DonorInformation {...commonProps} />);

        expect(queryByText(address)).toBeInTheDocument();
        expect(queryByText(city)).toBeInTheDocument();
        expect(queryByText(email)).toBeInTheDocument();
        expect(queryByText(phoneNumber)).toBeInTheDocument();
    });

    it ('renders with province', () => {
        const { queryByText } = renderWithTheme(<DonorInformation {...commonProps} province={province} />);

        expect(queryByText(`${city}, ${province}`)).toBeInTheDocument();
    });
});
