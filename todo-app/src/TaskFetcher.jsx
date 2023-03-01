import axios from "axios";
import { useEffect, useState } from "react";
import Task from "./components/Task";

function TaskFetcher() {
  const [tasks, setTasks] = useState([{}]);

  useEffect(() => {
    axios.get("http://localhost:8080/v1/tasks").then((response) => {
      setTasks(response.data);
    });
  });
  return (
    <div style={{ width: 200 }} className="container">
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li key={index} className="list-group-item">
            <Task title={task.title} completed={task.completed}></Task>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskFetcher;
