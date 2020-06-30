import { LOAD_RESOURCES, SAVE_RESOURCE } from 'actions/Resources';

function Resources (state = {}, action = {}) {
    switch (action.type) {
        case LOAD_RESOURCES:
            return {
                isLoading: action.isLoading,
                isError: action.isError,
                data: action.resources,
            };

        case SAVE_RESOURCE:
            return {
                ...state,
                data: [
                    ...state.data,
                    action.resource,
                ],
            };

        default:
            return state;
    }
}

export default Resources;
