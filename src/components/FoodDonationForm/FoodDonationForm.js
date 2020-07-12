import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input';
import LineItemForm from 'components/LineItemForm';
import TextArea from 'components/TextArea';

function FoodDonationForm ({
    name,
    description,
    retailValue,
    notes,
    onChange,
}) {
    return (
        <>
            <Input id='name' name='name' placeholder='Name' value={name} onChange={onChange} />
            <Input id='description' name='description' placeholder='Description' value={description} onChange={onChange} />
            <Input id='retail-value' name='retailValue' placeholder='Retail Value ($)' type='number' value={retailValue} onChange={onChange} />
            <LineItemForm  />
            <TextArea id='notes' name='notes' label='Notes' value={notes} onChange={onChange} />
        </>
    );
}

FoodDonationForm.displayName = 'FoodDonationForm';

FoodDonationForm.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    retailValue: PropTypes.number,
    notes: PropTypes.string,
    onChange: PropTypes.func,
};

export default memo(FoodDonationForm);
