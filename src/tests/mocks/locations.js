const locationTypes = [
    'Storage',
    'Fridge',
    'Freezer',
];

function getMockLocation (id) {
    const locationTypeIndex = id % locationTypes.length;

    return {
        id,
        type: locationTypes[locationTypeIndex],
        name: 'Location Name',
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
