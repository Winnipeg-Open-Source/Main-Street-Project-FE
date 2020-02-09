import React from 'react';
import { render } from '@testing-library/react';
import { Input } from 'pcln-design-system';
import Form from './Form';

const FormChildren = () => (
    <>
        <Input placeholder='First Input' />
        <Input placeholder='Second Input' />
        <Input placeholder='Third Input' />
    </>
);

describe ('Form', () => {
    it ('renders without crashing', () => {
        const { asFragment } = render(
            <Form>
                <FormChildren />
            </Form>
        );

        expect(asFragment()).toMatchSnapshot();
    });

    it ('renders without a title', () => {
        const { queryByTestId } = render(
            <Form>
                <FormChildren />
            </Form>
        );

        expect(queryByTestId('title')).toBeNull();
    });

    it ('renders with a title', () => {
        const { queryByTestId } = render(
            <Form title='Title'>
                <FormChildren />
            </Form>
        );

        expect(queryByTestId('title')).toBeDefined();
    });
});
