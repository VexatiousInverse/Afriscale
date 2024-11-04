import React, { useState } from 'react';
import Modal from 'react-modal';

const withModal = (WrappedComponent) => {
  return (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    const openModal = (post) => {
      setSelectedPost(post);
      setModalIsOpen(true);
    };

    const closeModal = () => {
      setModalIsOpen(false);
      setSelectedPost(null);
    };

    return (
      <>
        <WrappedComponent {...props} openModal={openModal} />
        {selectedPost && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Blog Post Modal"
            className="modal"
            overlayClassName="overlay"
          >
            <h2>{selectedPost.title}</h2>
            <img src={selectedPost.image} alt={selectedPost.title} />
            <p>{selectedPost.content}</p>
            <button onClick={closeModal}>Close</button>
          </Modal>
        )}
      </>
    );
  };
};

export default withModal;