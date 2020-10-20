import {
    LOAD_RESOURCES,
    SAVE_RESOURCE,
    UPDATE_RESOURCE,
} from 'actions/Resources';

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
                data: [...state.data, action.resource],
            };

        case UPDATE_RESOURCE:
            return {
                ...state,
                data: [
                    ...state.data.map((datum) =>
                        datum.id === action.resource.id
                            ? {
                                  ...datum,
                                  ...action.resource,
                              }
                            : datum
                    ),
                ],
            };

        default:
            return state;
    }
}

export default Resources;
