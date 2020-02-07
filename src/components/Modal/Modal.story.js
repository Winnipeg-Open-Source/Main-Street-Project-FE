import React from 'react';
import { action } from '@storybook/addon-actions';
import Modal from './Modal';

const Content = () => <div>Content</div>;

const LargeContent = () => (
    <div>
        <div>Paragraphs</div>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
        <p>Paragraph 3</p>
        <p>Paragraph 4</p>
        <p>Paragraph 5</p>
        <p>Paragraph 6</p>
        <p>Paragraph 7</p>
        <p>Paragraph 8</p>
        <p>Paragraph 9</p>
        <p>Paragraph 10</p>
        <p>Paragraph 11</p>
        <p>Paragraph 12</p>
    </div>
);

export const TitleOnly = () => (
    <Modal isOpen title='Title'>
        <Content />
    </Modal>
);

export const WithSubtitle = () => (
    <Modal isOpen title='Title' subtitle='Subtitle Message'>
        <Content />
    </Modal>
);

export const WithCloseButton = () => (
    <Modal isOpen title='Title' subtitle='Subtitle Message' onClose={action('Close')}>
        <Content />
    </Modal>
);

export const WithFooter = () => (
    <Modal isOpen hasFooter title='Title' subtitle='Subtitle Message' onClose={action('Close')}>
        <Content />
    </Modal>
);

export const Scrollable = () => (
    <Modal isOpen title='Title' subtitle='Subtitle Message' onClose={action('Close')}>
        <LargeContent />
    </Modal>
);

export default {
    title: 'Modal',
    component: Modal,
};
