import React, { useEffect } from 'react';
import Page from 'components/Page';
import Input from 'components/Input';
import RequisitionsList from 'components/RequisitionsList';
import NewButton from 'containers/NewButton';
import useRequisitions from 'hooks/context/useRequisitions';

function Requisitions () {
    const { isLoading, requisitions, onLoadRequisitions } = useRequisitions();
    const disabled = isLoading || (requisitions && requisitions.length === 0);

    useEffect(() => {
        isLoading && onLoadRequisitions();
    }, []);

    return (
        <Page isLoading={isLoading} title='Requisitions' renderAction={NewButton}>
            <Input id='search' disabled={disabled} placeholder='Search' mb={3} />
            <RequisitionsList isLoading={isLoading} requisitions={requisitions} />
        </Page>
    );
}

Requisitions.displayName = 'Requisitions';

export default Requisitions;
