import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input';
import LineItemForm from 'components/LineItemForm';
import TextArea from 'components/TextArea';

function HouseholdItemDonationForm ({
    name,
    description,
    quantityName,
    locations,
    lineItems,
    notes,
    onChange,
    onAddLineItemClick,
    onItemQuantityChange,
}) {
    return (
        <>
            <Input
                id='name'
                name='name'
                placeholder='Name'
                value={name}
                onChange={onChange}
            />
            <Input
                id='description'
                name='description'
                placeholder='Description'
                value={description}
                onChange={onChange}
            />
            <Input
                id='quantity-name'
                name='quantityName'
                placeholder='Quantity Name'
                value={quantityName}
                onChange={onChange}
            />
            <LineItemForm
                locations={locations}
                lineItems={lineItems}
                onAddClick={onAddLineItemClick}
                onItemQuantityChange={onItemQuantityChange}
            />
            <TextArea
                id='notes'
                name='notes'
                label='Notes'
                value={notes}
                onChange={onChange}
            />
        </>
    );
}

HouseholdItemDonationForm.displayName = 'HouseholdItemDonationForm';

HouseholdItemDonationForm.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    quantityName: PropTypes.string,
    locations: PropTypes.array,
    lineItems: PropTypes.array,
    notes: PropTypes.string,
    onChange: PropTypes.func,
    onAddLineItemClick: PropTypes.func,
    onItemQuantityChange: PropTypes.func,
};

export default memo(HouseholdItemDonationForm);
