import { useContext } from 'react';
import RequisitionsContext from 'context/Requisitions';

function useRequisitions () {
    return useContext(RequisitionsContext);
}

export default useRequisitions;
