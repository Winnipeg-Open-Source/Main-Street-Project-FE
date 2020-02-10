import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Input, Label, TextArea } from 'pcln-design-system';

function MiscellaneousDonationForm ({
    className,
    name,
    description,
    quantity,
    notes,
    onNameChange,
    onDescriptionChange,
    onQuantityChange,
    onNotesChange,
}) {
    return (
        <>
            <Input id='name' placeholder='Name' value={name} onChange={onNameChange} />
            <Input id='description' placeholder='Description' value={description} onChange={onDescriptionChange} />
            <Input id='quantity' placeholder='Quantity' value={quantity} onChange={onQuantityChange} />
            <Label>
                Notes
                <TextArea id='notes' value={notes} onChange={onNotesChange} />
            </Label>
        </>
    );
}

MiscellaneousDonationForm.displayName = 'MiscellaneousDonationForm';

MiscellaneousDonationForm.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    quantity: PropTypes.number,
    notes: PropTypes.string,
    onNameChange: PropTypes.func,
    onDescriptionChange: PropTypes.func,
    onQuantityChange: PropTypes.func,
    onNotesChange: PropTypes.func,
};

MiscellaneousDonationForm.defaultProps = {
    className: '',
};

export default memo(MiscellaneousDonationForm);
