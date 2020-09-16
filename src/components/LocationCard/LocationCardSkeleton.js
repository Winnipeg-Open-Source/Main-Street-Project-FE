import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Card from 'components/Card';
import Skeleton from 'components/Skeleton';

const StyledCard = styled(Card)`
    font-size: ${themeGet('fontSizes.1')}px;
    line-height: ${themeGet('lineHeights.standard')};

    & > span {
        width: 100%;
    }
`;

function LocationCardSkeleton ({ className }) {
    return (
        <StyledCard className={className}>
            <Skeleton width='30%' />
            <Skeleton width='75%' />
            <Skeleton width='75%' />
            <Skeleton width='75%' />
        </StyledCard>
    );
}

LocationCardSkeleton.displayName = 'LocationCardSkeleton';

LocationCardSkeleton.propTypes = {
    className: PropTypes.string,
};

LocationCardSkeleton.defaultProps = {
    className: '',
};

export default memo(LocationCardSkeleton);
