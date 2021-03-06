import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Autocomplete } from 'pcln-autocomplete';
import { Text, getPaletteColor } from 'pcln-design-system';

const StyledInput = styled(Autocomplete.Input)`
    background-color: ${getPaletteColor('background.lightest')};
`;

function ItemAutocomplete ({
    className,
    isLoading,
    placeholder,
    items,
    onChange,
}) {
    const match = (item, value) =>
        item &&
        item.name &&
        item.name.toLowerCase().includes(value.toLowerCase());
    const handleChange = (item) => onChange(item);

    const loadingPlaceholder = isLoading ? 'Loading...' : placeholder;

    return (
        <Autocomplete
            className={className}
            style={{ width: '100%' }}
            itemToString={(item) => item && item.name}
            match={match}
            onChange={handleChange}
        >
            <StyledInput
                disabled={isLoading}
                placeholder={loadingPlaceholder}
                width={1}
            />
            <Autocomplete.Menu>
                {items &&
                    items.map((item) => (
                        <Autocomplete.Item key={item.id} item={item}>
                            <Text>{item.name}</Text>
                        </Autocomplete.Item>
                    ))}
            </Autocomplete.Menu>
        </Autocomplete>
    );
}

ItemAutocomplete.displayName = 'ItemAutocomplete';

ItemAutocomplete.propTypes = {
    className: PropTypes.string,
    isLoading: PropTypes.bool,
    placeholder: PropTypes.string,
    items: PropTypes.array,
    onChange: PropTypes.func,
};

ItemAutocomplete.defaultProps = {
    className: '',
    placeholder: 'Item Search',
};

export default memo(ItemAutocomplete);
