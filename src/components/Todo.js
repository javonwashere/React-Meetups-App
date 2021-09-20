import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';


function Todo({ text }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
    console.log('clicked!');
  }

  function closeModal() {
    setModalIsOpen(false);
    console.log('clicked!');
  }

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModal} onConfirm={closeModal}/>}
      {modalIsOpen && <Backdrop onClick={closeModal}/>}
    </div>
  );
}

export default Todo;
