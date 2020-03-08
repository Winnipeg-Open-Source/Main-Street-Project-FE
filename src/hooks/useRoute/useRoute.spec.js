import { renderHook } from '@testing-library/react-hooks';
import { useHistory } from 'react-router-dom';
import useRoute from './useRoute';
import { LANDING_PATH, DONORS_PATH } from 'constants/paths';

jest.mock('react-router-dom', () => ({ useHistory: jest.fn() }));

describe ('useRoute', () => {
    it ('routes to landing if no route specified', () => {
        const mockPush = jest.fn();
        useHistory.mockImplementation(() => ({
            push: mockPush,
        }));

        const { result } = renderHook(() => useRoute());
        
        expect(mockPush).toBeCalledTimes(0);
        result.current && result.current();
        expect(mockPush).toBeCalledTimes(1);
        expect(mockPush).toBeCalledWith(LANDING_PATH);
    });

    it ('routes to provided route', () => {
        const mockPush = jest.fn();
        useHistory.mockImplementation(() => ({
            push: mockPush,
        }));

        const { result } = renderHook(() => useRoute(DONORS_PATH));
        
        expect(mockPush).toBeCalledTimes(0);
        result.current && result.current();
        expect(mockPush).toBeCalledTimes(1);
        expect(mockPush).toBeCalledWith(DONORS_PATH);
    });
});
