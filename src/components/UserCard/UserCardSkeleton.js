import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import { Flex } from 'pcln-design-system';
import Skeleton from 'components/Skeleton';
import Card from 'components/Card';

const StyledCard = styled(Card)`
    justify-content: space-between;
    font-size: ${themeGet('fontSizes.1')}px;
    line-height: ${themeGet('lineHeights.standard')};
`;

const StyledFlex = styled(Flex)`
    & > :first-child {
        margin-right: ${themeGet('space.2')}px;
    }
`;

function UserCardSkeleton ({ className }) {
    return (
        <StyledCard className={className} row>
            <Skeleton width='200px' height={26} />
            <StyledFlex>
                <Skeleton width='20px' height={20} />
                <Skeleton width='50px' height={20} />
            </StyledFlex>
        </StyledCard>
    );
}

UserCardSkeleton.displayName = 'UserCardSkeleton';

UserCardSkeleton.propTypes = {
    className: PropTypes.string,
};

UserCardSkeleton.defaultProps = {
    className: '',
};

export default memo(UserCardSkeleton);

