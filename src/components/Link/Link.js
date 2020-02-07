import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { getPaletteColor, mediaQueries } from 'pcln-design-system';

const StyledLink = styled(RouterLink)`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    color: ${props => props.isActive ? getPaletteColor('text.darkest') : getPaletteColor('text.light')};
    
    & > :first-child {
        margin-right: 16px;
    }
    
    &:hover {
        color: ${getPaletteColor('text.darkest')};
    }
    
    ${mediaQueries.sm} {
        color: ${props => props.isActive ? getPaletteColor('text.darkest') : getPaletteColor('text.lightest')};
    }
`;

function Link ({ className, isActive, to, icon, children, onClick }) {
    return (
        <StyledLink className={className} isActive={isActive} to={to} onClick={onClick}>
            {icon}
            {children}
        </StyledLink>
    );
}

Link.displayName = 'Link';

Link.propTypes = {
    className: PropTypes.string,
    isActive: PropTypes.bool,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node,
    children: PropTypes.node,
    onClick: PropTypes.func,
};

Link.defaultProps = {
    className: '',
};

export default memo(Link);

