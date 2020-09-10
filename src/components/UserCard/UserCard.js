import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from 'pcln-design-system';
import Card from 'components/Card';
import Checkbox from 'components/Checkbox';

const StyledCard = styled(Card)`
    justify-content: space-between;
`;

function UserCard ({ className, uid, isAdmin, email, onAdminChange }) {
    const onChange = () => onAdminChange(uid, !isAdmin);

    return (
        <StyledCard className={className} row>
            <Text color='text.darkest' fontSize={1} bold>{email}</Text>
            <Checkbox label='Admin' checked={isAdmin} onChange={onChange} />
        </StyledCard>
    );
}

UserCard.displayName = 'UserCard';

UserCard.propTypes = {
    className: PropTypes.string,
    isAdmin: PropTypes.bool,
    email: PropTypes.string,
    onAdminChange: PropTypes.func,
};

export default memo(UserCard);
