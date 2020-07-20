import React, { useEffect } from 'react';
import Page from 'components/Page';
import ItemForm from 'containers/ItemForm';
import useItems from 'hooks/context/useItems';
import useLocations from 'hooks/context/useLocations';

function ItemsCreate () {
    const { isLoading: isLoadingItems, onLoadItems } = useItems();
    const { isLoading: isLoadingLocations, onLoadLocations } = useLocations();

    useEffect(() => {
        isLoadingItems && onLoadItems();
        isLoadingLocations && onLoadLocations();
    }, []);

    return (
        <Page title='Create an Item'>
            <ItemForm />
        </Page>
    );
}

ItemsCreate.displayName = 'ItemsCreate';

export default ItemsCreate;
