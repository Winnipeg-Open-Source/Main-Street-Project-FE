import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
    DONOR_PATH,
    DONOR_NEW_PATH,
    DONOR_EDIT_PATH,
    DONORS_PATH,
    LANDING_PATH,
    PRODUCT_PATH,
    PRODUCTS_CREATE_PATH,
    PRODUCTS_EDIT_PATH,
    PRODUCTS_PATH,
    REQUISITION_NEW_PATH,
} from 'constants/paths';
import LandingPage from 'pages/Landing';
import DonorPage from 'pages/Donor';
import DonorsPage from 'pages/Donors';
import DonorCreatePage from 'pages/DonorCreate';
import DonorEditPage from 'pages/DonorEdit';
import ProductPage from 'pages/Product';
import ProductsPage from 'pages/Products';
import ProductCreatePage from 'pages/ProductCreate';
import ProductEditPage from 'pages/ProductEdit';
import RequisitionCreate from 'pages/RequisitionCreate';

function Routes () {
    return (
        <Switch>
            <Route exact path={LANDING_PATH} component={LandingPage} />
            <Route exact path={DONOR_NEW_PATH} component={DonorCreatePage} />
            <Route exact path={DONOR_EDIT_PATH} component={DonorEditPage} />
            <Route exact path={DONOR_PATH} component={DonorPage} />
            <Route exact path={DONORS_PATH} component={DonorsPage} />
            <Route exact path={PRODUCTS_CREATE_PATH} component={ProductCreatePage} />
            <Route exact path={PRODUCTS_EDIT_PATH} component={ProductEditPage} />
            <Route exact path={PRODUCT_PATH} component={ProductPage} />
            <Route exact path={PRODUCTS_PATH} component={ProductsPage} />
            <Route exact path={REQUISITION_NEW_PATH} component={RequisitionCreate} />
        </Switch>
    );
}

Routes.displayName = 'Routes';

export default Routes;
