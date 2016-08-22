import React from 'react';

import getLoaderEl from '../loader/getLoaderEl';
import getHeaderEl from '../header/getHeaderEl';
import getMasonryEl from '../albumList/getMasonryEl';
import { getModalEl, openModal, closeModal, addFav, removeFav } from '../albumDetail/modal';


export default class BaseView extends React.Component {
  constructor(props) {
    super(props);
    this.getLoaderEl = getLoaderEl;
    this.getHeaderEl = getHeaderEl.bind(this);
    this.getMasonryEl = getMasonryEl.bind(this);
    this.getModalEl = getModalEl.bind(this);
    this.openModal = openModal.bind(this);
    this.closeModal = closeModal.bind(this);
    this.addFav = addFav.bind(this);
    this.removeFav = removeFav.bind(this);
  }
}

BaseView.propTypes = {
  app: React.PropTypes.shape({
    page: React.PropTypes.string.isRequire,
    err: React.PropTypes.string.isRequire,
    isLoading: React.PropTypes.bool.isRequire,
  }),
  modal: React.PropTypes.shape({
    isModalOpen: React.PropTypes.bool.isRequire,
    modalAlbum: React.PropTypes.object
  }),
  feeds: React.PropTypes.shape({
    page: React.PropTypes.string.isRequire,
    albums: React.PropTypes.array.isRequire
  }),
  favs: React.PropTypes.shape({
    page: React.PropTypes.string.isRequire,
    albums: React.PropTypes.array.isRequire
  }),
  searchs: React.PropTypes.shape({
    page: React.PropTypes.string.isRequire,
    albums: React.PropTypes.array.isRequire
  }),
  params: React.PropTypes.shape({
    term: React.PropTypes.string
  }),
  changePage: React.PropTypes.func,
  fetchFeeds: React.PropTypes.func,
  fetchFavs: React.PropTypes.func,
  search: React.PropTypes.func,
  openModal: React.PropTypes.func,
  closeModal: React.PropTypes.func,
  addFav: React.PropTypes.func,
  removeFav: React.PropTypes.func
};

BaseView.contextTypes = {
  router: React.PropTypes.object.isRequired,
};
