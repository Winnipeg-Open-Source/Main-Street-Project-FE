import { useLocation } from 'react-router-dom';
import useRoute from 'hooks/useRoute';
import { LANDING_PATH } from 'constants/paths';

function usePreviousRoute () {
    const { search } = useLocation();
    const referrer = search && search.replace('?referrer=', '');
    const previousRoute = referrer || LANDING_PATH;
    return useRoute(previousRoute, true);
}

export default usePreviousRoute;
