import React from 'react';
import renderWithTheme from 'tests/helpers/renderWithTheme';
import ButtonGroup from './ButtonGroup';
import { Button } from 'pcln-design-system';

describe('ButtonGroup', () => {
    it('renders without crashing', () => {
        const { asFragment } = renderWithTheme(<ButtonGroup />);

        expect(asFragment()).toMatchSnapshot();
    });

    it('has single button', () => {
        const { queryByText } = renderWithTheme(
            <ButtonGroup>
                <Button>First</Button>
            </ButtonGroup>
        );

        expect(queryByText(/First/i)).toBeInTheDocument();
        expect(queryByText(/Second/i)).not.toBeInTheDocument();
    });

    it('has multiple buttons', () => {
        const { getByText } = renderWithTheme(
            <ButtonGroup>
                <Button>First</Button>
                <Button>Second</Button>
            </ButtonGroup>
        );

        expect(getByText(/First/i)).toBeInTheDocument();
        expect(getByText(/Second/i)).toBeInTheDocument();
    });
});
