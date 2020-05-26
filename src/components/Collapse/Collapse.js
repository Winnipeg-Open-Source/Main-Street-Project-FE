import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Collapse as Collapsable } from 'react-collapse';
import { Divider, Flex, Text } from 'pcln-design-system';
import { ChevronDown } from 'pcln-icons';
import Card from 'components/Card';
import useToggle from 'hooks/useToggle';

const ClickableFlex = styled(Flex)`
    cursor: pointer;
`;

const StyledFlex = styled(Flex)`
    & > :not(:last-child) {
        margin-bottom: 8px;
    }
`;

function Collapse ({ className, title, children }) {
    const [ isCollapsed, toggleCollapsed ] = useToggle();

    return (
        <Card className={className} isCollapsed={isCollapsed}>
            <ClickableFlex justifyContent='space-between' alignItems='center' onClick={toggleCollapsed}>
                <Text bold>{title}</Text>
                <ChevronDown />
            </ClickableFlex>
            <Collapsable isOpened={isCollapsed}>
                <StyledFlex flexDirection='column'>
                    <Divider />
                    {children}
                </StyledFlex>
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
