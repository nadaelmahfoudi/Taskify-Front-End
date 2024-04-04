import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../../config.json";
import axios from "axios";
import "./Tasks.css";

const Tasks = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get(config.apiUrl);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
    await axios.delete(`${config.apiUrl}/${task.id}`);
  };

  return (
    <div className="tasks">
      <div className="container">
        <button
          onClick={() => navigate("/task/new")}
          className="btn btn-primary mb-4"
        >
          New Task
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Not_Completed</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td> {task.name} </td>
                <td> {task.not_completed} </td>
                <td>
                  <button
                    onClick={() => navigate(`/task/${task.id}`)}
                    className="btn btn-primary"
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(task)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tasks;