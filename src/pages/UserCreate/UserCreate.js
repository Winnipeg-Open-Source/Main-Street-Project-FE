import React, { useState } from 'react';
import Page from 'components/Page';
import { Button, Text } from 'pcln-design-system';
import Input from 'components/Input';
import useSaveResource from 'hooks/useSaveResource';
import { USERS_API_PATH } from 'constants/api';
import { USERS_PATH } from 'constants/paths';

function UserCreate () {
    const [ email, setEmail ] = useState('');
    const { response, handleSave } = useSaveResource(USERS_API_PATH, USERS_PATH);

    const isError = response && response.data && response.data.isError;
    const message = response && response.data;

    const onEmailChange = (evt) => setEmail(evt.target.value);
    const onSubmit = () => handleSave({ email });

    const helperTextColor = isError ? 'error' : 'text';
    const helperText = isError ? message : 'Email that invite link will be sent to.';

    return (
        <Page title='New User'>
            <Input id='email' placeholder='New User Email Address' value={email} onChange={onEmailChange} />
            <Text color={helperTextColor} fontSize={0} ml={1} my={2}>{helperText}</Text>
            <Button onClick={onSubmit}>Send Email</Button>
        </Page>
    );
}

UserCreate.displayName = 'UserCreate';

export default UserCreate;
