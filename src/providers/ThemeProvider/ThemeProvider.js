import React from 'react';
import styled from 'styled-components';
import { ThemeProvider as PCLNThemeProvider } from 'pcln-design-system';
import theme from 'constants/theme.json';

const StyledThemeProvider = styled(PCLNThemeProvider)`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

function ThemeProvider ({ children }) {
    return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}

ThemeProvider.displayName = 'ThemeProvider';

export default ThemeProvider;
