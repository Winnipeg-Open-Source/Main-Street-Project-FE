import React from 'react';
import { Flex } from 'pcln-design-system';
import LoginForm from 'containers/LoginForm';

function Login () {
    return (
        <Flex justifyContent='center' width={1} p={3}>
            <LoginForm />
        </Flex>
    );
}

Login.displayName = 'Login';

export default Login;
