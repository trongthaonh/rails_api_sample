const initilaState = {
  page: '',
  err: '',
  isLoading: false
};

const app = (state = initilaState, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return Object.assign({}, state, {
        page: action.page
      });
    case 'FETCH_FEEDS':
    case 'FETCH_FAVS':
    case 'FETCH_SEARCHS':
    case 'FETCH_FAV':
      return Object.assign({}, state, {
        isLoading: true
      });
    case 'RECEIVE_FEEDS':
    case 'RECEIVE_FAVS':
    case 'RECEIVE_SEARCHS':
      return Object.assign({}, state, {
        isLoading: false
      });
    case 'RECIEVE_FEEDS_ERR':
    case 'RECIEVE_FAVS_ERR':
    case 'RECIEVE_SEARCHS_ERR':
    case 'RECIEVE_FAV_ERR':
      return Object.assign({}, state, {
        isLoading: false,
        err: action.err
      });
    case 'ADD_FAV':
    case 'REMOVE_FAV':
      return Object.assign({}, state, {
        isLoading: false
      });
    default:
      return state;
  }
};

export default app;
