import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Skeleton from 'components/Skeleton';
import Card from 'components/Card';

const StyledCard = styled(Card)`
    line-height: ${themeGet('lineHeights.standard')};
`;

function RequisitionCardSkeleton ({ className }) {
    return (
        <StyledCard className={className}>
            <Skeleton width='25%' />
        </StyledCard>
    );
}

RequisitionCardSkeleton.displayName = 'RequisitionCardSkeleton';

RequisitionCardSkeleton.propTypes = {
    className: PropTypes.string,
};

RequisitionCardSkeleton.defaultProps = {
    className: '',
};

export default memo(RequisitionCardSkeleton);
