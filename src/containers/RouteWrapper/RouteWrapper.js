import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'pcln-design-system';
import SavingOverlay from 'containers/SavingOverlay';
import SwipeOverlay from 'containers/SwipeOverlay';
import Header from 'containers/Header';
import Sidebar from 'containers/Sidebar';
import Content from 'components/Content';

const StyledFlex = styled(Flex)`
    height: 100%;
    overflow-y: hidden;
`;

function RouteWrapper ({ children }) {
    return (
        <React.Fragment>
            <SavingOverlay />
            <Header />
            <StyledFlex>
                <Sidebar />
                <Content>
                    <SwipeOverlay />
                    {children}
                </Content>
            </StyledFlex>
        </React.Fragment>
    );
}

RouteWrapper.displayName = 'RouteWrapper';

RouteWrapper.propTypes = {
    children: PropTypes.node,
};

export default RouteWrapper;
