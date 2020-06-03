import React, { useReducer } from 'react';
import RequisitionFormComponent from 'components/RequisitionForm';
import useSaveRequisition from 'hooks/useSaveRequisition';
import useEmployees from 'hooks/useEmployees';
import useItems from 'hooks/useItems';
import useRoute from 'hooks/useRoute';
import RequisitionFormReducer from 'reducers/RequisitionForm';
import {
    changeEmployee,
    changeDescription,
    addSelectedItem,
    changeItemQuantity,
} from 'actions/RequisitionForm';
import { REQUISITIONS_PATH } from 'constants/paths';

const initialState = {
    employeeId: null,
    description: null,
    selectedItems: [],
};

function RequisitionForm () {
    const { isLoading: isLoadingEmployees, employees } = useEmployees();
    const { isLoading: isItemsLoading, items } = useItems();
    const { saveRequisition } = useSaveRequisition();
    const goToRequisitions = useRoute(REQUISITIONS_PATH);

    const [ state, dispatch ] = useReducer(RequisitionFormReducer, initialState);    
    const { employeeId, description, selectedItems } = state;

    const onEmployeeChange = (evt) => dispatch(changeEmployee(evt.target.value));
    const onDescriptionChange = (evt) => dispatch(changeDescription(evt.target.value));
    const onSelectItemChange = (item) => dispatch(addSelectedItem(item));
    const onItemQuantityChange = (itemId, lineItemId, quantity) => dispatch(changeItemQuantity(itemId, lineItemId, quantity));
    
    const onSaveClick = () => saveRequisition(state);

    const props = {
        isLoadingEmployees,
        isItemsLoading,
        employees: employees,
        employeeId,
        description,
        items,
        selectedItems,
        onEmployeeChange,
        onDescriptionChange,
        onSelectItemChange,
        onItemQuantityChange,
    };

    return (
        <RequisitionFormComponent
            {...props}
            onSaveClick={onSaveClick}
            onCancelClick={goToRequisitions}
        />
    );
}

RequisitionForm.displayName = 'RequisitionForm';

export default RequisitionForm;
