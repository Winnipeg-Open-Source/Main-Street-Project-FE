import React from 'react';
import { render } from '@testing-library/react';
import NewItemDonationForm from './NewItemDonationForm';

describe ('NewItemDonationForm', () => {
    it ('renders without crashing', () => {
        const { asFragment } = render(<NewItemDonationForm />);

        expect(asFragment()).toMatchSnapshot();
    });

    it ('can fill out food donation form', () => {

    });

    it ('can fill out clothing donation form', () => {

    });

    it ('can fill out household item donation form', () => {

    });

    it ('can fill out miscellaneous donation form', () => {

    });
});
