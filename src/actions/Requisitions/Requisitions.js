export const LOAD_REQUISITIONS = 'LOAD_REQUISITIONS';
export const SAVE_REQUISITION = 'SAVE_REQUISITION';

export const loadRequisitions = (isLoading, isError, requisitions) => ({
    type: LOAD_REQUISITIONS,
    isLoading,
    isError,
    requisitions,
});

export const saveRequisition = (requisition) => ({
    type: SAVE_REQUISITION,
    requisition,
});
