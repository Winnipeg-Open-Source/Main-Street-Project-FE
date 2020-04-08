import {
    LOAD_DONORS,
    SAVE_DONOR,
    loadDonors,
    saveDonor,
} from './Donors';

describe ('Donors Actions', () => {
    it ('returns load donors action', () => {
        const response = loadDonors(false, false, [{ id: 1 }]);
        expect(response).toStrictEqual({ type: LOAD_DONORS, isLoading: false, isError: false, donors: [{ id: 1 }]});
    });

    it ('returns save donors action', () => {
        const response = saveDonor({ id: 1 });
        expect(response).toStrictEqual({ type: SAVE_DONOR, donor: { id: 1 }});
    });
});
