export const noDonors = {
    isLoading: false,
    donors: [],
};

export const singleDonor = {
    isLoading: false,
    donors: [
        {
            id: 1,
            name: 'Costco',
            address: '22 Road Lane',
            city: 'Winnipeg, MB',
            email: 'costco@costco.com',
            phoneNumber: '204-555-5555',
            lastDonationDate: '2019 December 20',
            donations: [
                {
                    donationDate: '2019 December 20',
                },
                {
                    donationDate: '2019 November 20',
                },
            ],
        },
    ],
};

export const multipleDonors = {
    isLoading: false,
    donors: [
        {
            id: 1,
            name: 'Costco',
            lastDonationDate: '2019 December 20',
        },
        {
            id: 2,
            name: 'Sobeys',
            lastDonationDate: '2019 December 20',
        },
        {
            id: 3,
            name: 'Jane Doe',
            lastDonationDate: '2019 December 20',
        },
    ],
};
