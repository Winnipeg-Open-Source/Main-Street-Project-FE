import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
    LANDING_PATH,
    DONATION_PATH,
    DONATIONS_PATH,
    DONATION_NEW_PATH,
    DONORS_PATH,
    DONOR_PATH,
    DONOR_NEW_PATH,
    DONOR_EDIT_PATH,
    ITEMS_PATH,
    ITEM_NEW_PATH,
    LOCATIONS_PATH,
    LOCATION_NEW_PATH,
    REQUISITIONS_PATH,
    REQUISITION_NEW_PATH,
} from 'constants/paths';
import LandingPage from 'pages/Landing';
import DonationPage from 'pages/Donation';
import DonationsPage from 'pages/Donations';
import DonationCreatePage from 'pages/DonationCreate';
import DonorPage from 'pages/Donor';
import DonorsPage from 'pages/Donors';
import DonorCreatePage from 'pages/DonorCreate';
import DonorEditPage from 'pages/DonorEdit';
import ItemsPage from 'pages/Items';
import ItemsCreatePage from 'pages/ItemsCreate';
import LocationsPage from 'pages/Locations';
import LocationCreatePage from 'pages/LocationCreate';
import RequisitionCreatePage from 'pages/RequisitionCreate';
import RequisitionsPage from 'pages/Requisitions';

function Routes () {
    return (
        <Switch>
            <Route exact path={LANDING_PATH} component={LandingPage} />
            <Route exact path={DONATION_NEW_PATH} component={DonationCreatePage} />
            <Route exact path={DONATION_PATH} component={DonationPage} />
            <Route exact path={DONATIONS_PATH} component={DonationsPage} />
            <Route exact path={DONOR_NEW_PATH} component={DonorCreatePage} />
            <Route exact path={DONOR_EDIT_PATH} component={DonorEditPage} />
            <Route exact path={DONOR_PATH} component={DonorPage} />
            <Route exact path={DONORS_PATH} component={DonorsPage} />
            <Route exact path={ITEM_NEW_PATH} component={ItemsCreatePage} />
            <Route exact path={ITEMS_PATH} component={ItemsPage} />
            <Route exact path={LOCATION_NEW_PATH} component={LocationCreatePage} />
            <Route exact path={LOCATIONS_PATH} component={LocationsPage} />
            <Route exact path={REQUISITION_NEW_PATH} component={RequisitionCreatePage} />
            <Route exact path={REQUISITIONS_PATH} component={RequisitionsPage} />
        </Switch>
    );
}

Routes.displayName = 'Routes';

export default Routes;
