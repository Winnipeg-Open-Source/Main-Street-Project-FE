import React from 'react';
import ItemFormComponent from 'components/ItemForm';
import useItems from 'hooks/context/useItems';
import useForm from 'hooks/useForm';
import useRoute from 'hooks/useRoute';
import useSaveResource from 'hooks/useSaveResource';
import { ITEMS_API_PATH } from 'constants/api';
import { ITEMS_PATH } from 'constants/paths';

const initialState = {
    itemType: 'food',
    name: null,
    description: null,
    retailValue: null,
    notes: null,
};

function ItemForm () {
    const { onSaveItem } = useItems();
    const { state, onChange, onToggle } = useForm(initialState);
    const goToItems = useRoute(ITEMS_PATH);

    const { handleSave } = useSaveResource(ITEMS_API_PATH, ITEMS_PATH, onSaveItem);
    const onSaveClick = () => handleSave(state);

    return (
        <ItemFormComponent
            onSaveClick={onSaveClick}
            onCancelClick={goToItems}
        />
    );
}

ItemForm.displayName = 'ItemForm';

export default ItemForm;
