import { renderHook, act } from '@testing-library/react-hooks';
import axios from 'axios';
import useAxios from './useAxios';

jest.mock('axios', () => jest.fn());

const initialState = {
    isLoading: true,
    isError: false,
};

const expectedResult = {
    isLoading: false,
    isError: false,
    data: {
        test: true,
    },
};

const expectedError = {
    isLoading: false,
    isError: true,
    data: null,
};

describe ('useAxios', () => {
    it ('should receive valid response', async () => {
        axios.mockResolvedValue({ data: { test: true } });

        const { result, waitForValueToChange } = renderHook(() => useAxios());
        expect(result.current.response).toStrictEqual(initialState);

        act(() => {
            result.current.fetchData();
        });

        await waitForValueToChange(() => {
            return result.current.response;
        });

        expect(result.current.response).toStrictEqual(expectedResult);
    });

    it ('should receive an error', async () => {
        axios.mockRejectedValue(new Error({ error: true }));
        
        const { result, waitForValueToChange } = renderHook(() => useAxios());
        expect(result.current.response).toStrictEqual(initialState);

        act(() => {
            result.current.fetchData();
        });

        await waitForValueToChange(() => {
            return result.current.response;
        });

        expect(result.current.response).toStrictEqual(expectedError);
    });
});
