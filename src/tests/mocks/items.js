export const mockLineItems = [
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
];

export const mockItems = [
    {
        id: 1,
        name: 'Paper Towel',
        quantityName: 'Rolls',
        lineItems: mockLineItems,
    },
    {
        id: 2,
        name: 'Blueberries',
        quantityName: 'Packages',
        lineItems: [
            {
                id: 1,
                locationName: 'Freezer 1',
                quantity: 5,
            },
            {
                id: 2,
                locationName: 'Freezer 2',
                quantity: 10,
            },
        ],
    },
    {
        id: 3,
        name: 'Steaks',
        lineItems: [
            {
                id: 1,
                locationName: 'Freezer 1',
                quantity: 5,
            },
            {
                id: 2,
                locationName: 'Freezer 2',
                quantity: 10,
            },
        ],
    },
];
