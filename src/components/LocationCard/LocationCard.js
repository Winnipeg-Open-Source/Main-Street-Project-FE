import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'pcln-design-system';
import Card from 'components/Card';

function LocationCard ({ className, type, name, description, address }) {
    return (
        <Card className={className}>
            <Text bold>{type}</Text>
            <Text>{name}</Text>
            <Text>{description}</Text>
            <Text>{address}</Text>
        </Card>
    );
}

LocationCard.displayName = 'LocationCard';

LocationCard.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    address: PropTypes.string,
};

LocationCard.defaultProps = {
    className: '',
};

export default memo(LocationCard);
