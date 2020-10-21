import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LoadingSkeleton from 'react-loading-skeleton';

const StyledSkeleton = styled(LoadingSkeleton)`
    height: ${(props) => props.height};
`;

function Skeleton (props) {
    return <StyledSkeleton {...props} />;
}

Skeleton.displayName = 'Skeleton';

Skeleton.propTypes = {
    className: PropTypes.string,
    height: PropTypes.number,
};

Skeleton.defaultProps = {
    height: 14,
};

export default memo(Skeleton);
