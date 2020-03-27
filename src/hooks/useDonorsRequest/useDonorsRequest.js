import useAxios from 'hooks/useAxios';
import { DONORS_API_PATH } from 'constants/api';

const request = {
    url: DONORS_API_PATH,
    method: 'get',
};

function useDonorsRequest () {
    return useAxios(request);
}

export default useDonorsRequest;
