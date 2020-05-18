export const LOAD_DONORS = 'LOAD_DONORS';
export const SAVE_DONOR = 'SAVE_DONOR';

export const loadDonors = (isLoading, isError, donors) => ({
    type: LOAD_DONORS,
    isLoading,
    isError,
    donors,
});

export const saveDonor = (donor) => ({
    type: SAVE_DONOR,
    donor,
});
