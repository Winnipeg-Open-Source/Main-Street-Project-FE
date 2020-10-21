import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import LinkButton from 'components/LinkButton';

function EditButton () {
    const { pathname } = useLocation();
    const { id } = useParams();

    const pathWithoutId = pathname.substring(0, pathname.lastIndexOf('/'));
    const editPathname = `${pathWithoutId}/edit/${id}`;

    return <LinkButton title='Edit' path={editPathname} />;
}

EditButton.displayName = 'EditButton';

export default EditButton;
