import renderHookWithContext from 'tests/helpers/renderHookWithContext';
import DonationsContext from 'context/Donations';
import useDonation from './useDonation';

const mockDonationState = {
    isLoading: false,
    donations: [{ id: 1 }],
};

const mockNoDonationState = {
    isLoading: false,
    donations: [],
}

const expectedSuccess = {
    isLoading: false,
    donation: {
        id: 1,
    },
};

const expectedFailure = {
    isLoading: false,
    donation: undefined,
};

describe ('useDonation', () => {
    it ('returns donation for the given id', () => {
        const { result } = renderHookWithContext(() => useDonation(1), DonationsContext, mockDonationState);
        expect(result.current).toStrictEqual(expectedSuccess);
    });

    it ('returns null for bad id', () => {
        const { result } = renderHookWithContext(() => useDonation(2), DonationsContext, mockDonationState);
        expect(result.current).toStrictEqual(expectedFailure);
    });

    it ('returns null for no donations', () => {
        const { result } = renderHookWithContext(() => useDonation(1), DonationsContext, mockNoDonationState);
        expect(result.current).toStrictEqual(expectedFailure);
    });
});
