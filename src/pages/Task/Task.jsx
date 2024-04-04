import config from "../../config.json";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Task.css";
import { useParams, useNavigate } from "react-router-dom";


const Task = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [task, setTask] = useState({
    name: "",
    not_completed: "",
  });



  const fetchTask = async () => {
    const { data } = await axios.get(`${config.apiUrl}/${id}`)
    setTask(data.data);
  };

  useEffect(() => {
    if (!id) return;
    fetchTask();
  }, []);





  const handleChange = (e) => {
    const taskClone = { ...task };
    taskClone[e.target.name] = e.target.value;
    setTask(taskClone);
  };




  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(task.name);
    if (!id) {
      await axios.post(config.apiUrl, task);
      return navigate("/");
    } else {
      await axios.put(`${config.apiUrl}/${id}`, task);
      return navigate("/");
    }
  };





  return (
    <div className="task__wrapper">
      <div className="container">
        <form className="task">
          <input
            type="text"
            placeholder="Name..."
            name="name"
            value={task.name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Not_Completed..."
            name="not_completed"
            value={task.not_completed}
            onChange={handleChange}
          />
          <button onClick={handleSubmit} className="btn btn-primary">
            {id === "new" ? "Task" : "Update"}
          </button>
        </form>
      </div>

    </div>
  );
};

export default Task;