import React from 'react';
import LoginFormComponent from 'components/LoginForm';
import useForm from 'hooks/useForm';

const initialState = {
    email: '',
    password: '',
};

function LoginForm ({ isLoggingIn, isLoginFailed, handleLogin }) {
    const { state, onChange } = useForm(initialState);
    const { email, password } = state;

    const onLoginClick = () => {
        handleLogin(email, password);
    };

    return (
        <LoginFormComponent
            isLoggingIn={isLoggingIn}
            isLoginFailed={isLoginFailed}
            username={email}
            password={password}
            onChange={onChange}
            onLoginClick={onLoginClick}
        />
    );
}

LoginForm.displayName = 'LoginForm';

export default LoginForm;
