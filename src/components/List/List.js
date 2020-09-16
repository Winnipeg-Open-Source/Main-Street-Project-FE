import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'pcln-design-system';

const StyledList = styled(Flex)`
    & > :not(:last-child) {
        margin-bottom: 8px;
    }
`;

function List ({ className, children }) {
    return (
        <StyledList className={className} flexDirection='column' width={1}>
            {children}
        </StyledList>
    );
}

List.displayName = 'List';

List.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

List.defaultProps = {
    className: '',
};

export default List;
