import React from 'react';
import Page from 'components/Page';
import RequisitionForm from 'containers/RequisitionForm';

function RequisitionCreate () {
    return (
        <Page title='New Requisition'>
            <RequisitionForm />
        </Page>
    );
}

RequisitionCreate.displayName = 'RequisitionCreate';

export default RequisitionCreate;
