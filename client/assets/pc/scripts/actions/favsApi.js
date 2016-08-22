import fetchData from './api';

const FAVS = {
  URL: '/api/favs',
  FETCH: 'FETCH_FAVS',
  RECEIVE: 'RECEIVE_FAVS',
  RECIEVE_ERR: 'RECIEVE_FAVS_ERR'
};

export function fetchFavs() {
  return (dispatch, getState) => {
    return (getState().app.isLoading) ? Promise.resolve() : dispatch(fetchData(FAVS));
  };
}
