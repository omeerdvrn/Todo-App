import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Task from "./components/Task";

export let TaskCount = 0;
function TaskRenderer() {
  const [tasks, setTasks] = useState([{}]);

  useEffect(() => {
    axios.get("http://localhost:8080/v1/tasks").then((response) => {
      setTasks(response.data);
      TaskCount = tasks.length;
    });
  });
  return (
    <React.Fragment>
      <NavBar taskCount={tasks.length}></NavBar>
      <div style={{ width: 400 }} className="container">
        <ul className="list-group">
          {tasks.map((task, index) => (
            <div>
              <li key={index} className="list-group-item">
                <Task title={task.title} completed={task.completed}></Task>
              </li>
              <br />
            </div>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}
export default TaskRenderer;
