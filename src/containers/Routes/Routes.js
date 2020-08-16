import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
    LANDING_PATH,
    LOGIN_PATH,
    LOGOUT_PATH,
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
    SIGN_UP_PATH,
} from 'constants/paths';
import AuthenticatedRoute from 'containers/AuthenticatedRoute';
import LandingPage from 'pages/Landing';
import LoginPage from 'pages/Login';
import LogoutPage from 'pages/Logout';
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
import SignUpPage from 'pages/SignUp';

function Routes () {
    return (
        <Switch>
            <Route exact path={LOGIN_PATH} component={LoginPage} />
            <Route exact path={SIGN_UP_PATH} component={SignUpPage} />
            <AuthenticatedRoute exact path={LOGOUT_PATH} component={LogoutPage} />
            <AuthenticatedRoute exact path={LANDING_PATH} component={LandingPage} />
            <AuthenticatedRoute exact path={DONATION_NEW_PATH} component={DonationCreatePage} />
            <AuthenticatedRoute exact path={DONATION_PATH} component={DonationPage} />
            <AuthenticatedRoute exact path={DONATIONS_PATH} component={DonationsPage} />
            <AuthenticatedRoute exact path={DONOR_NEW_PATH} component={DonorCreatePage} />
            <AuthenticatedRoute exact path={DONOR_EDIT_PATH} component={DonorEditPage} />
            <AuthenticatedRoute exact path={DONOR_PATH} component={DonorPage} />
            <AuthenticatedRoute exact path={DONORS_PATH} component={DonorsPage} />
            <AuthenticatedRoute exact path={ITEM_NEW_PATH} component={ItemsCreatePage} />
            <AuthenticatedRoute exact path={ITEMS_PATH} component={ItemsPage} />
            <AuthenticatedRoute exact path={LOCATION_NEW_PATH} component={LocationCreatePage} />
            <AuthenticatedRoute exact path={LOCATIONS_PATH} component={LocationsPage} />
            <AuthenticatedRoute exact path={REQUISITION_NEW_PATH} component={RequisitionCreatePage} />
            <AuthenticatedRoute exact path={REQUISITIONS_PATH} component={RequisitionsPage} />
        </Switch>
    );
}

Routes.displayName = 'Routes';

export default Routes;
