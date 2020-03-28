import { renderHook } from '@testing-library/react-hooks';
import useAxios from 'hooks/useAxios';
import useDonorsRequest from './useDonorsRequest';
import { DONORS_API_PATH } from 'constants/api';

jest.mock('hooks/useAxios');

const mockFetchData = jest.fn();

const mockResponse = {
    state: {
        isLoading: false,
        donors: [],
    },
    fetchData: mockFetchData,
}

const expectedRequest = {
    url: DONORS_API_PATH,
    method: 'get',
};

const expectedResponse = {
    fetchData: mockFetchData,
    state: {
        isLoading: false,
        donors: [],
    },
};

describe ('useDonorsRequest', () => {
    it ('default request sends get request', () => {
        const mockRequest = jest.fn();
        mockRequest.mockReturnValue(mockResponse);
        useAxios.mockImplementation(mockRequest);

        const { result } = renderHook(() => useDonorsRequest());

        expect(useAxios).toBeCalledWith(expectedRequest);
        expect(result.current).toStrictEqual(expectedResponse);
        
        expect(mockFetchData).toHaveBeenCalledTimes(0);
        result.current.fetchData();
        expect(mockFetchData).toHaveBeenCalledTimes(1);
    });
});
