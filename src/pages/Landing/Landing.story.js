import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './Landing';

export const Default = () => (
    <BrowserRouter>
        <LandingPage />
    </BrowserRouter>
);

export default {
    title: 'Pages/LandingPage',
    component: LandingPage,
};
