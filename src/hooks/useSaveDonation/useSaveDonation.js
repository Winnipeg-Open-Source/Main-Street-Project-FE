import { useEffect } from 'react';
import useAxios from 'hooks/useAxios';
import useSaving from 'hooks/useSaving';
import useRoute from 'hooks/useRoute';
import { DONATIONS_API_PATH } from 'constants/api';
import { DONATIONS_PATH } from 'constants/paths';

const request = {
    url: DONATIONS_API_PATH,
    method: 'post',
};

function useSaveDonation () {
    const { response, fetchData } = useAxios(request);
    const { setSaving } = useSaving();
    const goToDonationsPage = useRoute(DONATIONS_PATH);

    const saveDonation = (data) => {
        setSaving(true);
        fetchData(data);
    };

    useEffect(() => {
        if (!response.isLoading && !!response.data) {
            setSaving(false);
            goToDonationsPage();
        }
    }, [response]);

    return { response, saveDonation };
}

export default useSaveDonation;
