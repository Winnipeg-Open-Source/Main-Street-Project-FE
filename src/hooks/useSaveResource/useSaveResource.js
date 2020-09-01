import { useEffect } from 'react';
import useAxios from 'hooks/useAxios';
import useSaving from 'hooks/context/useSaving';
import useRoute from 'hooks/useRoute';

function useSaveResource (apiPath, redirectPath, onSave, method = 'post') {
    const request = {
        url: apiPath,
        method,
    };

    const { response, fetchData } = useAxios(request);
    const { setSaving } = useSaving();
    const goToRedirectPage = redirectPath && useRoute(redirectPath);

    const handleSave = (data) => {
        setSaving(true);
        fetchData(data);
    };

    useEffect(() => {
        if (!response.isLoading && response.isError) {
            setSaving(false);
        } else if (!response.isLoading && !!response.data) {
            onSave && onSave(response.data);
            setSaving(false);
            goToRedirectPage && goToRedirectPage();
        }
    }, [response]);

    return { response, handleSave };
}

export default useSaveResource;
