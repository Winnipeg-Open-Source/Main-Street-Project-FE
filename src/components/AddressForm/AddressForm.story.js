import React from 'react';
import AddressForm from './AddressForm';
import List from 'components/List';

export const Default = () => (
    <List>
        <AddressForm />
    </List>
);

export default {
    title: 'AddressForm',
    component: AddressForm,
};
