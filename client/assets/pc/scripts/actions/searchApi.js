import fetchData from './api';

const SEARCHS = {
  URL: 'https://itunes.apple.com/search',
  FETCH: 'FETCH_SEARCHS',
  RECEIVE: 'RECEIVE_SEARCHS',
  RECIEVE_ERR: 'RECIEVE_SEARCHS_ERR',
  DATA_TYPE: 'jsonp'
};

export function search(term) {
  SEARCHS.data = {
    term: term,
    country: 'US',
    lang: 'en_us',
    media: 'music',
    entity: 'album',
    limit: 100
  };
  return (dispatch, getState) => {
    return (getState().app.isLoading) ? Promise.resolve() : dispatch(fetchData(SEARCHS));
  };
}
