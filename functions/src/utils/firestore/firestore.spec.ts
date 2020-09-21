import { create, getAll } from './firestore';
import { getFirestore } from '../firebase';

jest.mock('../firebase', () => ({
    getFirestore: jest.fn(),
}));

describe ('firebase', () => {
    it ('creates object', async () => {
        const mockAdd = jest.fn().mockReturnValue({ id: 1 });
        const mockCollection = () => ({ add: mockAdd });

        // @ts-ignore
        getFirestore.mockImplementation(() => ({ collection: mockCollection }));

        const mockData = { test: true };
        const response = await create('collectionName', mockData);

        expect(mockAdd).toHaveBeenCalledWith(mockData);
        expect(response).toStrictEqual({ ...mockData, id: 1 });
    });

    xit ('creates many objects', () => {

    });

    xit ('updates object', () => {

    });

    it ('gets object - without filters', async () => {
        const mockObjects = [
            { id: 1, data: () => ({ name: 'First' }) },
            { id: 2, data: () => ({ name: 'Second' }) },
        ];
        const expectedObjects = [
            { id: 1, name: 'First' },
            { id: 2, name: 'Second' },
        ];

        const mockGet = jest.fn().mockReturnValue(mockObjects);
        const mockCollection = () => ({ get: mockGet });

        // @ts-ignore
        getFirestore.mockImplementation(() => ({ collection: mockCollection }));

        const response = await getAll('collectionName');

        expect(response).toStrictEqual(expectedObjects);
    });

    xit ('gets all objects', () => {

    });
});
