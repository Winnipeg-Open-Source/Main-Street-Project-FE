import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithTheme from 'tests/helpers/renderWithTheme';
import Header from './Header';

describe ('Header', () => {
    it ('renders without crashing', () => {
        const { asFragment } = renderWithTheme(<Header />);

        expect(asFragment()).toMatchSnapshot();
    });

    it ('displays correct name', () => {
        const { getByText } = renderWithTheme(<Header />);

        expect(getByText(/Main Street Project Inventory System/)).toBeInTheDocument();
    });

    it ('allows menu click', () => {
        const onMenuClick = jest.fn();
        const { getByTestId } = renderWithTheme(<Header onMenuClick={onMenuClick} />);

        const MenuIcon = getByTestId(/menu-icon/);

        expect(onMenuClick).toHaveBeenCalledTimes(0);
        fireEvent.click(MenuIcon);
        expect(onMenuClick).toHaveBeenCalledTimes(1);
    });
});
