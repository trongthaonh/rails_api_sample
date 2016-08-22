const initilaState = {
  page: 'MYPAGE',
  albums: []
};

const favs = (state = initilaState, action) => {
  switch (action.type) {
    case 'RECEIVE_FAVS':
      return Object.assign({}, state, {
        albums: action.albums
      });
    case 'ADD_FAV':
    case 'REMOVE_FAV':
      return Object.assign({}, state, {
        albums: action.favAlbums
      });
    default:
      return state;
  }
};

export default favs;
