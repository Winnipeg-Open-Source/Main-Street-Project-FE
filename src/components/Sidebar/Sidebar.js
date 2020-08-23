import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'pcln-design-system';
import Modal from 'components/Modal';
import Link from 'components/Link';

const COLLAPSED_WIDTH = 56;
const EXPANDED_WIDTH = 200;

const LinksWrapper = styled(Flex)`
    & > * {
        padding: 8px 0;
    }
`;

function Sidebar ({ className, isMobileSidebar, isCollapsed, currentPathname, routes, onClose }) {
    const Wrapper = isMobileSidebar ? Modal : React.Fragment;

    const width = isCollapsed && !isMobileSidebar ? COLLAPSED_WIDTH : EXPANDED_WIDTH;
    const backgroundColor = isMobileSidebar ? 'inherit' : 'tertiary';
    const padding = isMobileSidebar ? 0 : 3;

    const modalProps = isMobileSidebar ? {
        className: className,
        isMobile: isMobileSidebar,
        isOpen: !isCollapsed,
        title: 'Navigation',
        onClose,
    } : {};

    return (
        <Wrapper {...modalProps}>
            <LinksWrapper className={className} flexDirection='column' width={width} color={backgroundColor} p={padding}>
                {routes && routes.map(route => (
                    <Link
                        key={route.path}
                        isActive={currentPathname === route.path}
                        to={route.path}
                        icon={route.icon}
                        onClick={isMobileSidebar ? onClose : null}
                    >
                        {route.label}
                    </Link>
                ))}
            </LinksWrapper>
        </Wrapper>
    );
}

Sidebar.displayName = 'Sidebar';

Sidebar.propTypes = {
    className: PropTypes.string,
    isMobileSidebar: PropTypes.bool,
    isCollapsed: PropTypes.bool,
    currentPathname: PropTypes.string,
    routes: PropTypes.array,
    onClose: PropTypes.func,
};

Sidebar.defaultProps = {
    className: '',
};

export default memo(Sidebar);
