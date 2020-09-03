import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Skeleton from 'components/Skeleton';
import Card from 'components/Card';

const StyledCard = styled(Card)`
    font-size: ${themeGet('fontSizes.1')}px;
    line-height: ${themeGet('lineHeights.standard')};

    & > span {
        width: 100%;
    }
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
