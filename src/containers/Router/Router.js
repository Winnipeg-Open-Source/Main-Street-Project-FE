import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Providers from 'providers/Providers';
import RouteWrapper from 'containers/RouteWrapper';
import Routes from 'containers/Routes';

function Router () {
    return (
        <BrowserRouter>
            <Providers>
                <RouteWrapper>
                    <Routes />
                </RouteWrapper>
            </Providers>
        </BrowserRouter>
    );
}

Router.displayName = 'Router';

export default Router;
