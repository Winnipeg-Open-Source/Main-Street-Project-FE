export const LOAD_DONORS = 'LOAD_DONORS';
export const SAVE_DONOR = 'SAVE_DONOR';

export const loadDonors = (donors) => ({ type: LOAD_DONORS, donors });
export const saveDonor = (donor) => ({ type: SAVE_DONOR, donor });
