import { useCallback, useReducer, useState } from 'react';
import AxiosReducer from 'reducers/Axios';
import { requestStart, requestFinished } from 'actions/Axios';
import {
    DONATIONS_API_PATH,
    DONORS_API_PATH,
    EMPLOYEES_API_PATH,
    ITEMS_API_PATH,
    LOCATIONS_API_PATH,
    LOGIN_API_PATH,
    REQUISITIONS_API_PATH,
    USERS_API_PATH,
} from 'constants/api';
import { mockDonations } from 'tests/mocks/donations';
import { mockDonors } from 'tests/mocks/donors';
import { mockEmployees } from 'tests/mocks/employees';
import { mockItems } from 'tests/mocks/items';
import { mockLocations } from 'tests/mocks/locations';
import { mockRequisitions } from 'tests/mocks/requisitions';
import { mockUsers } from 'tests/mocks/users';

const initialState = {
    donations: mockDonations,
    donors: mockDonors,
    employees: mockEmployees,
    items: mockItems,
    locations: mockLocations,
    requisitions: mockRequisitions,
    users: mockUsers,
};

const initialReducerState = {
    isLoading: true,
    isError: false,
};

function generateRandomId () {
    return Math.floor(Math.random() * 1e6);
}

function setData (url, data, state, setState) {
    const id = generateRandomId();

    switch (url) {
        case DONATIONS_API_PATH:
            setState({
                ...state,
                donations: [
                    ...state.donations,
                    {
                        id,
                        data,
                    },
                ],
            });
            break;

        case DONORS_API_PATH:
            setState({
                ...state,
                donors: [
                    ...state.donors,
                    {
                        id,
                        data,
                    },
                ],
            });
            break;

        case EMPLOYEES_API_PATH:
            setState({
                ...state,
                employees: [
                    ...state.employees,
                    {
                        id,
                        data,
                    },
                ],
            });
            break;

        case ITEMS_API_PATH:
            setState({
                ...state,
                items: [
                    ...state.items,
                    {
                        id,
                        data,
                    },
                ],
            });
            break;

        case LOCATIONS_API_PATH:
            setState({
                ...state,
                locations: [
                    ...state.locations,
                    {
                        id,
                        data,
                    },
                ],
            });
            break;

        case LOGIN_API_PATH:
            return {
                uid: 123456789,
                isAdmin: true,
                isLoggedIn: true,
            };

        case REQUISITIONS_API_PATH:
            setState({
                ...state,
                requisitions: [
                    ...state.requisitions,
                    {
                        id,
                        data,
                    },
                ],
            });
            break;

        case USERS_API_PATH:
            return 'Email is already used.';
    }

    return {
        id,
        ...data,
    };
}

function getData (url, state) {
    switch (url) {
        case DONATIONS_API_PATH:
            return state.donations;

        case DONORS_API_PATH:
            return state.donors;

        case EMPLOYEES_API_PATH:
            return state.employees;

        case ITEMS_API_PATH:
            return state.items;

        case LOCATIONS_API_PATH:
            return state.locations;

        case REQUISITIONS_API_PATH:
            return state.requisitions;

        case USERS_API_PATH:
            return state.users;
    }
}

function useLocalAxios (options = {}) {
    const [state, setState] = useState(initialState);
    const [reducerState, dispatch] = useReducer(
        AxiosReducer,
        initialReducerState
    );

    const fetchData = useCallback(
        async (data) => {
            const { url, method } = options;

            dispatch(requestStart());

            let response = null;
            switch (method) {
                case 'post':
                    response = setData(url, data, state, setState);
                    break;
                case 'get':
                    response = getData(url, state);
                    break;
            }

            setTimeout(
                () => dispatch(requestFinished({ data: response })),
                500
            );
        },
        [options]
    );

    return { response: reducerState, fetchData };
}

export default useLocalAxios;
