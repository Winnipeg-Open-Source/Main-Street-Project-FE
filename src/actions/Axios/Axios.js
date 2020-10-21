export const REQUEST_START = 'REQUEST_START';
export const REQUEST_FINISHED = 'REQUEST_FINISHED';

export const requestStart = () => ({ type: REQUEST_START });
export const requestFinished = (payload, isError = false) => ({
    type: REQUEST_FINISHED,
    payload,
    isError,
});
