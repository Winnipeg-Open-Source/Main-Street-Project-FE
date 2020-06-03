import React from 'react';
import { Button, Flex } from 'pcln-design-system';
import Link from 'components/Link';
import { DONATION_NEW_PATH, REQUISITION_NEW_PATH } from 'constants/paths';

function Landing () {
    return (
        <Flex flexDirection='column' color='primary.light' width={1} p={3}>
            <Link to={DONATION_NEW_PATH}>
                <Button size='large' width={1} p={4} mb={3}>
                    New Donation
                </Button>
            </Link>
            <Link to={REQUISITION_NEW_PATH}>
                <Button size='large' width={1} p={4}>
                    New Requisition
                </Button>
            </Link>
        </Flex>
    );
}

Landing.displayName = 'Landing';

export default Landing;
