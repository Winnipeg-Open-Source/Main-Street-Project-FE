import React from 'react';
import Collapse from './Collapse';

export const Default = () => (
    <Collapse title='Title'>
        <p>Children</p>
        <p>Children</p>
        <p>Children</p>
        <p>Children</p>
    </Collapse>
);

export default {
    title: 'Collapse',
    component: Collapse,
};
