const initilaState = {
  page: 'SEARCH',
  albums: []
};

const searchs = (state = initilaState, action) => {
  switch (action.type) {
    case 'RECEIVE_SEARCHS':
      return Object.assign({}, state, {
        albums: action.albums
      });
    default:
      return state;
  }
};

export default searchs;
