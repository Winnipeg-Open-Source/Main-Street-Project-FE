import { useEffect } from 'react';
import useAxios from 'hooks/useAxios';
import { DONORS_API_PATH } from 'constants/api';

const request = {
    url: DONORS_API_PATH,
    method: 'get',
};

function useDonorsRequest () {
    const { state, fetchData } = useAxios(request);

    useEffect(() => {
        fetchData();
    }, [ fetchData ]);

    return state;
}

export default useDonorsRequest;
