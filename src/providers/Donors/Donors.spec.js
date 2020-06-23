import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import DonorsProvider from './Donors';
import useDonors from 'hooks/context/useDonors';
import { loadDonors, saveDonor } from 'actions/Donors';

jest.mock('hooks/useLoadResources', () => () => ({
    response: {},
    fetchData: jest.fn(),
}));
jest.mock('actions/Donors', () => ({
    loadDonors: jest.fn(),
    saveDonor: jest.fn(),
}));

function Children () {
    const { onSaveDonor } = useDonors();
    const onClick = () => onSaveDonor({ test: true });

    return (
        <button onClick={onClick}>Button</button>
    );
}

describe ('DonorsProvider', () => {
    it ('should load donors', () => {
        loadDonors.mockImplementation(() => ({ type: 'test' }));
        expect(loadDonors).toHaveBeenCalledTimes(0);

        render(
            <DonorsProvider>
                <Children />
            </DonorsProvider>
        );

        wait(() => {
            expect(loadDonors).toHaveBeenCalledTimes(1);
        });
    });

    it ('should be able to save donors', () => {
        loadDonors.mockImplementation(() => ({ type: 'test' }));
        const { getByText } = render(
            <DonorsProvider>
                <Children />
            </DonorsProvider>
        );

        expect(saveDonor).toHaveBeenCalledTimes(0);
        fireEvent.click(getByText('Button'));
        
        wait(() => {
            expect(saveDonor).toHaveBeenCalledTimes(1);
            expect(saveDonor).toHaveBeenCalledWith({ test: true });
        });
    });
});
