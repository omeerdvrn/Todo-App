function Task(props) {
  return (
    <div className="container-fluid">
      <p>{props.title}</p>
      <input
        type="checkbox"
        name="completed"
        defaultChecked={props.completed == "yes" ? true : false}
      />
    </div>
  );
}

export default Task;
