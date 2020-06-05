import {
    LOAD_REQUISITIONS,
    SAVE_REQUISITION,
    loadRequisitions,
    saveRequisition,
} from 'actions/Requisitions';

describe ('Requisitions Actions', () => {
    it ('returns load requisitions action', () => {
        const response = loadRequisitions(false, false, [{ id: 1 }]);
        expect(response).toStrictEqual({ type: LOAD_REQUISITIONS, isLoading: false, isError: false, requisitions: [{ id: 1 }] });
    });

    it ('returns save requisition action', () => {
        const response = saveRequisition({ id: 1 });
        expect(response).toStrictEqual({ type: SAVE_REQUISITION, requisition: { id: 1 }});
    });
});
