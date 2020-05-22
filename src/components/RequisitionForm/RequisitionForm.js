import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Label, TextArea, getPaletteColor } from 'pcln-design-system';
import Form from 'components/Form';
import EmployeeSelect from 'components/EmployeeSelect';
import ItemAutocomplete from 'components/ItemAutocomplete';
import ItemList from 'components/ItemList';

const StyledTextArea = styled(TextArea)`
    background-color: ${getPaletteColor('background.lightest')};
    resize: vertical;
`;

function RequisitionForm ({
    className,
    employees,
    employee,
    description,
    items,
    selectedItems,
    onEmployeeChange,
    onDescriptionChange,
    onSelectItemChange,
    onSaveClick,
    onCancelClick
}) {
    return (
        <Form className={className} onSaveClick={onSaveClick} onCancelClick={onCancelClick}>
            <EmployeeSelect employees={employees} value={employee} onChange={onEmployeeChange} />
            <Label fontSize={1} mt={2}>
                Description
                <StyledTextArea
                    id='requisition-description'
                    value={description}
                    onChange={onDescriptionChange}
                    mt={1}
                    mb={2}
                />
            </Label>
            <ItemAutocomplete items={items} onChange={onSelectItemChange} />
            <ItemList items={selectedItems} />
        </Form>
    );
}

RequisitionForm.displayName = 'RequisitionForm';

RequisitionForm.propTypes = {
    className: PropTypes.string,
    employees: PropTypes.array,
    employee: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.array,
    selectedItems: PropTypes.array,
    onSelectItemChange: PropTypes.func,
    onSaveClick: PropTypes.func,
    onCancelClick: PropTypes.func,
};

RequisitionForm.defaultProps = {
    className: '',
};

export default memo(RequisitionForm);
