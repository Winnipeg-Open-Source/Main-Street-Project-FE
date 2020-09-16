const locationTypes = [
    'Storage',
    'Fridge',
    'Freezer',
];

const locationsNames = [
    'Freezer 1',
    'Freezer 2',
    'Shelf 1',
];

function getMockLocation (id) {
    const locationIndex = id % locationTypes.length;

    return {
        id,
        type: locationTypes[locationIndex],
        name: locationsNames[locationIndex],
        description: 'Location Description',
        address: '123 Random Street',
    };
}

export const mockLocation = getMockLocation(1);

export const mockLocations = [
    getMockLocation(1),
    getMockLocation(2),
    getMockLocation(3),
];
