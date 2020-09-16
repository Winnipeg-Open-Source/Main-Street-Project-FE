import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'pcln-design-system';
import Card from 'components/Card';

function LocationCard ({ className, type, name, description, address }) {
    return (
        <Card className={className}>
            <Text color='text.darkest' fontSize={1} bold>{type}</Text>
            <Text color='text.light' fontSize={1}>{name}</Text>
            <Text color='text.light' fontSize={1}>{description}</Text>
            <Text color='text.light' fontSize={1}>{address}</Text>
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
