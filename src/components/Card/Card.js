import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card as PCLNCard } from 'pcln-design-system';

const StyledCard = styled(PCLNCard)`
    display: flex;
    flex-direction: ${props => props.row ? 'row' : 'column'};
`;

function Card ({ className, row, children, onClick }) {
    return (
        <StyledCard
            className={className}
            row={row}
            width={1}
            p={2}
            color='background.lightest'
            onClick={onClick}
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
