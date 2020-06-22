import { LOAD_DONATIONS, SAVE_DONATION } from 'actions/Donations';

function DonationsReducer (state = {}, action = {}) {
    switch (action.type) {
        case LOAD_DONATIONS:
            return {
                ...state,
                isLoading: action.isLoading,
                isError: action.isError,
                donations: action.donations,
            };

        case SAVE_DONATION:
            return {
                ...state,
                donations: [
                    ...state.donations,
                    action.donation,
                ],
            };

        default:
            return state;
    }
}

export default DonationsReducer;
