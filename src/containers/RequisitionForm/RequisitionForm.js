import React, { useReducer } from 'react';
import RequisitionFormComponent from 'components/RequisitionForm';
import useSaveRequisition from 'hooks/useSaveRequisition';
import useEmployees from 'hooks/useEmployees';
import useItems from 'hooks/useItems';
import useRoute from 'hooks/useRoute';
import RequisitionFormReducer from 'reducers/RequisitionForm';
import { addSelectedItem, changeItemQuantity } from 'actions/RequisitionForm';
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

    const [ state, dispatch ] = useReducer(RequisitionFormReducer, initialState);    

    const onSelectItemChange = (item) => dispatch(addSelectedItem(item));
    const onItemQuantityChange = (itemId, lineItemId, quantity) => dispatch(changeItemQuantity(itemId, lineItemId, quantity));

    const { employee, description, selectedItems } = state;

    const props = {
        employees,
        employee,
        description,
        items,
        selectedItems,
        onSelectItemChange,
        onItemQuantityChange,
    };

    return (
        <RequisitionFormComponent
            {...props}
            onSaveClick={saveRequisition}
            onCancelClick={goToRequisitions}
        />
    );
}

RequisitionForm.displayName = 'RequisitionForm';

export default RequisitionForm;
