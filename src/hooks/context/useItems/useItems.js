import { useContext } from 'react';
import ItemsContext from 'context/Items';

function useItems () {
    return useContext(ItemsContext);
}

export default useItems;
