import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithTheme from 'tests/helpers/renderWithTheme';
import DonorCreationForm from './DonorCreationForm';

jest.mock('hooks/useForm', () => () => ({
    state: {
        name: 'Costco',
        city: 'Winnipeg',
    },
    onChange: jest.fn(),
    onToggle: jest.fn(),
}));

describe('DonorCreationForm', () => {
    it('renders without crashing', () => {
        const { asFragment } = renderWithTheme(<DonorCreationForm />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should save the current state', () => {
        const mockSave = jest.fn();
        const { getByText } = renderWithTheme(
            <DonorCreationForm onSaveClick={mockSave} />
        );

        const SaveButton = getByText('Save');
        expect(mockSave).toHaveBeenCalledTimes(0);
        fireEvent.click(SaveButton);
        expect(mockSave).toHaveBeenCalledTimes(1);
        expect(mockSave).toHaveBeenCalledWith({
            name: 'Costco',
            city: 'Winnipeg',
        });
    });
});
