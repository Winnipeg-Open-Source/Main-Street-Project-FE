import React, { useState } from 'react';
import RequisitionFormComponent from 'components/RequisitionForm';
import useSaveRequisition from 'hooks/useSaveRequisition';
import useEmployees from 'hooks/useEmployees';
import useForm from 'hooks/useForm';
import useItems from 'hooks/useItems';
import useRoute from 'hooks/useRoute';
import { REQUISITIONS_PATH } from 'constants/paths';

const initialState = {
    employee: null,
    description: null,
    selectedItems: [],
};

function RequisitionForm () {
    const { employees } = useEmployees();
    const { items } = useItems();
    const { saveRequisition } = useSaveRequisition();
    const goToRequisitions = useRoute(REQUISITIONS_PATH);

    const [ state, setState ] = useState(initialState);

    const { employee, description, selectedItems } = state;

    const addSelectedItem = (item) => setState({
        ...state,
        selectedItems: [
            ...state.selectedItems,
            item,
        ],
    });

    const removeSelectedItem = (id) => setState({
        ...state,
        selectedItems: state.selectedItems.filter(item => item.id === id),
    });

    return (
        <RequisitionFormComponent
            employees={employees}
            employee={employee}
            description={description}
            items={items}
            selectedItems={selectedItems}
            onSelectItemChange={addSelectedItem}
            onSaveClick={saveRequisition}
            onCancelClick={goToRequisitions}
        />
    );
}

RequisitionForm.displayName = 'RequisitionForm';

export default RequisitionForm;
