import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SidebarProvider from './Sidebar';
import useSidebar from 'hooks/context/useSidebar';

function Children () {
    const { isCollapsed, onSidebarToggle } = useSidebar();

    return (
        <div>
            {isCollapsed && 'isCollapsed'}
            <button onClick={onSidebarToggle}>Button</button>
        </div>
    )
}

describe ('Sidebar Provider', () => {
    it ('should be collapsible and expandable', () => {
        const { queryByText } = render(
            <SidebarProvider>
                <Children />
            </SidebarProvider>
        );

        const Button = queryByText(/Button/i);

        expect(queryByText(/isCollapsed/i)).toBeInTheDocument();
        fireEvent.click(Button)
        expect(queryByText(/isCollapsed/i)).not.toBeInTheDocument();
        fireEvent.click(Button)
        expect(queryByText(/isCollapsed/i)).toBeInTheDocument();
    });
});
