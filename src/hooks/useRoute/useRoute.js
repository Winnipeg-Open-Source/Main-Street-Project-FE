import { useHistory } from 'react-router-dom';

function useRoute(route) {
    const history = useHistory();

    return () => history.push(route);
}

export default useRoute;