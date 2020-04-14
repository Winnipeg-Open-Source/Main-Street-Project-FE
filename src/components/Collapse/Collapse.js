import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Collapse as Collapsable } from 'react-collapse';
import { Divider, Flex, Text } from 'pcln-design-system';
import { ChevronDown } from 'pcln-icons';
import Card from 'components/Card';
import useToggle from 'hooks/useToggle';

function Collapse ({ className, title, children }) {
    const [ isCollapsed, toggleCollapsed ] = useToggle();

    return (
        <Card className={className} isCollapsed={isCollapsed} onClick={toggleCollapsed}>
            <Flex justifyContent='space-between' alignItems='center'>
                <Text bold>{title}</Text>
                <ChevronDown />
            </Flex>
            <Collapsable isOpened={isCollapsed}>
                <Divider />
                {children}
            </Collapsable>
        </Card>
    );
}

Collapse.displayName = 'Collapse';

Collapse.propTypes = {
    className: PropTypes.string,
};

Collapse.defaultProps = {
    className: '',
};

export default memo(Collapse);
