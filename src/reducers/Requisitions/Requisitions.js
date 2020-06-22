import { LOAD_REQUISITIONS, SAVE_REQUISITION } from 'actions/Requisitions';

function RequisitionsReducer (state = {}, action = {}) {
    switch (action.type) {
        case LOAD_REQUISITIONS:
            return {
                isLoading: action.isLoading,
                isError: action.isError,
                requisitions: action.requisitions,
            };

        case SAVE_REQUISITION:
            return {
                ...state,
                requisitions: [
                    ...state.requisitions,
                    action.requisition,
                ],
            };

        default:
            return state;
    }
}

export default RequisitionsReducer;
