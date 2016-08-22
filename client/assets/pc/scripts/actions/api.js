import ajax from '../common/fn/ajax';

const FAVS = { URL: '/api/favs' };

const getJSON = (TYPE) => {
  return { type: TYPE };
};
const receiveData = (TYPE, albums) => {
  return {
    type: TYPE,
    albums: albums
  };
};
const receiveErr = (TYPE, err) => {
  return {
    type: TYPE,
    err: err
  };
};

const adjustProps = (collection) => {
  collection.forEach((model) => {
    model.artworkUrl400 = model.artworkUrl100.replace('100x100', '400x400');
    delete model.amgArtistId;
    delete model.artworkUrl60;
    delete model.artworkUrl100;
    delete model.artistViewUrl;
    delete model.collectionCensoredName;
    delete model.collectionExplicitness;
    delete model.collectionPrice;
    delete model.collectionType;
    delete model.copyright;
    delete model.country;
    delete model.currency;
    delete model.trackCount;
    delete model.wrapperType;
  });
  return collection;
};

const checkFav = (baseCollection, compareCollection) => {
  baseCollection.forEach((baseModel) => {
    baseModel.isFav = false;
    compareCollection.forEach((compareModel) => {
      if (baseModel && baseModel.collectionId.toString() === compareModel.collectionId.toString()) {
        compareModel.isFav = true;
      }
    });
  });
  return compareCollection;
};

const parse = (resList) => {
  return new Promise((resolve, reject) => {
    ajax(FAVS.URL, 'GET', 'json').then((favsRes) => {
      resList.reverse().forEach((model) => {
        model.artistId = model.artistId.toString();
        model.collectionId = model.collectionId.toString();
      });
      let albums = (favsRes.list.length > 0) ? checkFav(favsRes.list, resList) : resList;
      albums = (albums[0] && albums[0].collectionType) ? adjustProps(albums) : albums;
      resolve(albums);
    }, (err) => {
      reject(err);
    });
  });
};

const onFetch = (res, dispatch, RECEIVE, RECEIVE_ERR) => {
  if (res.results) {
    // for iTunes API
    res.list = res.results;
    delete res.results;
  }
  parse(res.list).then((albums) => {
    dispatch(receiveData(RECEIVE, albums));
  }, (err) => {
    dispatch(receiveErr(RECEIVE_ERR, err));
  });
};

export default function fetchData(args) {
  return dispatch => {
    const URL = args.URL;
    const DATA = args.data || null;
    const DATA_TYPE = args.DATA_TYPE || 'json';
    dispatch(getJSON(args.FETCH));
    return ajax(URL, 'GET', DATA_TYPE, DATA).then((res) => {
      onFetch(res, dispatch, args.RECEIVE, args.RECEIVE_ERR);
    }, (err) => {
      dispatch(receiveErr(args.RECEIVE_ERR, err));
    });
  };
}
