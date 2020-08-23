import { useHistory } from 'react-router-dom';
import { LANDING_PATH } from 'constants/paths';

function useRoute (route = LANDING_PATH) {
    const history = useHistory();

    return (alternateRoute) => typeof alternateRoute === 'string'
        ? history.push(alternateRoute)
        : history.push(route);
}

export default useRoute;
