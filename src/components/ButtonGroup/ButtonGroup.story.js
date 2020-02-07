import React from 'react';
import { Button } from 'pcln-design-system';
import ButtonGroup from './ButtonGroup';

export const TwoButtons = () => (
    <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
    </ButtonGroup>
);

export const ThreeButtons = () => (
    <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
    </ButtonGroup>
);

export default {
    title: 'ButtonGroup',
    component: ButtonGroup,
};
