import React, { useEffect } from 'react';
import Page from 'components/Page';
import RequisitionForm from 'containers/RequisitionForm';
import useEmployees from 'hooks/context/useEmployees';
import useItems from 'hooks/context/useItems';

function RequisitionCreate () {
    const { isLoading: isLoadingEmployees, onLoadEmployees } = useEmployees();
    const { isLoading: isLoadingItems, onLoadItems } = useItems();

    useEffect(() => {
        isLoadingEmployees && onLoadEmployees();
        isLoadingItems && onLoadItems();
    }, []);

    return (
        <Page title='New Requisition'>
            <RequisitionForm />
        </Page>
    );
}

RequisitionCreate.displayName = 'RequisitionCreate';

export default RequisitionCreate;
