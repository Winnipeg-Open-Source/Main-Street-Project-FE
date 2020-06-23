import { useMemo } from 'react';
import useAxios from 'hooks/useAxios';

function useLoadResources (apiPath) {
    const request = {
        url: apiPath,
        method: 'get',
    };

    const { response, fetchData } = useAxios(request);

    return useMemo(() => ({
        isLoading: response.isLoading,
        isError: response.isError,
        data: response.data || [],
        fetchData,
    }), [response]);
}

export default useLoadResources;
