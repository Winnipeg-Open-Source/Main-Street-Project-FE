import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'pcln-design-system';

const Wrapper = styled(Flex)`
    & > :not(:last-child) {
        margin-right: 8px;
    }
`;

function ButtonGroup ({ className, children, ...props }) {
    return (
        <Wrapper className={className} {...props}>
            {children}
        </Wrapper>
    );
}

ButtonGroup.displayName = 'ButtonGroup';

ButtonGroup.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

ButtonGroup.defaultProps = {
    className: '',
};

export default memo(ButtonGroup);
