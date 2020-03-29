import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'pcln-design-system';
import SavingOverlay from 'containers/SavingOverlay';
import Header from 'containers/Header';
import Sidebar from 'containers/Sidebar';
import Content from 'components/Content';

function RouteWrapper ({ children }) {
    return (
        <React.Fragment>
            <SavingOverlay />
            <Header />
            <Flex style={{ height: '100%' }}>
                <Sidebar />
                <Content>
                    {children}
                </Content>
            </Flex>
        </React.Fragment>
    );
}

RouteWrapper.displayName = 'RouteWrapper';

RouteWrapper.propTypes = {
    children: PropTypes.node,
};

export default RouteWrapper;
