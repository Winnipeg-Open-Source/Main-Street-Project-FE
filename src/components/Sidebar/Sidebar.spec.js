import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithThemeAndRouter from 'tests/helpers/renderWithThemeAndRouter';
import Sidebar from './Sidebar';
import routes from 'constants/routes';
import { LANDING_PATH, DONORS_PATH } from 'constants/paths';

describe('Sidebar', () => {
    it('renders without crashing', () => {
        const { asFragment } = renderWithThemeAndRouter(<Sidebar />);

        expect(asFragment()).toMatchSnapshot();
    });

    it('renders with collapsed sidebar', () => {
        const { asFragment } = renderWithThemeAndRouter(
            <Sidebar isCollapsed />
        );

        expect(asFragment()).toMatchSnapshot();
    });

    it('renders modal for mobile view', () => {
        const { asFragment } = renderWithThemeAndRouter(
            <Sidebar
                isMobileSidebar
                currentPathname={LANDING_PATH}
                routes={routes}
            />
        );

        expect(asFragment()).toMatchSnapshot();
    });

    it('can navigate to donors page', () => {
        const { getByText, history } = renderWithThemeAndRouter(
            <Sidebar currentPathname={LANDING_PATH} routes={routes} />
        );
        const donorsButton = getByText('Donors');

        expect(history.location.pathname).toBe(LANDING_PATH);
        fireEvent.click(donorsButton);
        expect(history.location.pathname).toBe(DONORS_PATH);
    });
});
