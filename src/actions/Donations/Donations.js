export const LOAD_DONATIONS = 'LOAD_DONATIONS';
export const SAVE_DONATION = 'SAVE_DONATION';

export const loadDonations = (isLoading, isError, donations) => ({
    type: LOAD_DONATIONS,
    isLoading,
    isError,
    donations,
});

export const saveDonation = (donation) => ({ type: SAVE_DONATION, donation });
