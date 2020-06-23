import React from 'react';
import Page from 'components/Page';
import ItemForm from 'containers/ItemForm';

function ItemsCreate () {
    return (
        <Page title='Create an Item'>
            <ItemForm />
        </Page>
    );
}

ItemsCreate.displayName = 'ItemsCreate';

export default ItemsCreate;
