import { useReducer } from 'react';
import useSaveDonation from 'hooks/useSaveDonation';
import DonationForm from 'reducers/DonationForm';
import {
    changeDonor,
    changeTitle,
    changeDescription,
    addSelectedItem,
    changeItemQuantity,
    changeNotes,
} from 'actions/DonationForm';

const initialState = {
    donorId: null,
    title: null,
    description: null,
    selectedItems: [],
    notes: null,
};

function useDonationFormReducer () {
    const { saveDonation } = useSaveDonation();
    const [ state, dispatch ] = useReducer(DonationForm, initialState);
    const { donorId, title, description, selectedItems, notes } = state;

    const onDonorChange = (evt) => dispatch(changeDonor(evt.target.value));
    const onTitleChange = (evt) => dispatch(changeTitle(evt.target.value));
    const onDescriptionChange = (evt) => dispatch(changeDescription(evt.target.value));
    const onSelectItemChange = (item) => dispatch(addSelectedItem(item));
    const onItemQuantityChange = (itemId, lineItemId, quantity) => dispatch(changeItemQuantity(itemId, lineItemId, quantity));
    const onNotesChange = (evt) => dispatch(changeNotes(evt.target.value));

    const onSaveClick = () => saveDonation({
        donorId,
        title,
        items: selectedItems,
        notes,
    });

    return {
        donorId,
        title,
        description,
        selectedItems,
        notes,
        onDonorChange,
        onTitleChange,
        onDescriptionChange,
        onSelectItemChange,
        onItemQuantityChange,
        onNotesChange,
        onSaveClick,
    };
}

export default useDonationFormReducer;
