import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'pcln-design-system';

const StyledContent = styled(Flex)`
    flex: 1;
    height: 100%;
`;

function Content ({ className, children }) {
    return (
        <StyledContent className={className} color='background.light' p={3}>
            {children}
        </StyledContent>
    );
}

Content.displayName = 'Content';

Content.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

Content.defaultProps = {
    className: '',
};

export default Content;
