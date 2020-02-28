import React from 'react';
import PropTypes from 'prop-types';
import { Button, Flex, Text } from 'pcln-design-system';

function Page ({ className, title, actionText, children, onActionClick }) {
    return (
        <Flex className={className} flexDirection='column' width={1} p={3}>
            {title && (
                <Flex justifyContent='space-between' mb={2}>
                    <Text fontSize={3} bold>{title}</Text>
                    {actionText && <Button size='small' onClick={onActionClick}>{actionText}</Button>}
                </Flex>
            )}
            {children}
        </Flex>
    );
}

Page.displayName = 'Page';

Page.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    actionText: PropTypes.string,
    children: PropTypes.node,
    onActionClick: PropTypes.func,
};

Page.defaultProps = {
    className: '',
};

export default Page;
