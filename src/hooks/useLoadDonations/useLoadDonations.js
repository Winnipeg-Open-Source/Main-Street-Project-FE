import { useMemo } from 'react';
import useAxios from 'hooks/useAxios';
import { DONATIONS_API_PATH } from 'constants/api';

const request = {
    url: DONATIONS_API_PATH,
    method: 'get',
};

function useLoadDonations () {
    const { response, fetchData } = useAxios(request);

    return useMemo(() => ({
        isLoading: response.isLoading,
        isError: response.isError,
        donations: response.data || [],
        fetchData,
    }), [response, fetchData]);
}

export default useLoadDonations;
