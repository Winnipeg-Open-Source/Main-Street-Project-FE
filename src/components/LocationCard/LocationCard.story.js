import React from 'react';
import LocationCard from './';
import { mockLocation } from 'tests/mocks/locations';

export const Loading = () => <LocationCard isLoading />;

export const Location = () => <LocationCard {...mockLocation} />;

export default {
    title: 'LocationCard',
    component: LocationCard,
};
