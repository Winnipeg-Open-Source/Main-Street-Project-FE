import React from 'react';
import { fireEvent } from '@testing-library/react';
import { Input } from 'pcln-design-system';
import renderWithTheme from 'tests/helpers/renderWithTheme';
import Form from './Form';

const FormChildren = () => (
    <>
        <Input placeholder='First Input' />
        <Input placeholder='Second Input' />
        <Input placeholder='Third Input' />
    </>
);

describe ('Form', () => {
    it ('renders without crashing', () => {
        const { asFragment } = renderWithTheme(
            <Form>
                <FormChildren />
            </Form>
        );

        expect(asFragment()).toMatchSnapshot();
    });

    it ('renders without a title', () => {
        const { queryByText } = renderWithTheme(
            <Form>
                <FormChildren />
            </Form>
        );

        expect(queryByText('Title')).toBeNull();
    });

    it ('renders with a title', () => {
        const { queryByText } = renderWithTheme(
            <Form title='Title'>
                <FormChildren />
            </Form>
        );

        expect(queryByText('Title')).toBeDefined();
    });

    it ('renders with buttons', () => {
        const mockSaveClick = jest.fn();
        const mockCancelClick = jest.fn();

        const { getByText } = renderWithTheme(
            <Form title='Title' onCancelClick={mockCancelClick} onSaveClick={mockSaveClick}>
                <FormChildren />
            </Form>
        );

        const saveButton = getByText(/Save/);
        const cancelButton = getByText(/Cancel/);

        expect(mockSaveClick).toHaveBeenCalledTimes(0);
        fireEvent.click(saveButton);
        expect(mockSaveClick).toHaveBeenCalledTimes(1);

        expect(mockCancelClick).toHaveBeenCalledTimes(0);
        fireEvent.click(cancelButton);
        expect(mockCancelClick).toHaveBeenCalledTimes(1);
    });
});
