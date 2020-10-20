import useAxios from './useAxios';
import useLocalAxios from './useLocalAxios';

export default process.env.NODE_ENV === 'development'
    ? useLocalAxios
    : useAxios;
