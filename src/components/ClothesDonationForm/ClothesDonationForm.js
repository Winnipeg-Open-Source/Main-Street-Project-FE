import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input';
import Select from 'components/Select';
import TextArea from 'components/TextArea';

function ClothesDonationForm ({
    name,
    description,
    size,
    quantity,
    notes,
    onChange,
}) {
    return (
        <>
            <Input id='name' name='name' placeholder='Name' value={name} onChange={onChange} />
            <Input id='description' name='description' placeholder='Description' value={description} onChange={onChange} />
            <Select id='size' name='size' label='Size' value={size} onChange={onChange} data-testid='Size'>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
                <option>XXXL</option>
            </Select>
            <Input id='quantity' name='quantity' placeholder='Quantity' type='number' value={quantity} onChange={onChange} />
            <TextArea id='notes' name='notes' label='Notes' value={notes} onChange={onChange} />
        </>
    );
}

ClothesDonationForm.displayName = 'ClothesDonationForm';

ClothesDonationForm.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    size: PropTypes.string,
    quantity: PropTypes.number,
    notes: PropTypes.string,
    onChange: PropTypes.func,
};

ClothesDonationForm.defaultProps = {
    size: 'M'
};

export default memo(ClothesDonationForm);
