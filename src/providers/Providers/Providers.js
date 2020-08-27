import React from 'react';
import PropTypes from 'prop-types';
import ThemeProvider from 'providers/ThemeProvider';
import ResponsiveProvider from 'providers/Responsive';
import AuthenticationProvider from 'providers/Authentication';
import SavingProvider from 'providers/Saving';
import SidebarProvider from 'providers/Sidebar';
import DonationsProvider from 'providers/Donations';
import DonorsProvider from 'providers/Donors';
import EmployeesProvider from 'providers/Employees';
import ItemsProvider from 'providers/Items';
import LocationsProvider from 'providers/Locations';
import RequisitionsProvider from 'providers/Requisitions';
import UsersProvider from 'providers/Users';

function Providers ({ children }) {
    return (
        <ThemeProvider>
            <ResponsiveProvider>
                <AuthenticationProvider>
                    <SavingProvider>
                        <SidebarProvider>
                            <DonationsProvider>
                                <DonorsProvider>
                                    <EmployeesProvider>
                                        <ItemsProvider>
                                            <LocationsProvider>
                                                <RequisitionsProvider>
                                                    <UsersProvider>
                                                        {children}
                                                    </UsersProvider>
                                                </RequisitionsProvider>
                                            </LocationsProvider>
                                        </ItemsProvider>
                                    </EmployeesProvider>
                                </DonorsProvider>
                            </DonationsProvider>
                        </SidebarProvider>
                    </SavingProvider>
                </AuthenticationProvider>
            </ResponsiveProvider>
        </ThemeProvider>
    );
}

Providers.displayName = 'Providers';

Providers.propTypes = {
    children: PropTypes.node,
};

export default Providers;
