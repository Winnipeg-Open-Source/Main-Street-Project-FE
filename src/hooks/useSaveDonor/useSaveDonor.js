import { useEffect } from 'react';
import useAxios from 'hooks/useAxios';
import useSaving from 'hooks/useSaving';
import useDonors from 'hooks/useDonors';
import useRoute from 'hooks/useRoute';
import { BASE_API_PATH, DONORS_API_PATH } from 'constants/api';
import { DONORS_PATH } from 'constants/paths';

const request = {
    url: BASE_API_PATH + DONORS_API_PATH,
    method: 'post',
};

function useSaveDonor () {
    const { response, fetchData } = useAxios(request);
    const { onSaveDonor } = useDonors();
    const { setSaving } = useSaving();
    const goToDonorsPage = useRoute(DONORS_PATH);

    const saveDonor = (data) => {
        setSaving(response.isLoading);
        fetchData(data);
    };

    useEffect(() => {
        if (!response.isLoading && !!response.data) {
            onSaveDonor(response.data);
            setSaving(false);
            goToDonorsPage();
        }
    }, [response, onSaveDonor, goToDonorsPage]);

    return { response, saveDonor };
}

export default useSaveDonor;
