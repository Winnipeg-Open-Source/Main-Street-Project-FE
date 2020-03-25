import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Text } from 'pcln-design-system';

function Page ({ className, title, renderAction, children }) {
    return (
        <Flex className={className} flexDirection='column' width={1} p={3}>
            <Flex justifyContent='space-between' width={1} alignItems='center' mb={3}>
                <Text fontSize={3} bold>{title}</Text>
                {renderAction && renderAction()}
            </Flex>
            {children}
        </Flex>
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
