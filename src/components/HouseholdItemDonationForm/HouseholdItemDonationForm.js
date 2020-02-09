import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Input, Label, TextArea } from 'pcln-design-system';
import Form from 'components/Form';

function HouseholdItemDonationForm ({
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
        <Form className={className}>
            <Input id='name' placeholder='Name' value={name} onChange={onNameChange} />
            <Input id='description' placeholder='Description' value={description} onChange={onDescriptionChange} />
            <Input id='quantity' placeholder='Quantity' value={quantity} onChange={onQuantityChange} />
            <Label>
                Notes
                <TextArea id='notes' value={notes} onChange={onNotesChange} />
            </Label>
        </Form>
    );
}

HouseholdItemDonationForm.displayName = 'HouseholdItemDonationForm';

HouseholdItemDonationForm.propTypes = {
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

HouseholdItemDonationForm.defaultProps = {
    className: '',
};

export default memo(HouseholdItemDonationForm);
