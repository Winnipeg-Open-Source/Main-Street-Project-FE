import React from 'react';
import RequisitionFormComponent from 'components/RequisitionForm';
import useEmployees from 'hooks/context/useEmployees';
import useItems from 'hooks/context/useItems';
import useRoute from 'hooks/useRoute';
import useRequisitionFormReducer from 'hooks/reducers/useRequisitionFormReducer';
import { REQUISITIONS_PATH } from 'constants/paths';

function RequisitionForm () {
    const { isLoading: isLoadingEmployees, employees } = useEmployees();
    const { isLoading: isLoadingItems, items } = useItems();
    const goToRequisitions = useRoute(REQUISITIONS_PATH);

    const requisitionProps = useRequisitionFormReducer();

    return (
        <RequisitionFormComponent
            {...requisitionProps}
            isLoadingEmployees={isLoadingEmployees}
            isLoadingItems={isLoadingItems}
            employees={employees}
            items={items}
            onCancelClick={goToRequisitions}
        />
    );
}

RequisitionForm.displayName = 'RequisitionForm';

export default RequisitionForm;
