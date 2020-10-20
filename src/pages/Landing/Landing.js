import React from 'react';
import styled from 'styled-components';
import { Flex } from 'pcln-design-system';
import LinkButton from 'components/LinkButton';
import { DONATION_NEW_PATH, REQUISITION_NEW_PATH } from 'constants/paths';

const StyledFlex = styled(Flex)`
    & > :first-child {
        margin-bottom: 16px;
    }

    & button {
        height: 100px;
    }
`;

function Landing () {
    return (
        <StyledFlex
            flexDirection='column'
            color='primary.light'
            width={1}
            p={3}
        >
            <LinkButton
                title='New Donation'
                path={DONATION_NEW_PATH}
                size='large'
                width={1}
            />
            <LinkButton
                title='New Requisition'
                path={REQUISITION_NEW_PATH}
                size='large'
                width={1}
            />
        </StyledFlex>
    );
}

Landing.displayName = 'Landing';

export default Landing;
