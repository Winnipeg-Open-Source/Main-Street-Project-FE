import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Text } from 'pcln-design-system';

const Overlay = styled(Flex)`
    position: fixed;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
    background-color: rgba(0,0,0,0.5);
`;

function SavingOverlay ({ className, isSaving }) {
    return isSaving
        ? (
            <Overlay className={className}>
                <Text bold>
                    Saving...
                </Text>
            </Overlay>
        )
        : null;
}

SavingOverlay.displayName = 'SavingOverlay';

SavingOverlay.propTypes = {
    className: PropTypes.string,
    isSaving: PropTypes.bool,
};

SavingOverlay.defaultProps = {
    className: '',
};

export default memo(SavingOverlay);
