import { useMemo } from 'react';
import useAxios from 'hooks/useAxios';
import { REQUISITIONS_API_PATH } from 'constants/api';

const request = {
    url: REQUISITIONS_API_PATH,
    method: 'get',
};

function useLoadRequisitions () {
    const { response, fetchData } = useAxios(request);

    return useMemo(() => ({
        isLoading: response.isLoading,
        isError: response.isError,
        requisitions: response.data || [],
        fetchData,
    }) ,[response, fetchData]);
}

export default useLoadRequisitions;
