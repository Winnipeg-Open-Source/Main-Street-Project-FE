import { useReducer, useEffect } from 'react';
import axios from 'axios';
import AxiosReducer from 'reducers/Axios';

const initialState = {
    isLoading: false,
    isError: false,
};

function useAxios (options = {}) {
    const [ state, dispatch ] = useReducer(AxiosReducer, initialState);

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
