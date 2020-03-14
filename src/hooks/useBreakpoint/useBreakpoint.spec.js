import { renderHook, act } from '@testing-library/react-hooks';
import useBreakpoint from './useBreakpoint';

const expectedDefaultResult = { "currentBreakpoint": "xl", "height": 768, "isMobile": false, "width": 1024 };
const expectedLargestResult = { "currentBreakpoint": "xxl", "height": 768, "isMobile": false, "width": 3840 };

describe('useBreakpoint', () => {
    it ('returns xl breakpoint by default', () => {
        const { result } = renderHook(() => useBreakpoint());
        expect(result.current).toStrictEqual(expectedDefaultResult);
    });

    it ('should return xxl for very large window size', () => {
        const initialInnerWidth = global.innerWidth;
        global.innerWidth = 3840;

        const { result } = renderHook(() => useBreakpoint());
        expect(result.current).toStrictEqual(expectedLargestResult);

        global.innerWidth = initialInnerWidth;
    });

    it ('should handle resizing', () => {
        const initialInnerWidth = global.innerWidth;

        const { result } = renderHook(() => useBreakpoint());
        expect(result.current).toStrictEqual(expectedDefaultResult);

        act(() => {
            global.innerWidth = 3840;
            global.dispatchEvent(new Event('resize'));
        });

        expect(result.current).toStrictEqual(expectedLargestResult);
        global.innerWidth = initialInnerWidth;
    });
});
