import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Flex, Label, Text } from 'pcln-design-system';
import Input from 'components/Input';
import LoadingOverlay from 'components/LoadingOverlay';

const StyledFlex = styled(Flex)`
    max-width: 500px;
`;

function LoginForm ({
    className,
    isLoggingIn,
    isLoginFailed,
    email,
    password,
    onChange,
    onLoginClick,
}) {
    return (
        <>
            <LoadingOverlay isLoading={isLoggingIn}>
                Logging In...
            </LoadingOverlay>
            <StyledFlex className={className} flexDirection='column' width={1}>
                <Label fontSize={3} bold mb={2}>
                    Login
                </Label>
                <Input
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={onChange}
                />
                <Input
                    placeholder='Password'
                    name='password'
                    type='password'
                    value={password}
                    onChange={onChange}
                    my={2}
                />
                {isLoginFailed && (
                    <Text fontSize={0} color='error' mb={2} ml={1}>
                        Email or password is incorrect.
                    </Text>
                )}
                <Button onClick={onLoginClick}>Login In</Button>
            </StyledFlex>
        </>
    );
}

LoginForm.displayName = 'LoginForm';

LoginForm.propTypes = {
    className: PropTypes.string,
    isLoggingIn: PropTypes.bool,
    isLoginFailed: PropTypes.bool,
    email: PropTypes.string,
    password: PropTypes.string,
    onChange: PropTypes.func,
    onLoginClick: PropTypes.func,
};

LoginForm.defaultProps = {
    className: '',
};

export default memo(LoginForm);
