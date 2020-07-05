import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Skeleton from 'components/Skeleton';
import Card from 'components/Card';

const StyledCard = styled(Card)`
    justify-content: space-between;

    font-size: ${themeGet('fontSizes.1')}px;
    line-height: ${themeGet('lineHeights.standard')};
`;

function ItemCardSkeleton ({ className }) {
    return (
        <StyledCard className={className} row>
            <Skeleton width='200px' height='22px' />
            <Skeleton width='22px' height='22px' circle />
        </StyledCard>
    );
}

ItemCardSkeleton.displayName = 'ItemCardSkeleton';

ItemCardSkeleton.propTypes = {
    className: PropTypes.string,
};

ItemCardSkeleton.defaultProps = {
    className: '',
};

export default memo(ItemCardSkeleton);
