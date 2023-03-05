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
      <div style={{ background: "#2C3333" }}>
        <NavBar taskCount={tasks.length}></NavBar>
        <div style={{ width: 400 }} className="container">
          <ul className="list-group">
            {tasks.map((task, index) => (
              <React.Fragment>
                <div style={{ background: "#CBE4DE" }} key={index}>
                  <li
                    style={{ background: "#CBE4DE" }}
                    key={index}
                    className="list-group-item"
                  >
                    <Task
                      id={task.id}
                      title={task.title}
                      completed={task.completed}
                      creationDate={task.creationDate}
                      endDate={task.endDate}
                    ></Task>
                  </li>
                </div>
                <br />
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
export default TaskRenderer;
