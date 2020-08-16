import { LOGIN, LOGOUT } from 'actions/Authentication';

function Authentication (state = {}, action = {}) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
            };

        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
            };

        default:
            return state;
    }
}

export default Authentication;
