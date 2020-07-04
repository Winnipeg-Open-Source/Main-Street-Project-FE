import { useCallback, useEffect, useReducer } from 'react';
import ResourcesReducer from 'reducers/Resources';
import useLoadResources from 'hooks/useLoadResources';
import { loadResources, saveResource } from 'actions/Resources';

const initialState = {
    isLoading: true,
    isError: false,
    data: [],
};

function useResourceReducer (apiPath) {
    const [ state, dispatch ] = useReducer(ResourcesReducer, initialState);
    const { isLoading, isError, data, fetchData } = useLoadResources(apiPath);

    useEffect(() => {
        dispatch(loadResources(isLoading, isError, data));
    }, [isLoading]);

    const onSave = useCallback((resource) => dispatch(saveResource(resource)));

    return {
        ...state,
        onSave,
        onLoad: fetchData,
    };
}

export default useResourceReducer;
