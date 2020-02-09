import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Text } from 'pcln-design-system';

const StyledForm = styled(Flex)`
    & > :not(:last-child) {
        margin-bottom: 8px;
    }
`;

function Form ({ className, title, children }) {
    return (
        <StyledForm className={className} flexDirection='column'>
            {title && <Text bold data-testid='title'>{title}</Text>}
            {children}
        </StyledForm>
    );
}

Form.displayName = 'Form';

Form.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node,
};

Form.defaultProps = {
    className: '',
};

export default Form;
