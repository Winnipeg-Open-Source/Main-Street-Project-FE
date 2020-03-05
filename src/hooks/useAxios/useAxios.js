import { useReducer, useEffect } from 'react';
import axios from 'axios';

const REQUEST_START = 'REQUEST_START';
const REQUEST_FINISHED = 'REQUEST_FINISHED';

const requestStart = () => ({ type: REQUEST_START });
const requestFinished = (payload, isError = false) => ({ type: REQUEST_FINISHED, payload, isError });

const reducer = (state, action) => {
    switch (action.type) {
        case REQUEST_START:
            return {
                ...state,
                isLoading: true,
            };

        case REQUEST_FINISHED:
            return {
                ...state,
                ...action.payload,
                isLoading: false,
            };

        default:
            return state;
    }
};

const initialState = {
    isLoading: false,
    error: null,
};

function useAxios (options = {}) {
    const [ state, dispatch ] = useReducer(reducer, initialState);

    useEffect(() => {
        async function fetchData() {
            try {
                dispatch(requestStart());
                const response = await axios(options);
                dispatch(requestFinished(response));
            } catch (err) {
                dispatch(requestFinished(err, true));
            }
        }
        fetchData();
    }, [options]);

    return state;
}

export default useAxios;
