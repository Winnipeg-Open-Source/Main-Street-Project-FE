import React from 'react';
import { Button } from 'pcln-design-system';
import Page from 'components/Page';
import Input from 'components/Input';
import Link from 'components/Link';
import RequisitionsList from 'components/RequisitionsList';
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
    const disabled = isLoading || (requisitions && requisitions.length === 0);

    return (
        <Page isLoading={isLoading} title='Requisitions' renderAction={NewRequisitionButton}>
            <Input id='search' disabled={disabled} placeholder='Search' mb={3} />
            <RequisitionsList />
        </Page>
    );
}

Requisitions.displayName = 'Requisitions';

export default Requisitions;
