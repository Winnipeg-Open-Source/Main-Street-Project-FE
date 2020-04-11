import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Label, TextArea, getPaletteColor } from 'pcln-design-system';
import Form from 'components/Form';
import EmployeeSelect from 'components/EmployeeSelect';

const StyledTextArea = styled(TextArea)`
    background-color: ${getPaletteColor('background.lightest')};
`;

function RequisitionForm ({ className, onSaveClick }) {
    return (
        <Form className={className} onSaveClick={onSaveClick}>
            <EmployeeSelect />
            <Label fontSize={1} mt={2}>
                Description
                <StyledTextArea id='requisition-description' mt={1} />
            </Label>
            <Button variation='outline' width={1} my={2}>+ Add Items</Button>
        </Form>
    );
}

RequisitionForm.displayName = 'RequisitionForm';

RequisitionForm.propTypes = {
    className: PropTypes.string,
    onSaveClick: PropTypes.func,
};

RequisitionForm.defaultProps = {
    className: '',
};

export default memo(RequisitionForm);
