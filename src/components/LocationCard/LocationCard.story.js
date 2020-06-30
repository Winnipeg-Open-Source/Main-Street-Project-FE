import React from 'react';
import LocationCard from './LocationCard';
import { mockLocation } from 'tests/mocks/locations';

export const Location = () => <LocationCard {...mockLocation} />;

export default {
    title: 'LocationCard',
    component: LocationCard,
};
