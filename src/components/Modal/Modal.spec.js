import React, { useState } from 'react';
import { fireEvent, wait } from '@testing-library/react';
import renderWithTheme from 'tests/helpers/renderWithTheme';
import Modal from './Modal';

function ModalContainer (props) {
    const [isOpen, setOpen] = useState(false);
    const onOpenClick = () => setOpen(true);
    const onCloseClick = () => setOpen(false);

    return (
        <>
            <button onClick={onOpenClick}>Button</button>
            <Modal isOpen={isOpen} onClose={onCloseClick} {...props}>
                Content
            </Modal>
        </>
    );
}

describe('Modal', () => {
    it('renders without crashing', () => {
        const { asFragment } = renderWithTheme(<Modal isOpen />);

        expect(asFragment()).toMatchSnapshot();
    });

    it('should open when button clicked', () => {
        const { queryByText } = renderWithTheme(<ModalContainer />);

        expect(queryByText(/Content/)).not.toBeInTheDocument();
        fireEvent.click(queryByText(/Button/));
        expect(queryByText(/Content/)).toBeInTheDocument();
    });

    it('should close when close button clicked', async () => {
        const { queryByText, queryByTestId } = renderWithTheme(
            <ModalContainer />
        );

        expect(queryByText(/Content/)).not.toBeInTheDocument();
        fireEvent.click(queryByText(/Button/));
        expect(queryByText(/Content/)).toBeInTheDocument();
        fireEvent.click(queryByTestId('close-icon'));
        await wait(() =>
            expect(queryByText(/Content/)).not.toBeInTheDocument()
        );
    });

    it('has footer with close button', async () => {
        const { queryByText } = renderWithTheme(<ModalContainer hasFooter />);

        fireEvent.click(queryByText(/Button/));
        expect(queryByText(/Content/)).toBeInTheDocument();
        fireEvent.click(queryByText(/Close/));
        await wait(() =>
            expect(queryByText(/Content/)).not.toBeInTheDocument()
        );
    });
});
