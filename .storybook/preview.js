import React from 'react';
import { addDecorator } from '@storybook/react';
import ThemeProvider from 'providers/ThemeProvider';
import 'styles/index.css';

function ThemeWrapper (story) {
    return (
        <ThemeProvider>
            {story()}
        </ThemeProvider>
    );
}

addDecorator(ThemeWrapper);
