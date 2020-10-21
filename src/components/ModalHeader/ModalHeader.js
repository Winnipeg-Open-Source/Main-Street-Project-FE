import React from 'react';
import PropTypes from 'prop-types';
import { CloseButton, Flex, Text } from 'pcln-design-system';

function ModalHeader ({ className, title, subtitle, onClose }) {
    return (
        <Flex
            className={className}
            flexDirection='column'
            color='primary.base'
            height='auto'
            p={3}
        >
            <Flex justifyContent='space-between'>
                <Text bold>{title}</Text>
                {onClose && (
                    <CloseButton onClick={onClose} data-testid='close-icon' />
                )}
            </Flex>
            <Text fontSize={1}>{subtitle}</Text>
        </Flex>
    );
}

ModalHeader.displayName = 'ModalHeader';

ModalHeader.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    onClose: PropTypes.func,
};

ModalHeader.defaultProps = {
    className: '',
};

export default ModalHeader;
