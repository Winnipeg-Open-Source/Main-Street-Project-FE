import React from 'react';
import { Button } from 'pcln-design-system';
import Page from 'components/Page';
import Link from 'components/Link';
import useRequisitions from 'hooks/useRequisitions';
import useRoute from 'hooks/useRoute';
import { REQUISITION_NEW_PATH } from 'constants/paths';

function NewRequisitionButton () {
    return (
        <Link to={REQUISITION_NEW_PATH}>
            <Button size='small'>
                New Requistion
            </Button>
        </Link>
    );
}

function Requisitions () {
    const { isLoading, requisitions } = useRequisitions();

    return (
        <Page isLoading={isLoading} title='Requisitions' renderAction={NewRequisitionButton}>
            
        </Page>
    );
}

Requisitions.displayName = 'Requisitions';

export default Requisitions;
