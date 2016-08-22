const initilaState = {
  isModalOpen: false,
  modalAlbum: {}
};

const app = (state = initilaState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return Object.assign({}, state, {
        isModalOpen: true,
        modalAlbum: action.modalAlbum
      });
    case 'CLOSE_MODAL':
      state = Object.assign({}, state, {
        isModalOpen: false
      });
      state.modalAlbum = {};
      return state;
    case 'ADD_FAV':
    case 'REMOVE_FAV':
      return Object.assign({}, state, {
        isModalOpen: false
      });

    default:
      return state;
  }
};

export default app;
