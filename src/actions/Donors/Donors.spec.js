import {
    LOAD_DONORS,
    SAVE_DONOR,
    loadDonors,
    saveDonor,
} from './Donors';

describe ('Donors Actions', () => {
    it ('returns load donors action', () => {
        const response = loadDonors([{ id: 1 }]);
        expect(response).toStrictEqual({ type: LOAD_DONORS, donors: [{ id: 1 }]});
    });

    it ('returns save donors action', () => {
        const response = saveDonor({ id: 1 });
        expect(response).toStrictEqual({ type: SAVE_DONOR, donor: { id: 1 }});
    });
});
