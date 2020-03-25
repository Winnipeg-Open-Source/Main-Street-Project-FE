import React from 'react';
import PropTypes from 'prop-types';
import ThemeProvider from 'providers/ThemeProvider';
import ResponsiveProvider from 'providers/Responsive';
import SavingProvider from 'providers/Saving';
import SidebarProvider from 'providers/Sidebar';
import DonorsProvider from 'providers/Donors';

function Providers ({ children }) {
    return (
        <ThemeProvider>
            <ResponsiveProvider>
                <SavingProvider>
                    <SidebarProvider>
                        <DonorsProvider>
                            {children}
                        </DonorsProvider>
                    </SidebarProvider>
                </SavingProvider>
            </ResponsiveProvider>
        </ThemeProvider>
    );
}

Providers.displayName = 'Providers';

Providers.propTypes = {
    children: PropTypes.node,
};

export default Providers;
