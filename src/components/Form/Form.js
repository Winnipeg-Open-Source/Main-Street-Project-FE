import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Flex, Text } from 'pcln-design-system';
import ButtonGroup from 'components/ButtonGroup';

const StyledForm = styled(Flex)`
    height: 100%;
`;

const Content = styled(Flex)`
    flex: 1;
    height: 100%;
    
    & > :not(:last-child) {
        margin-bottom: 8px;
    }
`;

function Form ({ className, title, children, onSaveClick, onCancelClick }) {
    return (
        <StyledForm className={className} flexDirection='column'>
            {title && <Text bold>{title}</Text>}
            <Content flexDirection='column' alignItems='flex-start' my={title ? 2 : 0}>
                {children}
            </Content>
            <ButtonGroup>
                {onCancelClick && <Button color='tertiary' variation='outline' width={1} onClick={onCancelClick}>Cancel</Button>}
                {onSaveClick && <Button width={1} onClick={onSaveClick}>Save</Button>}
            </ButtonGroup>
        </StyledForm>
    );
}

Form.displayName = 'Form';

Form.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node,
    onSaveClick: PropTypes.func,
    onCancelClick: PropTypes.func,
};

Form.defaultProps = {
    className: '',
};

export default Form;
