import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input';
import Select from 'components/Select';
import TextArea from 'components/TextArea';

function FoodDonationForm ({
    name,
    description,
    quantity,
    retailValue,
    condition,
    notes,
    onChange,
}) {
    return (
        <>
            <Input id='name' name='name' placeholder='Name' value={name} onChange={onChange} />
            <Input id='description' name='description' placeholder='Description' value={description} onChange={onChange} />
            <Input id='quantity' name='quantity' placeholder='Quantity' type='number' value={quantity} onChange={onChange} />
            <Input id='retail-value' name='retailValue' placeholder='Retail Value ($)' type='number' value={retailValue} onChange={onChange} />
            <Select id='condition' name='condition' label='Condition' value={condition} onChange={onChange} data-testid='Condition'>
                <option>Perfect</option>
                <option>Great</option>
                <option>Good</option>
                <option>Average</option>
                <option>Poor</option>
            </Select>
            <TextArea id='notes' name='notes' label='Notes' value={notes} onChange={onChange} />
        </>
    );
}

FoodDonationForm.displayName = 'FoodDonationForm';

FoodDonationForm.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    quantity: PropTypes.number,
    retailValue: PropTypes.number,
    condition: PropTypes.string,
    notes: PropTypes.string,
    onChange: PropTypes.func,
};

export default memo(FoodDonationForm);
