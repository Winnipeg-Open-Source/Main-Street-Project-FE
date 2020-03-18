import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import Card from 'components/Card';

const StyledCard = styled(Card)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

function DonationCardSkeleton ({ className }) {
    return (
        <StyledCard className={className} row>
            <Skeleton width='150px' height={29} />
            <Skeleton width='100px' height={29} />
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
