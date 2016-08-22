import React from 'react';
import classNames from 'classnames';


export default class AlbumDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.stopPropagation = this.stopPropagation.bind(this);
    this.toggleFav = this.toggleFav.bind(this);
  }
  onCloseModal() {
    this.props.onCloseModal(this.props.data);
  }
  getFavClass() {
    return classNames({
      fa: true,
      'js-favIcon': true,
      'fa-heart-o': !this.props.data.isFav,
      'fa-heart': this.props.data.isFav,
    });
  }
  toggleFav() {
    if (this.props.data.isFav) {
      this.props.onRemoveFav(this.props.data);
    } else {
      this.props.onAddFav(this.props.data);
    }
  }
  stopPropagation(e) {
    e.stopPropagation();
  }
  render() {
    return (
      <div className="js-modal-wrapper" onClick={this.onCloseModal}>
        <div className="albumDetail js-modal-inner" onClick={this.stopPropagation}>
          <div className="js-modal-closeTrigger albumDetail__closeTrigger">
            <a onClick={this.onCloseModal}><i className="fa fa-times"></i></a>
          </div>
          <div className="albumDetail__detailImg">
            <a href={this.props.data.collectionViewUrl} target="_blank">
              <img src={this.props.data.artworkUrl400} alt={this.props.data.collectionName} />
            </a>
          </div>
          <p>ALBUM: {this.props.data.collectionName}</p>
          <p>ARTIST: {this.props.data.artistName}</p>
          <p>GENRE: {this.props.data.primaryGenreName}</p>
          <div className="js-modal-favTrigger albumDetail__modalFavTrigger">
            <a onClick={this.toggleFav}><i className={this.getFavClass()}></i></a>
          </div>
        </div>
      </div>
		);
  }
}

AlbumDetailView.propTypes = {
  data: React.PropTypes.object.isRequired,
  onAddFav: React.PropTypes.func.isRequired,
  onRemoveFav: React.PropTypes.func.isRequired,
  onCloseModal: React.PropTypes.func.isRequired
};
