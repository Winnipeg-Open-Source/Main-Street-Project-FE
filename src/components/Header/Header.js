import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'pcln-design-system';
import { Menu } from 'pcln-icons';

const StyledHeader = styled(Flex)`
    position: sticky;
    overflow-y: hidden;
    top: 0;
    align-items: center;
    user-select: none;
    font-weight: bold;
    box-shadow: 1px 2px 4px 0 rgba(0,0,0,0.08);
`;

const StyledMenu = styled(Menu)`
    cursor: pointer;
`;

function Header ({ className, onMenuClick }) {
    return (
        <StyledHeader className={className} color='primary' p={3}>
            <StyledMenu title='Menu' mr={3} onClick={onMenuClick} data-testid='menu-icon' />
            Main Street Project Inventory System
        </StyledHeader>
    );
}

Header.displayName = 'Header';

Header.propTypes = {
    className: PropTypes.string,
    onMenuClick: PropTypes.func,
};

Header.defaultProps = {
    className: '',
};

export default memo(Header);
