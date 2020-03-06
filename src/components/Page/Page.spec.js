import React from 'react';
import renderWithTheme from 'tests/helpers/renderWithTheme';
import Page from './Page';

function Children () {
    return (
        <>
            <div>First div</div>
            <div>Second div</div>
        </>
    );
}

function RenderAction () {
    return (
        <div>Render Action</div>
    );
}

describe ('Page', () => {
    it ('renders without crashing', () => {
        const { asFragment } = renderWithTheme(<Page />);

        expect(asFragment()).toMatchSnapshot();
    });

    it ('renders without title', () => {
        const { queryByText } = renderWithTheme(
            <Page>
                <Children />
            </Page>
        );

        expect(queryByText(/First div/i)).toBeInTheDocument();
        expect(queryByText(/Second div/i)).toBeInTheDocument();
        expect(queryByText(/Title/i)).not.toBeInTheDocument();
        expect(queryByText(/Render Action/i)).not.toBeInTheDocument();
    });

    it ('renders with title', () => {
        const { queryByText } = renderWithTheme(
            <Page title='Title'>
                <Children />
            </Page>
        );

        expect(queryByText(/First div/i)).toBeInTheDocument();
        expect(queryByText(/Second div/i)).toBeInTheDocument();
        expect(queryByText(/Title/i)).toBeInTheDocument();
        expect(queryByText(/Render Action/i)).not.toBeInTheDocument();
    });

    it ('renders with render actions', () => {
        const { queryByText } = renderWithTheme(
            <Page title='Title' renderAction={RenderAction}>
                <Children />
            </Page>
        );

        expect(queryByText(/First div/i)).toBeInTheDocument();
        expect(queryByText(/Second div/i)).toBeInTheDocument();
        expect(queryByText(/Title/i)).toBeInTheDocument();
        expect(queryByText(/Render Action/i)).toBeInTheDocument();
    });
});
