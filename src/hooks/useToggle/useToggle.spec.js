import { renderHook, act } from '@testing-library/react-hooks';
import useToggle from './useToggle';

describe('useToggle', () => {
    it('should have a default value of false', () => {
        const { result } = renderHook(() => useToggle());
        const [ value ] = result.current;
        expect(value).toBe(false);
    });

    it('should have an initial value of true', () => {
        const { result } = renderHook(() => useToggle(true));
        const [ value ] = result.current;
        expect(value).toBe(true);
    });

    it('should have an initial value of false', () => {
        const { result } = renderHook(() => useToggle(false));
        const [ value ] = result.current;
        expect(value).toBe(false);
    });

    it('should be able to toggle between true and false', () => {
        const { result } = renderHook(() => useToggle(false));
        let [ value, onToggle ] = result.current;
        expect(value).toBe(false);

        act(() => onToggle());
        [ value, onToggle ] = result.current;
        expect(value).toBe(true);

        act(() => onToggle());
        [ value ] = result.current;
        expect(value).toBe(false);
    });
});
