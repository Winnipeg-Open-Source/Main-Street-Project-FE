import React from 'react';
import renderWithTheme from 'tests/helpers/renderWithTheme';
import ItemForm from './ItemForm';

jest.mock('components/FoodDonationForm', () => () => <div>FoodDonationForm</div>);
jest.mock('components/ClothesDonationForm', () => () => <div>ClothesDonationForm</div>);
jest.mock('components/HouseholdItemDonationForm', () => () => <div>HouseholdItemDonationForm</div>);
jest.mock('components/MiscellaneousDonationForm', () => () => <div>MiscellaneousDonationForm</div>);

describe ('ItemForm', () => {
    it ('renders without crashing', () => {
        const { asFragment } = renderWithTheme(<ItemForm />);
        expect(asFragment()).toMatchSnapshot();
    });

    it ('can select food donation form', () => {
        const { getByText } = renderWithTheme(<ItemForm itemType='Food' />);
        expect(getByText('FoodDonationForm')).toBeInTheDocument();
    });

    it ('can select clothing donation form', () => {
        const { getByText } = renderWithTheme(<ItemForm itemType='Clothing' />);
        expect(getByText('ClothesDonationForm')).toBeInTheDocument();
    });

    it ('can select household item donation form', () => {
        const { getByText } = renderWithTheme(<ItemForm itemType='Household Item' />);
        expect(getByText('HouseholdItemDonationForm')).toBeInTheDocument();
    });

    it ('can select miscellaneous donation form', () => {
        const { getByText } = renderWithTheme(<ItemForm itemType='Miscellaneous' />);
        expect(getByText('MiscellaneousDonationForm')).toBeInTheDocument();
    });
});
