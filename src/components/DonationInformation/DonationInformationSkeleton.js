import React from 'react';
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

function DonationInformationSkeleton ({ className }) {
    return (
        <StyledCard className={className}>
            <Skeleton width='60%' />
            <Skeleton width='40%' />
            <Skeleton width='40%' />
        </StyledCard>
    );
}

DonationInformationSkeleton.displayName = 'DonationInformationSkeleton';

DonationInformationSkeleton.propTypes = {
    className: PropTypes.string,
};

DonationInformationSkeleton.defaultProps = {
    className: '',
};

export default DonationInformationSkeleton;
