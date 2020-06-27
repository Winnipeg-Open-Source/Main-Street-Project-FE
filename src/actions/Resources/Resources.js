export const LOAD_RESOURCES = 'LOAD_RESOURCES';
export const SAVE_RESOURCE = 'SAVE_RESOURCE';

export const loadResources = (isLoading, isError, resources) => ({
    type: LOAD_RESOURCES,
    isLoading,
    isError,
    resources,
});

export const saveResource = (resource) => ({ type: SAVE_RESOURCE, resource });
