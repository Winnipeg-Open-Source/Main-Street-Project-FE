import React from 'react';
import { Input } from 'pcln-design-system';
import Form from './Form';

const FormChildren = () => (
    <>
        <Input placeholder='First Input' />
        <Input placeholder='Second Input' />
        <Input placeholder='Third Input' />
    </>
);

export const WithoutTitle = () => (
    <Form>
        <FormChildren />
    </Form>
);

export const WithTitle = () => (
    <Form title='New Form'>
        <FormChildren />
    </Form>
);

export default {
    title: 'Form',
    component: Form,
};
