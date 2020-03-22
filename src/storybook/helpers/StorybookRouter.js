import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'

function StorybookRouter ({ route = '/', currentRoute = '/', children }) {
    const history = createMemoryHistory({ initialEntries: [currentRoute] });

    return (
        <Router history={history}>
            <Switch>
                <Route exact path={route} component={() => children} />
            </Switch>
        </Router>
    );
}

export default StorybookRouter;
