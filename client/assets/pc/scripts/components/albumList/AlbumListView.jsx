import React from 'react';


export default class AlbumListView extends React.Component {
  constructor(props) {
    super(props);
    this.onOpenModal = this.onOpenModal.bind(this);
  }
  onOpenModal() {
    this.props.onOpenModal(this.props.data);
  }
  render() {
    return (
      <li className="js-masonryBox albumList__layout">
        <a className="js-openAlbumDetailTrigger" onClick={this.onOpenModal}>
          <img src={this.props.data.artworkUrl400} alt={this.props.data.collectionName} />
        </a>
      </li>
    );
  }
}

AlbumListView.propTypes = {
  data: React.PropTypes.shape({
    _id: React.PropTypes.string,
    artistId: React.PropTypes.string.isRequired,
    artistName: React.PropTypes.string.isRequired,
    artworkUrl400: React.PropTypes.string.isRequired,
    collectionId: React.PropTypes.string.isRequired,
    collectionName: React.PropTypes.string.isRequired,
    collectionViewUrl: React.PropTypes.string.isRequired,
    primaryGenreName: React.PropTypes.string.isRequired,
    releaseDate: React.PropTypes.string.isRequired,
    isFav: React.PropTypes.bool,
  }),
  onOpenModal: React.PropTypes.func.isRequired,
};
