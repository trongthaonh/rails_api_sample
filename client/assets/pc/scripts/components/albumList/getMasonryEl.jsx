import React from 'react';
import Masonry from 'react-masonry-component';

import AlbumListView from './AlbumListView';


export default function getMasonryEl(state) {
  const masonryOptions = {
    itemSelector: '.js-masonryBox',
    columnWidth: '.js-masonryBox',
    percentPosition: true,
    transitionDuration: '0.2s'
  };
  const getResultNodes = () => {
    return state.albums.map((row) => {
      return <AlbumListView data={row} key={row.collectionId} onOpenModal={this.openModal} />;
    });
  };
  return (
    <Masonry
      className={'albumList'}
      elementType={'ul'}
      options={masonryOptions}
      disableImagesLoaded={true}
    >
      {getResultNodes()}
    </Masonry>
  );
}
