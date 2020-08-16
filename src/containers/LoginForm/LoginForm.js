import React, { useState } from 'react';
import LoginFormComponent from 'components/LoginForm';
import useForm from 'hooks/useForm';
import useLogin from 'hooks/useLogin';

const initialState = {
    email: '',
    password: '',
};

function LoginForm () {
    const [ isLoggingIn, setLoggingIn ] = useState(false);
    const { email, password, onChange } = useForm(initialState);
    const { handleLogin } = useLogin();

    const onLoginClick = () => {
        setLoggingIn(true);
        handleLogin(email, password);
    };

    return (
        <LoginFormComponent
            isLoggingIn={isLoggingIn}
            username={email}
            password={password}
            onChange={onChange}
            onLoginClick={onLoginClick}
        />
    );
}

LoginForm.displayName = 'LoginForm';

export default LoginForm;
