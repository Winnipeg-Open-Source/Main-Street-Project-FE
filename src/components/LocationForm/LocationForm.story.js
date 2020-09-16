import React from 'react';
import LocationForm from './LocationForm';

export const Empty = () => <LocationForm />;

export const Filled = () => (
    <LocationForm
        type='Freezer'
        name='Location Name'
        description='Location Description'
        address='123 Main Street'
    />
);

export default {
    title: 'LocationForm',
    component: LocationForm,
};
