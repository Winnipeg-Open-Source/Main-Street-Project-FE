import React from 'react';
import { action } from '@storybook/addon-actions';
import LoginForm from './LoginForm';
import useForm from 'hooks/useForm';

export const Default = () => {
    const { email, password, onChange } = useForm();
    return (
        <LoginForm
            email={email}
            password={password}
            onChange={onChange}
            onLoginClick={(action('Login Clicked'))}
        />
    );
};

export const LoggingIn = () => (
    <LoginForm
        isLoggingIn
        email='email@email.com'
        password='abcdefgh'
    />
);

export const LoginError = () => (
    <LoginForm
        isLoginFailed
        email='email@email.com'
        password='abcdefgh'
    />
);

export default {
    title: 'Forms|LoginForm',
    component: LoginForm,
};
