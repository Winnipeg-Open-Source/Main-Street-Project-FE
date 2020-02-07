import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { configureActions } from '@storybook/addon-actions';
import ThemeProvider from 'providers/ThemeProvider';

import 'styles/index.css';

addDecorator((story) => (
    <ThemeProvider>
        {story()}
    </ThemeProvider>
));

configureActions({
    depth: 100,
    limit: 20,
});

configure(require.context('../src', true, /\.story\.js$/), module);
