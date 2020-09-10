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

function DonorInformationSkeleton ({ className }) {
    return (
        <StyledCard className={className}>
            <Skeleton width='80%' />
            <Skeleton width='80%' />
            <Skeleton width='80%' />
            <Skeleton width='80%' />
        </StyledCard>
    );
}

DonorInformationSkeleton.displayName = 'DonorInformationSkeleton';

DonorInformationSkeleton.propTypes = {
    className: PropTypes.string,
};

DonorInformationSkeleton.defaultProps = {
    className: '',
};

export default memo(DonorInformationSkeleton);
