import { useHistory } from 'react-router-dom';
import { LANDING_PATH } from 'constants/paths';

function useRoute (route = LANDING_PATH, replace = false) {
    const history = useHistory();
    const method = replace ? history.replace : history.push;

    return (alternateRoute) =>
        typeof alternateRoute === 'string'
            ? method(alternateRoute)
            : method(route);
}

export default useRoute;
