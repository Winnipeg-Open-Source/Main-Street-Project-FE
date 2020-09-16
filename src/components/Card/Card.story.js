import React from 'react';
import { Input } from 'pcln-design-system';
import Card from './Card';

export const Column = () => (
    <Card>
        <Input />
        <Input />
    </Card>
);

export const Row = () => (
    <Card row>
        <Input />
        <Input />
    </Card>
);

export default {
    title: 'Card',
    component: Card,
};
