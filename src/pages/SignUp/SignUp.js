import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Label, Flex, Text } from 'pcln-design-system';
import Input from 'components/Input';
import LoadingOverlay from 'components/LoadingOverlay';
import useForm from 'hooks/useForm';
import useSignUp from 'hooks/useSignUp';

const StyledFlex = styled(Flex)`
    max-width: 500px;
`;

function SignUp () {
    const [ isLoading, setLoading ] = useState(false);
    const { state, onChange } = useForm();
    const { handleSignUp } = useSignUp();

    const onSignUpClick = () => {
        setLoading(true);
        handleSignUp(state.email, state.password);
    };

    return (
        <Flex justifyContent='center' width={1} p={3}>
            <LoadingOverlay isLoading={isLoading}>Signing up...</LoadingOverlay>
            <StyledFlex flexDirection='column' width={1}>
                <Label fontSize={3} bold>Complete Sign Up</Label>
                <Input placeholder='Email' name='email' value={state.email} onChange={onChange} mt={2} />
                <Input placeholder='Password' name='password' value={state.password} onChange={onChange} my={2} />
                <Text fontSize={0} ml={1}>Must match the email that the sign up link was sent to.</Text>
                <Button width={1} onClick={onSignUpClick} mt={2}>Sign up</Button>
            </StyledFlex>
        </Flex>
    );
}

SignUp.displayName = 'SignUp';

export default SignUp;
