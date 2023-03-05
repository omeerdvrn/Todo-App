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
      let sorted = response.data.reverse();
      setTasks(sorted);
      TaskCount = tasks.length;
      setFetched(true);
    });
  });
  while (!fetched) {
    return <h3 className="container">Please wait! Fetching data ...</h3>;
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
                  creationDate={task.creationDate}
                  endDate={task.endDate}
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
