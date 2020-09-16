import React, { useEffect } from 'react';
import Input from 'components/Input';
import ItemList from 'components/ItemList';
import Page from 'components/Page';
import NewButton from 'containers/NewButton';
import useItems from 'hooks/context/useItems';

function Items () {
    const { isLoading, items, onLoadItems } = useItems();
    const disabled = isLoading || (items && items.length === 0);

    useEffect(() => {
        isLoading && onLoadItems();
    }, []);

    return (
        <Page isLoading={isLoading} title='Items' renderAction={NewButton}>
            <Input id='search' disabled={disabled} placeholder='Search' mb={3} />
            <ItemList isLoading={isLoading} showEmpty items={items} />
        </Page>
    );
}

Items.displayName = 'Items';

export default Items;
