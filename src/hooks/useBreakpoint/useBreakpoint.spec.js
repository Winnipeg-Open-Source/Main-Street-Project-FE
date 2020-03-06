import { renderHook } from '@testing-library/react-hooks';
import useBreakpoint from './useBreakpoint';

describe('useBreakpoint', () => {
    it ('returns xl breakpoint by default', () => {
        const { result } = renderHook(() => useBreakpoint());
        const expectedResult = { "currentBreakpoint": "xl", "height": 768, "isMobile": false, "width": 1024 };
        expect(result.current).toStrictEqual(expectedResult);
    });
});
