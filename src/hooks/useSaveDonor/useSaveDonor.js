import { useEffect } from 'react';
import useAxios from 'hooks/useAxios';
import useSaving from 'hooks/useSaving';
import useDonors from 'hooks/useDonors';
import { DONORS_API_PATH } from 'constants/api';

const getRequest = (donor) => ({
    url: DONORS_API_PATH,
    method: 'post',
    body: donor,
});

function useSaveDonor (donor) {
    const request = getRequest(donor);
    const { response, fetchData } = useAxios(request);
    const { onSaveDonor } = useDonors();
    const { setSaving } = useSaving();

    useEffect(() => {
        setSaving(response.isLoading);
        !response.isLoading && onSaveDonor(response);
    }, [setSaving, onSaveDonor, response]);

    return { response, saveDonor: fetchData };
}

export default useSaveDonor;
