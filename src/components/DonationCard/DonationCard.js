import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Card, Text } from 'pcln-design-system';
import Link from 'components/Link';
import { getDonationPath } from 'constants/paths';

const StyledCard = styled(Card)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

function DonationCard ({ id, className, donationDate }) {
    const donationPath = getDonationPath(id);

    return (
        <StyledCard className={className} color='background.lightest' width={1} p={2}>
            <Text color='text.darkest' bold>{donationDate || 'Unknown Donation Date'}</Text>
            <Link to={donationPath}>
                <Button variation='outline' size='small'>View</Button>
            </Link>
        </StyledCard>
    );
}

DonationCard.displayName = 'DonationCard';

DonationCard.propTypes = {
    id: PropTypes.number,
    className: PropTypes.string,
    donationDate: PropTypes.string,
}

DonationCard.defaultProps = {
    className: '',
};

export default memo(DonationCard);
