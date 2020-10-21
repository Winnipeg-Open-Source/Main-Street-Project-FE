import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Form from 'components/Form';
import Select from 'components/Select';
import FoodDonationForm from 'components/FoodDonationForm';
import ClothesDonationForm from 'components/ClothesDonationForm';
import HouseholdItemDonationForm from 'components/HouseholdItemDonationForm';
import MiscellaneousDonationForm from 'components/MiscellaneousDonationForm';

function CurrentForm ({ itemType, ...props }) {
    switch (itemType) {
        case 'Food':
            return <FoodDonationForm {...props} />;
        case 'Clothing':
            return <ClothesDonationForm {...props} />;
        case 'Household Item':
            return <HouseholdItemDonationForm {...props} />;
        case 'Miscellaneous':
            return <MiscellaneousDonationForm {...props} />;
        default:
            return null;
    }
}

function ItemForm ({
    className,
    itemType,
    onChange,
    onSaveClick,
    onCancelClick,
    ...props
}) {
    return (
        <Form
            className={className}
            onSaveClick={onSaveClick}
            onCancelClick={onCancelClick}
        >
            <Select
                id='item-type-select'
                name='itemType'
                value={itemType}
                onChange={onChange}
                data-testid='item-type-select'
            >
                <option>Food</option>
                <option>Clothing</option>
                <option>Household Item</option>
                <option>Miscellaneous</option>
            </Select>
            <CurrentForm itemType={itemType} onChange={onChange} {...props} />
        </Form>
    );
}

ItemForm.displayName = 'ItemForm';

ItemForm.propTypes = {
    className: PropTypes.string,
    itemType: PropTypes.string,
    locations: PropTypes.array,
    onChange: PropTypes.func,
    onSaveClick: PropTypes.func,
    onCancelClick: PropTypes.func,
};

ItemForm.defaultProps = {
    className: '',
};

export default memo(ItemForm);
