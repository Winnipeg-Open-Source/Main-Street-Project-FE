import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { configureActions } from '@storybook/addon-actions';
import { Flex } from 'pcln-design-system';
import ThemeProvider from 'providers/ThemeProvider';

import 'styles/storybook.css';

addDecorator((story) => (
    <ThemeProvider>
        <Flex style={{ height: '100%' }} width={1} p={2}>
            {story()}
        </Flex>
    </ThemeProvider>
));

configureActions({
    depth: 100,
    limit: 20,
});

configure(require.context('../src', true, /\.story\.js$/), module);
