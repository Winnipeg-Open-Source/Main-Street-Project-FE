import React, { memo } from 'react';
import styled from 'styled-components';
import LoadingSkeleton from 'react-loading-skeleton';

const StyledSkeleton = styled(LoadingSkeleton)`
    height: ${props => props.height};
`;

function Skeleton (props) {
    return (
        <StyledSkeleton {...props} />
    );
}

Skeleton.displayName = 'Skeleton';

export default memo(Skeleton);