import { useReducer } from 'react';
import useDonations from 'hooks/context/useDonations';
import useSaveResource from 'hooks/useSaveResource';
import DonationForm from 'reducers/DonationForm';
import {
    changeDonor,
    changeTitle,
    changeDescription,
    addSelectedItem,
    changeItemQuantity,
    changeNotes,
} from 'actions/DonationForm';
import { DONATIONS_API_PATH } from 'constants/api';
import { DONATIONS_PATH } from 'constants/paths';

const initialState = {
    donorId: null,
    title: null,
    description: null,
    selectedItems: [],
    notes: null,
};

function useDonationFormReducer () {
    const { onSaveDonation } = useDonations();
    const { handleSave } = useSaveResource(DONATIONS_API_PATH, DONATIONS_PATH, onSaveDonation);

    const [ state, dispatch ] = useReducer(DonationForm, initialState);
    const { donorId, title, description, selectedItems, notes } = state;

    const onDonorChange = (evt) => dispatch(changeDonor(evt.target.value));
    const onTitleChange = (evt) => dispatch(changeTitle(evt.target.value));
    const onDescriptionChange = (evt) => dispatch(changeDescription(evt.target.value));
    const onSelectItemChange = (item) => dispatch(addSelectedItem(item));
    const onItemQuantityChange = (itemId, lineItemId, quantity) => dispatch(changeItemQuantity(itemId, lineItemId, quantity));
    const onNotesChange = (evt) => dispatch(changeNotes(evt.target.value));

    const onSaveClick = () => handleSave({
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
