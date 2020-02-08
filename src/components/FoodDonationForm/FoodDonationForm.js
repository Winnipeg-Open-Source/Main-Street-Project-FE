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
    notes,
    onNameChange,
    onDescriptionChange,
    onQuantityChange,
    onRetailValueChange,
    onConditionChange,
    onNotesChange,
}) {
    return (
        <FormWrapper flexDirection='column'>
            <Input id='name' placeholder='Name' value={name} onChange={onNameChange} />
            <Input id='description' placeholder='Description' value={description} onChange={onDescriptionChange} />
            <Input id='quantity' placeholder='Quantity' type='number' value={quantity} onChange={onQuantityChange} />
            <Input id='retail-value' placeholder='Retail Value ($)' type='number' value={retailValue} onChange={onRetailValueChange} />
            <Label mt={1}>
                Condition
                <Select id='condition' value={condition} onChange={onConditionChange} data-testid='Condition'>
                    <option>Perfect</option>
                    <option>Great</option>
                    <option>Good</option>
                    <option>Average</option>
                    <option>Poor</option>
                </Select>
            </Label>
            <Label mt={1}>
                Notes
                <TextArea id='notes' value={notes} onChange={onNotesChange} />
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
    notes: PropTypes.string,
    onNameChange: PropTypes.func,
    onDescriptionChange: PropTypes.func,
    onQuantityChange: PropTypes.func,
    onRetailValueChange: PropTypes.func,
    onConditionChange: PropTypes.func,
    onNotesChange: PropTypes.func,
};

FoodDonationForm.defaultProps = {
    className: '',
};

export default memo(FoodDonationForm);
