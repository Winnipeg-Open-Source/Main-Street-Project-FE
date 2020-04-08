import { LOAD_DONORS, SAVE_DONOR } from 'actions/Donors';

function DonorsReducer (state = {}, action = {}) {
    switch (action.type) {
        case LOAD_DONORS:
            return {
                isLoading: action.isLoading,
                isError: action.isError,
                donors: action.donors,
            };

        case SAVE_DONOR:
            return {
                ...state,
                donors: [
                    ...state.donors,
                    action.donor,
                ],
            };

        default:
            return state;
    }
}

export default DonorsReducer;
