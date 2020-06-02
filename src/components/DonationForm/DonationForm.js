import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Label, TextArea, getPaletteColor } from 'pcln-design-system';
import Form from 'components/Form';
import Input from 'components/Input';
import EmployeeSelect from 'components/EmployeeSelect';
import ItemAutocomplete from 'components/ItemAutocomplete';
import ItemList from 'components/ItemList';

const StyledTextArea = styled(TextArea)`
    background-color: ${getPaletteColor('background.lightest')};
    resize: vertical;
`;

function DonationForm ({
    className,
    donors,
    title,
    description,
    items,
    selectedItems,
    notes,
    onDonorChange,
    onTitleChange,
    onDescriptionChange,
    onSelectItemChange,
    onItemQuantityChange,
    onNotesChange,
    onSaveClick,
    onCancelClick,
}) {
    return (
        <Form className={className} onSaveClick={onSaveClick} onCancelClick={onCancelClick}>
            <EmployeeSelect employees={donors} onChange={onDonorChange} />
            <Input
                placeholder='Title'
                value={title}
                onChange={onTitleChange}
                mt={1}
            />
            <Label fontSize={1}>
                Description
                <StyledTextArea
                    id='donation-description'
                    value={description}
                    onChange={onDescriptionChange}
                    mb={2}
                />
            </Label>
            <ItemAutocomplete items={items} onChange={onSelectItemChange} />
            <ItemList items={selectedItems} onItemQuantityChange={onItemQuantityChange} />
            <Label fontSize={1} mt={1}>
                Additional Notes
                <StyledTextArea
                    id='donation-notes'
                    value={notes}
                    onChange={onNotesChange}
                />
            </Label>
        </Form>
    );
}

DonationForm.displayName = 'DonationForm';

DonationForm.propTypes = {
    className: PropTypes.string,
    donors: PropTypes.array,
    title: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.array,
    selectedItems: PropTypes.array,
    notes: PropTypes.string,
    onDonorChange: PropTypes.func,
    onTitleChange: PropTypes.func,
    onDescriptionChange: PropTypes.func,
    onSelectItemChange: PropTypes.func,
    onItemQuantityChange: PropTypes.func,
    onNotesChange: PropTypes.func,
    onSaveClick: PropTypes.func,
    onCancelClick: PropTypes.func,
};

DonationForm.defaultProps = {
    className: '',
};

export default memo(DonationForm);
