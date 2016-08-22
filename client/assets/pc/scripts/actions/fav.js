import ajax from '../common/fn/ajax';

const URL = '/api/favs/';
const postJSON = () => {
  return { type: 'FETCH_FAV' };
};
const addData = (favAlbums) => {
  return {
    type: 'ADD_FAV',
    favAlbums: favAlbums
  };
};
const removeData = (favAlbums) => {
  return {
    type: 'REMOVE_FAV',
    favAlbums: favAlbums
  };
};
const receiveErr = (err) => {
  return {
    type: 'RECIEVE_FAV_ERR',
    err: err
  };
};

const postAddFav = (album) => {
  return (dispatch) => {
    dispatch(postJSON());
    return ajax(URL, 'POST', 'json', album).then(() => {
      ajax(URL, 'GET', 'json').then((res) => {
        dispatch(addData(res.list));
      }, (err) => {
        receiveErr(receiveErr(err));
      });
    }, (err) => {
      receiveErr(receiveErr(err));
    });
  };
};

const deleteRemoveFav = (album) => {
  return (dispatch) => {
    dispatch(postJSON());
    return ajax(URL + album.collectionId, 'DELETE').then(() => {
      ajax(URL, 'GET', 'json').then((res) => {
        dispatch(removeData(res.list));
      }, (err) => {
        receiveErr(receiveErr(err));
      });
    }, (err) => {
      receiveErr(receiveErr(err));
    });
  };
};

export function addFav(album) {
  return (dispatch, getState) => {
    return (getState().app.isLoading) ? Promise.resolve() : dispatch(postAddFav(album));
  };
}

export function removeFav(album) {
  return (dispatch, getState) => {
    return (getState().app.isLoading) ? Promise.resolve() : dispatch(deleteRemoveFav(album));
  };
}
