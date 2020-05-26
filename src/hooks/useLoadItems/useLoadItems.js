import { useMemo } from 'react';
import useAxios from 'hooks/useAxios';
import { ITEMS_API_PATH } from 'constants/api';

const request = {
    url: ITEMS_API_PATH,
    method: 'get',
};

function useLoadItems () {
    const { response, fetchData } = useAxios(request);

    return useMemo(() => ({
        isLoading: response.isLoading,
        isError: response.isError,
        items: response.data || [],
        fetchData,
    }), [response, fetchData]);
}

export default useLoadItems;
