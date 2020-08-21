import React from 'react';
import LoginFormComponent from 'components/LoginForm';
import useAuthentication from 'hooks/context/useAuthentication';
import useForm from 'hooks/useForm';
import useLogin from 'hooks/useLogin';

const initialState = {
    email: '',
    password: '',
};

function LoginForm () {
    const { isLoggingIn, isLoginFailed } = useAuthentication();
    const { state, onChange } = useForm(initialState);
    const { handleLogin } = useLogin();

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
