import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import AlbumDetailView from './AlbumDetailView';

export function openModal(album) {
  this.props.openModal(album);
}

export function closeModal() {
  this.props.closeModal();
}

export function addFav(album) {
  album.isFav = true;
  this.props.addFav(album);
}

export function removeFav(album) {
  album.isFav = false;
  this.props.removeFav(album);
}

export function getModalEl() {
  const getModalView = () => {
    return (
      <div id="albumDetailModalView" className="js-modal">
        <AlbumDetailView
          data={this.props.modal.modalAlbum}
          onCloseModal={this.closeModal}
          onAddFav={this.addFav}
          onRemoveFav={this.removeFav}
        />
      </div>
    );
  };
  return (
    <ReactCSSTransitionGroup
      transitionName="fade"
      transitionEnterTimeout={300}
      transitionLeaveTimeout={200}
    >
      {this.props.modal.isModalOpen ? getModalView() : null}
    </ReactCSSTransitionGroup>
  );
}
