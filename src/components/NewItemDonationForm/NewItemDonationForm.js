import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'pcln-design-system';
import Form from 'components/Form';
import FoodDonationForm from 'components/FoodDonationForm';
import ClothesDonationForm from 'components/ClothesDonationForm';
import HouseholdItemDonationForm from 'components/HouseholdItemDonationForm';
import MiscellaneousDonationForm from 'components/MiscellaneousDonationForm';

function FormSwitch ({ itemType, ...props }) {
    switch (itemType) {
        case 'Food':
            return <FoodDonationForm {...props} />;
        case 'Clothing':
            return <ClothesDonationForm {...props} />;
        case 'Household Item':
            return <HouseholdItemDonationForm {...props} />;
        case 'Miscellaneous':
            return <MiscellaneousDonationForm {...props} />;
    }

    return null;
}

function NewItemDonationForm ({ className, onCancelClick, onSaveClick, ...props }) {
    const [ itemType, setItemType ] = useState();

    const onItemTypeChange = (evt) => setItemType(evt.target.value);

    return (
        <Form className={className} title='New Item' onCancelClick={onCancelClick} onSaveClick={onSaveClick}>
            <Select id='item-type-select' value={itemType} onChange={onItemTypeChange}>
                <option disabled selected>Item Type</option>
                <option>Food</option>
                <option>Clothing</option>
                <option>Household Item</option>
                <option>Miscellaneous</option>
            </Select>
            <FormSwitch itemType={itemType} {...props} />
        </Form>
    );
}

NewItemDonationForm.displayName = 'NewItemDonationForm';

NewItemDonationForm.propTypes = {
    className: PropTypes.string,
    onCancelClick: PropTypes.func,
    onSaveClick: PropTypes.func,
};

NewItemDonationForm.defaultProps = {
    className: '',
};

export default NewItemDonationForm;
