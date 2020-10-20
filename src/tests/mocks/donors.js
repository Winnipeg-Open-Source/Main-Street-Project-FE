function getMockDonor (id) {
    return {
        id,
        name: 'Costco',
        address: '22 Road Lane',
        city: 'Winnipeg, MB',
        email: 'email@email.com',
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
    };
}

export const donor = getMockDonor(1);

export const mockDonors = [getMockDonor(1), getMockDonor(2), getMockDonor(3)];
