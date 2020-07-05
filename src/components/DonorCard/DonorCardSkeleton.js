import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Card from 'components/Card';
import Skeleton from 'components/Skeleton';

const StyledCard = styled(Card)`
    font-size: ${themeGet('fontSizes.1')}px;
    line-height: 1.4;
`;

function DonorCardSkeleton ({ className }) {
    return (
        <StyledCard className={className}>
            <Skeleton width='25%' />
            <Skeleton width='50%' />
        </StyledCard>
    );
}

DonorCardSkeleton.displayName = 'DonorCardSkeleton';

DonorCardSkeleton.propTypes = {
    className: PropTypes.string,
};

DonorCardSkeleton.defaultProps = {
    className: '',
};

export default memo(DonorCardSkeleton);
