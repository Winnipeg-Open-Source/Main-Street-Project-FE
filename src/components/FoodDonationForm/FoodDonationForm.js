import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Input, Label, Select, TextArea } from 'pcln-design-system';

const FormWrapper = styled(Flex)`
    & > :not(:last-child) {
        margin-bottom: 8px;
    }
`;

function FoodDonationForm ({
    className,
    name,
    description,
    quantity,
    retailValue,
    condition,
    locations,
    notes,
    onNameChange,
    onDescriptionChange,
    onQuantityChange,
    onRetailValueChange,
    onConditionChange,
    onLocationsChange,
    onNotesChange,
}) {
    return (
        <FormWrapper flexDirection='column'>
            <Input placeholder='Name' value={name} onChange={onNameChange} />
            <Input placeholder='Description' value={description} onChange={onDescriptionChange} />
            <Input placeholder='Quantity' type='number' value={quantity} onChange={onQuantityChange} />
            <Input placeholder='Retail Value ($)' type='number' value={quantity} onChange={onRetailValueChange} />
            <Select value={condition} onChange={onConditionChange}>
                <option disabled selected hidden>Condition</option>
                <option>Perfect</option>
                <option>Great</option>
                <option>Good</option>
                <option>Average</option>
                <option>Poor</option>
            </Select>
            <Label mt={2}>
                Notes
                <TextArea value={notes} onChange={onNotesChange} />
            </Label>
        </FormWrapper>
    );
}

FoodDonationForm.displayName = 'FoodDonationForm';

FoodDonationForm.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    quantity: PropTypes.number,
    retailValue: PropTypes.number,
    condition: PropTypes.string,
    locations: PropTypes.shape,
    notes: PropTypes.string,
    onNameChange: PropTypes.func,
    onDescriptionChange: PropTypes.func,
    onQuantityChange: PropTypes.func,
    onRetailValueChange: PropTypes.func,
    onConditionChange: PropTypes.func,
    onLocationsChange: PropTypes.func,
    onNotesChange: PropTypes.func,
};

FoodDonationForm.defaultProps = {
    className: '',
};

export default memo(FoodDonationForm);
