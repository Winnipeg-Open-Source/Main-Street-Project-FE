import renderHookWithContext from 'tests/helpers/renderHookWithContext';
import DonorsContext from 'context/Donors';
import useDonor from './useDonor';

const mockDonorState = {
    isLoading: false,
    donors: [{ id: 1 }],
};

const mockNoDonorState = {
    isLoading: false,
    donors: [],
};

const expectedSuccess = {
    isLoading: false,
    donor: {
        id: 1,
    },
};

const expectedFailure = {
    isLoading: false,
    donor: undefined,
};

describe('useDonor', () => {
    it('returns donor for the given id', () => {
        const { result } = renderHookWithContext(
            () => useDonor(1),
            DonorsContext,
            mockDonorState
        );
        expect(result.current).toStrictEqual(expectedSuccess);
    });

    it('returns null for bad id', () => {
        const { result } = renderHookWithContext(
            () => useDonor(2),
            DonorsContext,
            mockDonorState
        );
        expect(result.current).toStrictEqual(expectedFailure);
    });

    it('returns null for no donors', () => {
        const { result } = renderHookWithContext(
            () => useDonor(1),
            DonorsContext,
            mockNoDonorState
        );
        expect(result.current).toStrictEqual(expectedFailure);
    });
});
