import React from 'react';
import LinkButton from 'components/LinkButton';
import Input from 'components/Input';
import ItemList from 'components/ItemList';
import Page from 'components/Page';
import useItems from 'hooks/context/useItems';
import { ITEM_NEW_PATH } from 'constants/paths';

function Items () {
    const { isLoading, items } = useItems();
    const disabled = isLoading || (items && items.length === 0);

    const NewItemButton = () => <LinkButton title='New Item' path={ITEM_NEW_PATH} />;

    return (
        <Page isLoading={isLoading} title='Items' renderAction={NewItemButton}>
            <Input id='search' disabled={disabled} placeholder='Search' mb={3} />
            <ItemList items={items} />
        </Page>
    );
}

Items.displayName = 'Items';

export default Items;
