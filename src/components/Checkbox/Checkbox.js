import React, { memo } from 'react';
import styled from 'styled-components';
import { Checkbox as PCLNCheckbox, Label } from 'pcln-design-system';

const CenteredLabel = styled(Label)`
    display: flex;
    align-items: center;
    user-select: none;
`;

function Checkbox ({ className, label, ...props }) {
    return (
        <CenteredLabel fontSize={0} width='auto'>
            <PCLNCheckbox {...props} />
            {label}
        </CenteredLabel>
    );
}

Checkbox.displayName = 'Checkbox';

export default memo(Checkbox);
