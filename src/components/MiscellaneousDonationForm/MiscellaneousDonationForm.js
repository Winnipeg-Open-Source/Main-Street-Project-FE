import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input';
import TextArea from 'components/TextArea';

function MiscellaneousDonationForm ({
    name,
    description,
    quantity,
    notes,
    onChange,
}) {
    return (
        <>
            <Input id='name' name='name' placeholder='Name' value={name} onChange={onChange} />
            <Input id='description' name='description' placeholder='Description' value={description} onChange={onChange} />
            <Input id='quantity' name='quantity' placeholder='Quantity' value={quantity} onChange={onChange} />
            <TextArea id='notes' name='notes' label='Notes' value={notes} onChange={onChange} />
        </>
    );
}

MiscellaneousDonationForm.displayName = 'MiscellaneousDonationForm';

MiscellaneousDonationForm.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    quantity: PropTypes.number,
    notes: PropTypes.string,
    onChange: PropTypes.func,
};

export default memo(MiscellaneousDonationForm);
