import { useCallback, useReducer, useState } from 'react';
import AxiosReducer from 'reducers/Axios';
import { requestStart, requestFinished } from 'actions/Axios';
import {
    DONATIONS_API_PATH,
    DONORS_API_PATH,
    EMPLOYEES_API_PATH,
    ITEMS_API_PATH,
    REQUISITIONS_API_PATH,
} from 'constants/api';
import { mockDonations } from 'tests/mocks/donations';
import { mockDonors } from 'tests/mocks/donors';
import { mockEmployees } from 'tests/mocks/employees';
import { mockItems } from 'tests/mocks/items';
import { mockRequisitions } from 'tests/mocks/requisitions';

const initialState = {
    donations: mockDonations,
    donors: mockDonors,
    employees: mockEmployees,
    items: mockItems,
    requisitions: mockRequisitions,
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

        case REQUISITIONS_API_PATH:
            return state.requisitions;
    }
}

function useLocalAxios (options = {}) {
    const [ state, setState ] = useState(initialState);
    const [ reducerState, dispatch ] = useReducer(AxiosReducer, initialReducerState);

    const fetchData = useCallback(async (data) => {
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

        setTimeout(() => dispatch(requestFinished({ data: response })), 500);
    }, [ options ]);

    return { response: reducerState, fetchData };
}

export default useLocalAxios;
