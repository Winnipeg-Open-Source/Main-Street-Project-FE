import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
    DONOR_PATH,
    DONORS_PATH,
    LANDING_PATH,
    PRODUCT_PATH,
    PRODUCTS_CREATE_PATH, PRODUCTS_EDIT_PATH,
    PRODUCTS_PATH
} from 'constants/paths';
import LandingPage from 'pages/Landing/Landing';
import DonorPage from 'pages/Donor/Donor';
import DonorsPage from 'pages/Donors/Donors';
import ProductPage from 'pages/Product/Product';
import ProductsPage from 'pages/Products/Products';
import ProductCreatePage from 'pages/ProductCreate/ProductCreate';
import ProductEditPage from 'pages/ProductEdit/ProductEdit';

function Routes () {
    return (
        <Switch>
            <Route exact path={LANDING_PATH} component={LandingPage} />
            <Route exact path={DONOR_PATH} component={DonorPage} />
            <Route exact path={DONORS_PATH} component={DonorsPage} />
            <Route exact path={PRODUCT_PATH} component={ProductPage} />
            <Route exact path={PRODUCTS_PATH} component={ProductsPage} />
            <Route exact path={PRODUCTS_CREATE_PATH} component={ProductCreatePage} />
            <Route exact path={PRODUCTS_EDIT_PATH} component={ProductEditPage} />
        </Switch>
    );
}

Routes.displayName = 'Routes';

export default Routes;
