import React from "react";

function Task(props) {
  return (
    <div className="form-group">
      <div className="form-control">
        <input type="checkbox" defaultChecked={props.completed == "yes"} />
        <label className="container-fluid">{props.title}</label>
      </div>

      <hr />
      <button className="btn btn-primary btn-sm container-fluid">Update</button>
      <button className="btn btn-danger btn-sm container-fluid">Delete</button>
    </div>
  );
}

export default Task;
