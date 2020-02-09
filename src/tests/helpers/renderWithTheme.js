import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider from 'providers/ThemeProvider';

const renderWithTheme = (children) => render(<ThemeProvider>{children}</ThemeProvider>);

export default renderWithTheme;
