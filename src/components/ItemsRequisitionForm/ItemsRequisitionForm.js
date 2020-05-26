import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Stamp, Text, getPaletteColor } from 'pcln-design-system';
import Card from 'components/Card';
import Form from 'components/Form';
import Input from 'components/Input';
import ItemAutocomplete from 'components/ItemAutocomplete';

const StyledFlex = styled(Flex)`
    & > :not(:last-child) {
        margin-right: 8px;
    }
`;

const StyledStamp = styled(Stamp)`
    background-color: ${getPaletteColor('background.lightest')};
    padding: 8px 16px;
    cursor: pointer;
`;

function ItemsRequisitionForm ({ className, items, onSaveClick }) {
    const [ selectedItems, setSelectedItems ] = useState([items[0]]);
    const onAutocompleteClick = (item) => setSelectedItems([...selectedItems, item ]);

    return (
        <Form className={className} width={1} onSaveClick={() => {}}>
            <ItemAutocomplete items={items} onChange={onAutocompleteClick} />
            <StyledFlex justifyContent='space-between' width={1} mb={2}>
                <StyledStamp color='primary'>Food</StyledStamp>
                <StyledStamp color='primary'>Clothing</StyledStamp>
                <StyledStamp color='primary'>Household</StyledStamp>
                <StyledStamp color='primary'>Misc.</StyledStamp>
            </StyledFlex>
            {selectedItems && selectedItems.map(item => (
                <Card key={item.id}>
                    <Flex justifyContent='space-between' alignItems='center'>
                        <Text bold ml={1}>{item.name}</Text>
                        <Input placeholder='Quantity' width='150px' />
                    </Flex>
                </Card>
            ))}
        </Form>
    );
}

ItemsRequisitionForm.displayName = 'ItemsRequisitionForm';

ItemsRequisitionForm.propTypes = {
    className: PropTypes.string,
};

ItemsRequisitionForm.defaultProps = {
    className: '',
};

export default memo(ItemsRequisitionForm);
