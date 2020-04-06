import { useMemo } from 'react';
import useAxios from 'hooks/useAxios';
import { BASE_API_PATH, DONORS_API_PATH } from 'constants/api';

const request = {
    url: BASE_API_PATH + DONORS_API_PATH,
    method: 'get',
};

function useDonorsRequest () {
    const { response, fetchData } = useAxios(request);

    return useMemo(() => ({
        isLoading: response.isLoading,
        isError: response.isError,
        donors: response.data || [],
        fetchData,
    }), [response, fetchData]);
}

export default useDonorsRequest;
