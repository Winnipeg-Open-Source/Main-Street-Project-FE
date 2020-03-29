import React from 'react';
import styled from 'styled-components';
import { ThemeProvider as PCLNThemeProvider } from 'pcln-design-system';
import theme from 'constants/theme';

const StyledThemeProvider = styled(PCLNThemeProvider)`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

function ThemeProvider ({ children }) {
    return (
        <StyledThemeProvider theme={theme}>
            {children}
        </StyledThemeProvider>
    )
}

ThemeProvider.displayName = 'ThemeProvider';

export default ThemeProvider;
