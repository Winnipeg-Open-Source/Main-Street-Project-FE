import React from 'react';
import Page from 'components/Page';
import { Button, Text } from 'pcln-design-system';
import Input from 'components/Input';

function UserCreate () {
    return (
        <Page title='New User'>
            <Input id='email' placeholder='New User Email Address' />
            <Text fontSize={0} ml={1} my={2}>Email to send an invite to</Text>
            <Button>Send Email</Button>
        </Page>
    );
}

UserCreate.displayName = 'UserCreate';

export default UserCreate;
