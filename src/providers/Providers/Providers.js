import React from 'react';
import PropTypes from 'prop-types';
import ThemeProvider from 'providers/ThemeProvider';
import ResponsiveProvider from 'providers/Responsive';
import SavingProvider from 'providers/Saving';
import SidebarProvider from 'providers/Sidebar';
import DonationsProvider from 'providers/Donations';
import DonorsProvider from 'providers/Donors';
import EmployeesProvider from 'providers/Employees';
import ItemsProvider from 'providers/Items';
import LocationsProvider from 'providers/Locations';
import RequisitionsProvider from 'providers/Requisitions';

function Providers ({ children }) {
    return (
        <ThemeProvider>
            <ResponsiveProvider>
                <SavingProvider>
                    <SidebarProvider>
                        <DonationsProvider>
                            <DonorsProvider>
                                <EmployeesProvider>
                                    <ItemsProvider>
                                        <LocationsProvider>
                                            <RequisitionsProvider>
                                                {children}
                                            </RequisitionsProvider>
                                        </LocationsProvider>
                                    </ItemsProvider>
                                </EmployeesProvider>
                            </DonorsProvider>
                        </DonationsProvider>
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
