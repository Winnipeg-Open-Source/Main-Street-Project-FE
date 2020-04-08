import React, { memo } from 'react';
import styled from 'styled-components';
import { Input as PCLNInput, getPaletteColor } from 'pcln-design-system';

const StyledInput = styled(PCLNInput)`
    background-color: ${getPaletteColor('background.lightest')};
`;

function Input (props) {
    return (
        <StyledInput {...props} />
    );
}

Input.displayName = 'Input';

export default memo(Input);
