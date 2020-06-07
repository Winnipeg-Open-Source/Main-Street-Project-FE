function getMockDonation (id) {
    return {
        id,
        donorId: 1,
        title: 'Donation Title',
        description: 'Description about this donation.',
        items: [
            {
                id: 1,
                lineItems: [
                    {
                        id: 1,
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
