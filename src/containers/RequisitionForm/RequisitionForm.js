import React from 'react';
import RequisitionFormComponent from 'components/RequisitionForm';
import useSaveRequisition from 'hooks/useSaveRequisition';

function RequisitionForm () {
    const { response, saveRequisition } = useSaveRequisition();

    return (
        <RequisitionFormComponent
            onSaveClick={saveRequisition}
        />
    );
}

RequisitionForm.displayName = 'RequisitionForm';

export default RequisitionFormComponent;
