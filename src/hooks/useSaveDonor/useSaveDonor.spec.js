import { renderHook, act } from '@testing-library/react-hooks';
import useSaveDonor from './useSaveDonor';
import useAxios from 'hooks/useAxios';
import useDonors from 'hooks/useDonors';
import useSaving from 'hooks/useSaving';
import { DONORS_API_PATH } from 'constants/api';

jest.mock('hooks/useAxios');
jest.mock('hooks/useSaving');
jest.mock('hooks/useDonors');

describe ('useSaveDonor', () => {
    it ('it does something', () => {
        const mockFetchData = jest.fn();
        const mockSaveDonor = jest.fn();
        const mockSetSaving = jest.fn();

        useAxios.mockImplementation(() => ({
            response: { test: true },
            fetchData: mockFetchData,
        }));

        useDonors.mockImplementation(() => ({ onSaveDonor: mockSaveDonor }));
        useSaving.mockImplementation(() => ({ setSaving: mockSetSaving }));

        const { result } = renderHook(() => useSaveDonor({ test: true }));

        expect(result.current.response).toStrictEqual({ test: true });
        expect(result.current.saveDonor).toBe(mockFetchData);
        expect(useAxios).toBeCalledWith({ url: DONORS_API_PATH, method: 'post', body: { test: true } });
    });
});
