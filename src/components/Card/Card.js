import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card as PCLNCard } from 'pcln-design-system';

const StyledCard = styled(PCLNCard)`
    display: flex;
    flex-direction: ${(props) => (props.row ? 'row' : 'column')};
    align-items: ${(props) => (props.row ? 'center' : 'flex-start')};
    height: auto;
    cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
`;

function Card ({ className, row, children, onClick, ...props }) {
    return (
        <StyledCard
            className={className}
            row={row}
            width={1}
            p={2}
            color='background.lightest'
            onClick={onClick}
            {...props}
        >
            {children}
        </StyledCard>
    );
}

Card.displayName = 'Card';

Card.propTypes = {
    className: PropTypes.string,
    row: PropTypes.bool,
    children: PropTypes.node,
    onClick: PropTypes.func,
};

Card.defaultProps = {
    className: '',
};

export default Card;
