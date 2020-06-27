import React from 'react';
import Input from 'components/Input';
import ItemList from 'components/ItemList';
import Page from 'components/Page';
import NewButton from 'containers/NewButton';
import useItems from 'hooks/context/useItems';

function Items () {
    const { isLoading, items } = useItems();
    const disabled = isLoading || (items && items.length === 0);

    return (
        <Page isLoading={isLoading} title='Items' renderAction={NewButton}>
            <Input id='search' disabled={disabled} placeholder='Search' mb={3} />
            <ItemList items={items} />
        </Page>
    );
}

Items.displayName = 'Items';

export default Items;
