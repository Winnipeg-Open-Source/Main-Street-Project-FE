import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import ThemeProvider from 'providers/ThemeProvider';

function renderWithThemeAndRouter(children, { route = '/', history = createMemoryHistory({ initialEntries: [route] })} = {}) {
    const Wrapper = ({ children }) => (
        <Router history={history}>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </Router>
    );

    return {
        ...render(children, { wrapper: Wrapper }),
        history,
    };
}

export default renderWithThemeAndRouter;
