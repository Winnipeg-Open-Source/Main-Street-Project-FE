import { REQUEST_START, REQUEST_FINISHED } from 'actions/Axios';

const reducer = (state, action = {}) => {
    switch (action.type) {
        case REQUEST_START:
            return {
                ...state,
                isLoading: true,
            };

        case REQUEST_FINISHED:
            return {
                ...state,
                data: !action.isError ? action.payload.data : null,
                isError: action.isError,
                isLoading: false,
            };

        default:
            return state;
    }
};

export default reducer;
