import React, { useEffect, useState } from 'react';
import ItemFormComponent from 'components/ItemForm';
import useItems from 'hooks/context/useItems';
import useLocations from 'hooks/context/useLocations';
import useItemForm from 'hooks/useItemForm';
import useRoute from 'hooks/useRoute';
import useSaveResource from 'hooks/useSaveResource';
import { ITEMS_API_PATH } from 'constants/api';
import { ITEMS_PATH } from 'constants/paths';

const initialState = {
    itemType: 'Food',
    name: null,
    description: null,
    lineItems: [],
    notes: null,
};

function ItemForm () {
    const { state, onChange, onAddLineItemClick, onLineItemQuantityChange } = useItemForm(initialState);
    const { onSaveItem } = useItems();
    const { isLoading: isLoadingLocations, locations, onLoadLocations } = useLocations();
    const goToItems = useRoute(ITEMS_PATH);

    const { handleSave } = useSaveResource(ITEMS_API_PATH, ITEMS_PATH, onSaveItem);
    const onSaveClick = () => handleSave(state);

    useEffect(() => {
        isLoadingLocations && onLoadLocations();
    }, []);

    return (
        <ItemFormComponent
            {...state}
            locations={locations}
            onChange={onChange}
            onAddLineItemClick={onAddLineItemClick}
            onItemQuantityChange={onLineItemQuantityChange}
            onSaveClick={onSaveClick}
            onCancelClick={goToItems}
        />
    );
}

ItemForm.displayName = 'ItemForm';

export default ItemForm;
