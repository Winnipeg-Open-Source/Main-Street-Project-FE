import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithTheme from 'tests/helpers/renderWithTheme';
import ProvinceSelect from './ProvinceSelect';

describe ('ProvinceSelect', () => {
    it ('renders manitoba by default', () => {
        const { getByTestId } = renderWithTheme(<ProvinceSelect />);

        expect(getByTestId('province-select').value).toBe('MB');
    });
});
