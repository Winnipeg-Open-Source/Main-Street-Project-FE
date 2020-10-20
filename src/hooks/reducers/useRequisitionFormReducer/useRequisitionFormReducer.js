import { useReducer } from 'react';
import useRequisitions from 'hooks/context/useRequisitions';
import useSaveResource from 'hooks/useSaveResource';
import RequisitionFormReducer from 'reducers/RequisitionForm';
import {
    changeEmployee,
    changeDescription,
    addSelectedItem,
    changeItemQuantity,
} from 'actions/RequisitionForm';
import { REQUISITIONS_API_PATH } from 'constants/api';
import { REQUISITIONS_PATH } from 'constants/paths';

const initialState = {
    employeeId: null,
    description: null,
    selectedItems: [],
};

function useRequisitionFormReducer () {
    const { onSaveRequisition } = useRequisitions();
    const { handleSave } = useSaveResource(
        REQUISITIONS_API_PATH,
        REQUISITIONS_PATH,
        onSaveRequisition
    );

    const [state, dispatch] = useReducer(RequisitionFormReducer, initialState);
    const { employeeId, description, selectedItems } = state;

    const onEmployeeChange = (evt) =>
        dispatch(changeEmployee(evt.target.value));
    const onDescriptionChange = (evt) =>
        dispatch(changeDescription(evt.target.value));
    const onSelectItemChange = (item) => dispatch(addSelectedItem(item));
    const onItemQuantityChange = (itemId, lineItemId, quantity) =>
        dispatch(changeItemQuantity(itemId, lineItemId, quantity));

    const onSaveClick = () => handleSave(state);

    return {
        employeeId,
        description,
        selectedItems,
        onEmployeeChange,
        onDescriptionChange,
        onSelectItemChange,
        onItemQuantityChange,
        onSaveClick,
    };
}

export default useRequisitionFormReducer;
