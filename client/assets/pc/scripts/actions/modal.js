export function openModal(modalAlbum) {
  return {
    type: 'OPEN_MODAL',
    modalAlbum: modalAlbum
  };
}

export function closeModal() {
  return {
    type: 'CLOSE_MODAL'
  };
}
