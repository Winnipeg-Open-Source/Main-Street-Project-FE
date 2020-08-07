import useForm from 'hooks/useForm';

function useItemForm (initialState) {
    const { state, onChange, setState } = useForm(initialState);

    const onAddLineItemClick = (lineItem) => setState({
        ...state,
        lineItems: [
            ...state.lineItems,
            lineItem,
        ],
    });

    const onLineItemQuantityChange = (_, lineItemId, value) => setState({
        ...state,
        lineItems: [
            ...state.lineItems.map(lineItem => lineItem.id === lineItemId
                ? {
                    ...lineItem,
                    quantity: value,
                }
                : lineItem
            ),
        ],
    });

    return {
        state,
        onChange,
        onAddLineItemClick,
        onLineItemQuantityChange,
    }
}

export default useItemForm;
