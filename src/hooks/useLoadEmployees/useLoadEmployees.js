import { useMemo } from 'react';
import useAxios from 'hooks/useAxios';
import { EMPLOYEES_API_PATH } from 'constants/api';

const request = {
    url: EMPLOYEES_API_PATH,
    method: 'get',
};

function useLoadEmployees () {
    const { response, fetchData } = useAxios(request);

    return useMemo(() => ({
        isLoading: response.isLoading,
        isError: response.isError,
        employees: response.data || [],
        fetchData,
    }), [response, fetchData]);
}

export default useLoadEmployees;
