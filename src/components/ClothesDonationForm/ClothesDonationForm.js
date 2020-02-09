import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Input, Label, Select, TextArea } from 'pcln-design-system';
import Form from 'components/Form';

function ClothesDonationForm ({
    className,
    name,
    description,
    size,
    quantity,
    notes,
    onNameChange,
    onDescriptionChange,
    onSizeChange,
    onQuantityChange,
    onNotesChange,
}) {
    return (
        <Form className={className}>
            <Input id='name' placeholder='Name' value={name} onChange={onNameChange} />
            <Input id='description' placeholder='Description' value={description} onChange={onDescriptionChange} />
            <Label>
                Size
                <Select id='size' value={size} onChange={onSizeChange} data-testid='Size'>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                    <option>XXXL</option>
                </Select>
            </Label>
            <Input id='quantity' placeholder='Quantity' type='number' value={quantity} onChange={onQuantityChange} />
            <Label mt={1}>
                Notes
                <TextArea id='notes' value={notes} onChange={onNotesChange} />
            </Label>
        </Form>
    );
}

ClothesDonationForm.displayName = 'ClothesDonationForm';

ClothesDonationForm.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    size: PropTypes.string,
    quantity: PropTypes.number,
    notes: PropTypes.string,
    onNameChange: PropTypes.func,
    onDescriptionChange: PropTypes.func,
    onSizeChange: PropTypes.func,
    onQuantityChange: PropTypes.func,
    onNotesChange: PropTypes.func,
};

ClothesDonationForm.defaultProps = {
    className: '',
    size: 'M'
};

export default memo(ClothesDonationForm);
