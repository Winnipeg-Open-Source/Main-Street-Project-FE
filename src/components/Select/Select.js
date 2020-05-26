import React, { memo } from 'react';
import styled from 'styled-components';
import { Select as PCLNSelect, getPaletteColor } from 'pcln-design-system';

const StyledSelect = styled(PCLNSelect)`
    background-color: ${getPaletteColor('background.lightest')};
`;

function Select ({ placeholder, children, ...props }) {
    return (
        <StyledSelect {...props}>
            {placeholder && <option value='' disabled selected hidden>{placeholder}</option>}
            {children}
        </StyledSelect>
    );
}

Select.displayName = 'Select';

export default memo(Select);
