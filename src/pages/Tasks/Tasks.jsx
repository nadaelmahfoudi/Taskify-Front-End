import React, { useEffect, useState} from 'react';
import axios from 'axios';
import config from '../../config.json';
import './Tasks.css';
import { useNavigate } from 'react-router-dom';

const Tasks = () => {
    const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axios.get(config.apiUrl);
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  console.log(tasks);

  return (
    <div className="tasks">
      <div className="container">
        <button onClick={() => navigate("/task/new")} className="btn btn-primary mb-4">Add new Task</button>
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Completed</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map(task=>
                    <tr key={task._id}>
                        <td>{task.name}</td>
                        <td>{task.not_completed}</td>
                        <td><button onClick={() => navigate(`/task/${task.id}`)}  className="btn btn-primary">Update</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                    )}
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tasks;
