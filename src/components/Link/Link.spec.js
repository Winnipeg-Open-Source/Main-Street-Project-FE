import React from 'react';
import renderWithThemeAndRouter from 'tests/helpers/renderWithThemeAndRouter';
import { Home } from 'pcln-icons';
import Link from './Link';

describe('Link', () => {
    it('renders without crashing', () => {
        const { asFragment } = renderWithThemeAndRouter(<Link />);

        expect(asFragment()).toMatchSnapshot();
    });

    it('renders without icon', () => {
        const { getByText, queryByTestId } = renderWithThemeAndRouter(
            <Link>Link Text</Link>
        );

        expect(getByText(/Link Text/i)).toBeInTheDocument();
        expect(queryByTestId(/icon/)).not.toBeInTheDocument();
    });

    it('renders with icon', () => {
        const { getByText, queryByTestId } = renderWithThemeAndRouter(
            <Link icon={<Home data-testid='icon' />}>Link Text</Link>
        );

        expect(getByText(/Link Text/i)).toBeInTheDocument();
        expect(queryByTestId(/icon/)).toBeInTheDocument();
    });
});
