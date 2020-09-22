function getMockDonation (id) {
    return {
        id,
        donorId: 1,
        title: 'Donation Title',
        description: 'Description about this donation.',
        donationDate: '2020 December 20',
        items: [
            {
                id: 1,
                name: 'Paper Towel',
                quantityName: 'Rolls',
                lineItems: [
                    {
                        id: 1,
                        locationName: 'Shelf 1',
                        quantity: 5,
                    },
                    {
                        id: 2,
                        locationName: 'Shelf 2',
                        quantity: 10,
                    },
                ],
            },
        ],
        notes: 'Additional notes.',
    };
}

export const mockDonation = getMockDonation(1);

export const mockDonations = [
    getMockDonation(1),
    getMockDonation(2),
    getMockDonation(3),
];
