import React, { useEffect, useState } from 'react';
import ItemFormComponent from 'components/ItemForm';
import useItems from 'hooks/context/useItems';
import useLocations from 'hooks/context/useLocations';
import useForm from 'hooks/useForm';
import useLocations from 'hooks/context/useLocations';
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
    const { onSaveItem } = useItems();
    const { state, onChange } = useForm(initialState);
    const { isLoading: isLoadingLocations, locations, onLoadLocations } = useLocations();
    const goToItems = useRoute(ITEMS_PATH);

    const { state, onChange } = useForm(initialState);
    const { lineItems, setLineItems } = useState([]);

    const addLineItem = (lineItem) => {
        setLineItems([
            ...lineItems,
            {
                ...lineItem,
                locationName: lineItem.name,
            },
        ]);
    };

    const itemQuantityChange = (itemId, lineItemId, value) => {
        setLineItems([
            ...lineItems.map(lineItem => lineItem.id === lineItemId
                ? {
                    ...lineItem,
                    quantity: value,
                }
                : lineItem
            ),
        ]);
    };

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
            onAddLineItemClick={addLineItem}
            onItemQuantityChange={itemQuantityChange}
            onSaveClick={onSaveClick}
            onCancelClick={goToItems}
        />
    );
}

ItemForm.displayName = 'ItemForm';

export default ItemForm;
