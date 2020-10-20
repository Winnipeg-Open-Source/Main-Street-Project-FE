export const LOAD_RESOURCES = 'LOAD_RESOURCES';
export const SAVE_RESOURCE = 'SAVE_RESOURCE';
export const UPDATE_RESOURCE = 'UPDATE_RESOURCE';

export const loadResources = (isLoading, isError, resources) => ({
    type: LOAD_RESOURCES,
    isLoading,
    isError,
    resources,
});

export const saveResource = (resource) => ({ type: SAVE_RESOURCE, resource });

export const updateResource = (resource) => ({
    type: UPDATE_RESOURCE,
    resource,
});
