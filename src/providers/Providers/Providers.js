import React from 'react';
import PropTypes from 'prop-types';
import ThemeProvider from 'providers/ThemeProvider';
import ResponsiveProvider from 'providers/Responsive';
import SavingProvider from 'providers/Saving';
import SidebarProvider from 'providers/Sidebar';
import DonorsProvider from 'providers/Donors';
import RequisitionsProvider from 'providers/Requisitions';

function Providers ({ children }) {
    return (
        <ThemeProvider>
            <ResponsiveProvider>
                <SavingProvider>
                    <SidebarProvider>
                        <DonorsProvider>
                            <RequisitionsProvider>
                                {children}
                            </RequisitionsProvider>
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
