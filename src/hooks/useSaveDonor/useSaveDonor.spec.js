import { renderHook } from '@testing-library/react-hooks';
import useSaveDonor from './useSaveDonor';
import useAxios from 'hooks/useAxios';
import useDonors from 'hooks/useDonors';
import useRoute from 'hooks/useRoute';
import useSaving from 'hooks/useSaving';
import { DONORS_API_PATH } from 'constants/api';

jest.mock('hooks/useAxios');
jest.mock('hooks/useDonors');
jest.mock('hooks/useRoute');
jest.mock('hooks/useSaving');

describe ('useSaveDonor', () => {
    it ('it starts saving', () => {
        const mockFetchData = jest.fn();
        const mockSaveDonor = jest.fn();
        const mockGoToRoute = jest.fn();
        const mockSetSaving = jest.fn();

        useAxios.mockImplementation(() => ({
            response: { isLoading: true },
            fetchData: mockFetchData,
        }));

        useDonors.mockImplementation(() => ({ onSaveDonor: mockSaveDonor }));
        useSaving.mockImplementation(() => ({ setSaving: mockSetSaving }));
        useRoute.mockImplementation(() => mockGoToRoute);

        const { result } = renderHook(() => useSaveDonor());

        result.current.saveDonor({ test: true });
        
        expect(result.current.response).toStrictEqual({ isLoading: true });
        expect(useAxios).toBeCalledWith({ url: DONORS_API_PATH, method: 'post' });
        expect(mockFetchData).toHaveBeenCalledTimes(1);
        expect(mockFetchData).toBeCalledWith({ test: true });
        expect(mockSetSaving).toHaveBeenCalledTimes(1);
        expect(mockSetSaving).toHaveBeenCalledWith(true);
    });

    it ('it finishes saving', () => {
        const mockFetchData = jest.fn();
        const mockSaveDonor = jest.fn();
        const mockGoToRoute = jest.fn();
        const mockSetSaving = jest.fn();

        useAxios.mockImplementation(() => ({
            response: { isLoading: false, data: { id: 1 } },
            fetchData: mockFetchData,
        }));

        useDonors.mockImplementation(() => ({ onSaveDonor: mockSaveDonor }));
        useSaving.mockImplementation(() => ({ setSaving: mockSetSaving }));
        useRoute.mockImplementation(() => mockGoToRoute);

        renderHook(() => useSaveDonor());
        
        expect(mockSaveDonor).toHaveBeenCalledTimes(1);
        expect(mockSaveDonor).toBeCalledWith({ id: 1 });
        expect(mockSetSaving).toHaveBeenCalledTimes(1);
        expect(mockSetSaving).toHaveBeenCalledWith(false);
        expect(mockGoToRoute).toHaveBeenCalledTimes(1);
    });
});
