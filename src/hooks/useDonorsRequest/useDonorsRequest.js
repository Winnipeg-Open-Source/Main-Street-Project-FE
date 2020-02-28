import React from 'react';
import useAxios from 'hooks/useAxios';
import { DONORS_API_PATH } from 'constants/api';

function useDonorsRequest () {
    return useAxios({
        url: DONORS_API_PATH,
        method: 'get',
    });
}

export default useDonorsRequest;
