import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithTheme from 'tests/helpers/renderWithTheme';
import ModalHeader from './ModalHeader';

describe('ModalHeader', () => {
    it('renders without crashing', () => {
        const { asFragment } = renderWithTheme(<ModalHeader />);

        expect(asFragment()).toMatchSnapshot();
    });

    it('renders with a title', () => {
        const { queryByText, queryByTestId } = renderWithTheme(
            <ModalHeader title='Title' />
        );

        expect(queryByText(/Title/)).toBeInTheDocument();
        expect(queryByText(/Subtitle/)).not.toBeInTheDocument();
        expect(queryByTestId('close-icon')).not.toBeInTheDocument();
    });

    it('renders with a subtitle', () => {
        const { queryByText, queryByTestId } = renderWithTheme(
            <ModalHeader title='Title' subtitle='Subtitle' />
        );

        expect(queryByText(/Title/)).toBeInTheDocument();
        expect(queryByText(/Subtitle/)).toBeInTheDocument();
        expect(queryByTestId('close-icon')).not.toBeInTheDocument();
    });

    it('renders a close button', () => {
        const mockOnClose = jest.fn();
        const { queryByText, queryByTestId } = renderWithTheme(
            <ModalHeader
                title='Title'
                subtitle='Subtitle'
                onClose={mockOnClose}
            />
        );

        const closeButton = queryByTestId('close-icon');

        expect(queryByText(/Title/)).toBeInTheDocument();
        expect(queryByText(/Subtitle/)).toBeInTheDocument();
        expect(closeButton).toBeInTheDocument();

        expect(mockOnClose).toHaveBeenCalledTimes(0);
        fireEvent.click(closeButton);
        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
});
