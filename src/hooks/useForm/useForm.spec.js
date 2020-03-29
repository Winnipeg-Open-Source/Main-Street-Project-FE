import { renderHook, act } from '@testing-library/react-hooks';
import useForm from 'hooks/useForm';

describe ('useForm', () => {
    it ('returns empty initial state', () => {
        const { result } = renderHook(() => useForm());
        expect(result.current.state).toStrictEqual({});
    });

    it ('should handle onChange correctly', () => {
        const { result } = renderHook(() => useForm({ test: 'nothing' }));

        act(() => {
            result.current.onChange({ target: { name: 'test', value: 'something' }});
        });

        expect(result.current.state).toStrictEqual({ test: 'something' });
    });

    it ('should handle onToggle correctly', () => {
        const { result } = renderHook(() => useForm({ test: false }));

        act(() => {
            result.current.onToggle({ target: { name: 'test', checked: true }});
        });

        expect(result.current.state).toStrictEqual({ test: true });
    });
});
