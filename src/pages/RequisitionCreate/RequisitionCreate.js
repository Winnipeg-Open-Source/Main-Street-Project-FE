import React from 'react';
import Page from 'components/Page';
import RequisitionForm from 'components/RequisitionForm';

function RequisitionCreate () {
    const saveRequisition = () => {};

    return (
        <Page title='New Requisition'>
            <RequisitionForm onSaveClick={saveRequisition} />
        </Page>
    );
}

RequisitionCreate.displayName = 'RequisitionCreate';

export default RequisitionCreate;
