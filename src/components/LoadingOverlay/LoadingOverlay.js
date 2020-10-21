import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Text } from 'pcln-design-system';
import Spinner from 'components/Spinner';

const Overlay = styled(Flex)`
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.5);
`;

function LoadingOverlay ({ className, isLoading, children }) {
    return isLoading ? (
        <Overlay className={className}>
            <Text color='text.lightest' bold mb={2}>
                {children}
            </Text>
            <Spinner />
        </Overlay>
    ) : null;
}

LoadingOverlay.displayName = 'LoadingOverlay';

LoadingOverlay.propTypes = {
    className: PropTypes.string,
    isLoading: PropTypes.bool,
    children: PropTypes.node,
};

LoadingOverlay.defaultProps = {
    className: '',
};

export default memo(LoadingOverlay);
