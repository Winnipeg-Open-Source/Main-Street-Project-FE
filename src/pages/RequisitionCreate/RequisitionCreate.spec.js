import React from 'react';
import renderWithThemeAndRouter from 'tests/helpers/renderWithThemeAndRouter';
import RequisitionCreate from './RequisitionCreate';
import useEmployees from 'hooks/context/useEmployees';
import useItems from 'hooks/context/useItems';

jest.mock('hooks/context/useEmployees');
jest.mock('hooks/context/useItems');

describe ('RequisitionCreate', () => {
    it ('renders without crashing', () => {
        const mockLoadEmployees = jest.fn();
        const mockLoadItems = jest.fn();

        useEmployees.mockImplementation(() => ({ isLoading: true, onLoadEmployees: mockLoadEmployees }));
        useItems.mockImplementation(() => ({ isLoading: true, onLoadItems: mockLoadItems }));

        const { asFragment } = renderWithThemeAndRouter(<RequisitionCreate />);

        expect(mockLoadEmployees).toHaveBeenCalledTimes(1);
        expect(mockLoadItems).toHaveBeenCalledTimes(1);
        expect(asFragment()).toMatchSnapshot();
    });

    it ('does not load already loaded resources', () => {
        const mockLoadEmployees = jest.fn();
        const mockLoadItems = jest.fn();

        useEmployees.mockImplementation(() => ({ isLoading: false, onLoadEmployees: mockLoadEmployees }));
        useItems.mockImplementation(() => ({ isLoading: false, onLoadItems: mockLoadItems }));

        renderWithThemeAndRouter(<RequisitionCreate />);

        expect(mockLoadEmployees).toHaveBeenCalledTimes(0);
        expect(mockLoadItems).toHaveBeenCalledTimes(0);
    });
});
