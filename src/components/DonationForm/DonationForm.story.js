import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import DonationForm from './DonationForm';
import { mockItems } from 'storybook/mocks/items';
import { multipleDonors } from 'storybook/mocks/donors';

export const Loading = () => (
    <DonationForm
        isLoadingDonors
        isLoadingItems
        donors={multipleDonors.donors}
        items={mockItems}
        selectedItems={[]}
        onSaveClick={action('Saved')}
        onCancelClick={action('Cancelled')}
    />
);

export const EmptyForm = () => {
    const [ selectedItems, setSelectedItems ] = useState([]);
    const onSelectItemChange = (item) => setSelectedItems([ ...selectedItems, item ]);

    return (
        <DonationForm
            donors={multipleDonors.donors}
            items={mockItems}
            selectedItems={selectedItems}
            onSelectItemChange={onSelectItemChange}
            onSaveClick={action('Saved')}
            onCancelClick={action('Cancelled')}
        />
    );
};

export const FilledForm = () => {
    const [ selectedItems, setSelectedItems ] = useState(mockItems);
    const onSelectItemChange = (item) => setSelectedItems([ ...selectedItems, item ]);

    return (
        <DonationForm
            donors={multipleDonors.donors}
            items={mockItems}
            selectedItems={selectedItems}
            onSelectItemChange={onSelectItemChange}
            onSaveClick={action('Saved')}
            onCancelClick={action('Cancelled')}
        />
    );
};

export default {
    title: 'DonationForm',
    component: DonationForm,
};
