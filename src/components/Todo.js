function Todo({ text }) {
  function deleteHandler() {
    console.log('clicked!');
  }
  
  return (
    <div className="card">
      <h2>{text}</h2>ß
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
