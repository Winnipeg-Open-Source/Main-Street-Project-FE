import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from 'hooks/useCounter';

describe('useCounter', () => {
    it('uses zero as default value', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.count).toStrictEqual(0);
    });

    it('changes count', () => {
        const { result } = renderHook(() => useCounter());

        expect(result.current.count).toStrictEqual(0);
        act(() => result.current.setCount(5));
        expect(result.current.count).toStrictEqual(5);
    });

    it('changes count with min', () => {
        const { result } = renderHook(() => useCounter(5, 2));

        expect(result.current.count).toStrictEqual(5);
        act(() => result.current.setCount(0));
        expect(result.current.count).toStrictEqual(2);
    });

    it('changes count with max', () => {
        const { result } = renderHook(() => useCounter(0, 0, 5));

        expect(result.current.count).toStrictEqual(0);
        act(() => result.current.setCount(6));
        expect(result.current.count).toStrictEqual(5);
    });

    it('increments count', () => {
        const { result } = renderHook(() => useCounter());

        expect(result.current.count).toStrictEqual(0);
        act(() => result.current.increment());
        expect(result.current.count).toStrictEqual(1);
    });

    it('decrements count', () => {
        const { result } = renderHook(() => useCounter(0));

        expect(result.current.count).toStrictEqual(0);
        act(() => result.current.decrement());
        expect(result.current.count).toStrictEqual(-1);
    });

    it('respects min value', () => {
        const { result } = renderHook(() => useCounter(0, 0));

        expect(result.current.count).toStrictEqual(0);
        act(() => result.current.decrement());
        expect(result.current.count).toStrictEqual(0);
    });

    it('respects max value', () => {
        const { result } = renderHook(() => useCounter(5, 0, 5));

        expect(result.current.count).toStrictEqual(5);
        act(() => result.current.increment());
        expect(result.current.count).toStrictEqual(5);
    });
});
