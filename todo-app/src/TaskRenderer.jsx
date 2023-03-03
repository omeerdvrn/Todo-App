import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Task from "./components/Task";

export let TaskCount = 0;
function TaskRenderer() {
  const [tasks, setTasks] = useState([{}]);
  const [fetched, setFetched] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:8080/v1/tasks/readWithId").then((response) => {
      setTasks(response.data);
      TaskCount = tasks.length;
      setFetched(true);
    });
  });
  while (!fetched) {
    return;
  }

  return (
    <React.Fragment>
      <NavBar taskCount={tasks.length}></NavBar>
      <div style={{ width: 400 }} className="container">
        <ul className="list-group">
          {tasks.map((task, index) => (
            <div key={index}>
              <li key={index} className="list-group-item">
                <Task
                  id={task.id}
                  title={task.title}
                  completed={task.completed}
                ></Task>
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
