import axios from "axios";
import React from "react";
import UpdateTaskModal from "./UpdateTaskModal";

function Task(props) {
  const deleteTask = () => {
    axios({
      method: "delete",
      url: "http://localhost:8080/v1/tasks/" + props.id,
    });
  };

  const handleCompletion = (st) => {
    axios({
      method: "PUT",
      url: "http://localhost:8080/v1/tasks/" + props.id,
      data: {
        title: props.title,
        completed: st.target.checked ? "yes" : "no",
      },
    })
      .then((e) => {
        console.log(e);
      })
      .catch((e) => {
        console.log("error: " + e);
      });
  };
  return (
    <div className="form-group">
      <div className="form-control">
        <input
          type="checkbox"
          defaultChecked={props.completed === "yes"}
          onChange={(e) => handleCompletion(e)}
        />
        <label className="container-fluid">{props.title}</label>
      </div>
      <hr />
      <span>
        <UpdateTaskModal
          id={props.id}
          title={props.title}
          completed={props.completed}
        ></UpdateTaskModal>
        <button className="btn btn-danger btn-sm" onClick={deleteTask}>
          Delete
        </button>
        <span style={{ "margin-right": "2%" }} className="navbar-right 10px">
          <strong>Start Date:</strong>13.12.2023
          <br />
          <strong>End Date:</strong>13.12.2023
        </span>
      </span>
    </div>
  );
}

export default Task;
