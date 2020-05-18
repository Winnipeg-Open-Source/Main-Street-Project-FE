import { useEffect } from 'react';
import useAxios from 'hooks/useAxios';
import useSaving from 'hooks/useSaving';
import useRoute from 'hooks/useRoute';
import { REQUISITIONS_API_PATH } from 'constants/api';
import { REQUISITIONS_PATH } from 'constants/paths';

const request = {
    url: REQUISITIONS_API_PATH,
    method: 'post',
};

function useSaveRequisition () {
    const { response, fetchData } = useAxios(request);
    const { setSaving } = useSaving();
    const goToRequisitionsPage = useRoute(REQUISITIONS_PATH);
    
    const saveRequisition = (data) => {
        setSaving(true);
        fetchData(data);
    };

    useEffect(() => {
        if (!response.isLoading && !!response.data) {
            setSaving(false);
            goToRequisitionsPage();
        }
    }, [response]);

    return { response, saveRequisition };
}

export default useSaveRequisition;
