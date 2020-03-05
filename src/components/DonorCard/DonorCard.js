import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, Text } from 'pcln-design-system';

const StyledCard = styled(Card)`
    border-radius: 4px;
`;

function DonorCard ({ className, name, lastDonationDate }) {
    return (
        <StyledCard className={className} color='background.lightest' width={1} p={2}>
            <Text color='text.darkest' fontSize={1} bold>{name}</Text>
            <Text color='text.light' fontSize={1}>Last Donation: {lastDonationDate || '-'}</Text>
        </StyledCard>
    );
}

DonorCard.displayName = 'DonorCard';

DonorCard.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    lastDonationDate: PropTypes.string,
};

DonorCard.defaultProps = {
    className: '',
};

export default memo(DonorCard);
