import fetchData from './api';

const FEEDS = {
  URL: '/api/feeds',
  FETCH: 'FETCH_FEEDS',
  RECEIVE: 'RECEIVE_FEEDS',
  RECIEVE_ERR: 'RECIEVE_FEEDS_ERR'
};

export function fetchFeeds() {
  return (dispatch, getState) => {
    return (getState().app.isLoading) ? Promise.resolve() : dispatch(fetchData(FEEDS));
  };
}
