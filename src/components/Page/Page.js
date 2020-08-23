import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Text } from 'pcln-design-system';

const StyledFlex = styled(Flex)`
`;

const StyledText = styled(Text)`
    height: 32px;
`;

function Page ({ className, title, renderAction, children }) {
    return (
        <StyledFlex className={className} flexDirection='column' width={1} p={3}>
            <Flex justifyContent='space-between' width={1} alignItems='center' mb={3}>
                <StyledText fontSize={3} bold>{title}</StyledText>
                {renderAction && renderAction()}
            </Flex>
            {children}
        </StyledFlex>
    );
}

Page.displayName = 'Page';

Page.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    renderAction: PropTypes.func,
    children: PropTypes.node,
};

Page.defaultProps = {
    className: '',
};

export default Page;
