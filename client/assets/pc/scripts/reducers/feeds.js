const initilaState = {
  page: 'FEED',
  albums: []
};

const feeds = (state = initilaState, action) => {
  switch (action.type) {
    case 'RECEIVE_FEEDS':
      return Object.assign({}, state, {
        albums: action.albums
      });
    default:
      return state;
  }
};

export default feeds;
