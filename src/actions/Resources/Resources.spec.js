import {
    LOAD_RESOURCES,
    SAVE_RESOURCE,
    loadResources,
    saveResource,
} from './Resources';

describe('Resources Actions', () => {
    it('returns load resources action', () => {
        const response = loadResources(false, false, [{ id: 1 }]);
        expect(response).toStrictEqual({
            type: LOAD_RESOURCES,
            isLoading: false,
            isError: false,
            resources: [{ id: 1 }],
        });
    });

    it('returns save donors action', () => {
        const response = saveResource({ id: 1 });
        expect(response).toStrictEqual({
            type: SAVE_RESOURCE,
            resource: { id: 1 },
        });
    });
});
