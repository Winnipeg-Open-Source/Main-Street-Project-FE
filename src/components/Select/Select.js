import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Label, Select as PCLNSelect, getPaletteColor } from 'pcln-design-system';

const StyledSelect = styled(PCLNSelect)`
    background-color: ${getPaletteColor('background.lightest')};
`;

function Select ({ className, label, placeholder, children, ...props }) {
    return (
        <Label className='className'>
            {label}
            <StyledSelect {...props}>
                {placeholder && <option value='' disabled selected hidden>{placeholder}</option>}
                {children}
            </StyledSelect>
        </Label>
    );
}

Select.displayName = 'Select';

Select.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    children: PropTypes.node,
};

Select.defaultProps = {
    className: '',
};

export default memo(Select);
