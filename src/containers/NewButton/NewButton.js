import React from 'react';
import { useLocation } from 'react-router-dom';
import LinkButton from 'components/LinkButton';

function NewButton () {
    const { pathname } = useLocation();
    const newPathname = `${pathname}/new`;

    return <LinkButton title='New' path={newPathname} />;
}

NewButton.displayName = 'NewButton';

export default NewButton;
