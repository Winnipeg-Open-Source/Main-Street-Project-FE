import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Skeleton from 'react-loading-skeleton';
import Card from 'components/Card';

const StyledCard = styled(Card)`
    font-size: ${themeGet('fontSizes.1')}px;
    line-height: 1.4;
`;

function DonationCardSkeleton ({ className }) {
    return (
        <StyledCard className={className}>
            <Skeleton width='25%' />
            <Skeleton width='50%' />
        </StyledCard>
    );
}

DonationCardSkeleton.displayName = 'DonationCardSkeleton';

DonationCardSkeleton.propTypes = {
    className: PropTypes.string,
};

DonationCardSkeleton.defaultProps = {
    className: '',
};

export default memo(DonationCardSkeleton);
