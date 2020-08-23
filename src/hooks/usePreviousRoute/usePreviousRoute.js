import { useHistory } from 'react-router-dom';

function usePreviousRoute () {
    const history = useHistory();

    return () => history.goBack();
}

export default usePreviousRoute;
