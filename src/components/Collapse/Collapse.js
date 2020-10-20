import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Collapse as Collapsible } from 'react-collapse';
import { Divider, Flex, Text } from 'pcln-design-system';
import { ChevronDown, ChevronUp } from 'pcln-icons';
import Card from 'components/Card';
import useToggle from 'hooks/useToggle';

const StyledCard = styled(Card)`
    & > * {
        width: 100%;
    }
`;

const ClickableFlex = styled(Flex)`
    cursor: pointer;
`;

const StyledFlex = styled(Flex)`
    & > :not(:last-child) {
        margin-bottom: 8px;
    }
`;

function Collapse ({ className, title, children }) {
    const [isCollapsed, toggleCollapsed] = useToggle();

    const Chevron = isCollapsed ? ChevronUp : ChevronDown;

    return (
        <StyledCard className={className} isCollapsed={isCollapsed}>
            <ClickableFlex
                justifyContent='space-between'
                alignItems='center'
                onClick={toggleCollapsed}
            >
                <Text color='text.darkest' fontSize={1} bold>
                    {title}
                </Text>
                <Chevron color='text.darkest' />
            </ClickableFlex>
            <Collapsible isOpened={isCollapsed}>
                <StyledFlex flexDirection='column' width={1}>
                    <Divider />
                    {children}
                </StyledFlex>
            </Collapsible>
        </StyledCard>
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
